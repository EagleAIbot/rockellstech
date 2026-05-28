#!/usr/bin/env bash
# Check job apply URLs are still live. Run manually or via cron every 6–12 hours.
set -euo pipefail

DIR="$(cd "$(dirname "$0")" && pwd)"
JOBS="$DIR/jobs.json"
STATUS="$DIR/jobs-status.json"
TRACKER="$DIR/TRACKER.md"

if [[ ! -f "$JOBS" ]]; then
  echo "Missing $JOBS" >&2
  exit 1
fi

NOW="$(date -u +"%Y-%m-%dT%H:%M:%SZ")"

python3 - "$JOBS" "$STATUS" "$NOW" <<'PY'
import json, subprocess, sys

jobs_path, status_path, now = sys.argv[1:4]
with open(jobs_path) as f:
    data = json.load(f)

results = []
for job in data["jobs"]:
    url = job["applyUrl"]
    code = 0
    active = False
    err = ""
    try:
        out = subprocess.run(
            ["curl", "-sI", "-o", "/dev/null", "-w", "%{http_code}", "-L", "--max-time", "20", url],
            capture_output=True,
            text=True,
            check=False,
        )
        code = int(out.stdout.strip() or "0")
        active = 200 <= code < 400
        if out.stderr:
            err = out.stderr.strip()[:120]
    except Exception as e:
        err = str(e)[:120]

    results.append({
        **job,
        "lastChecked": now,
        "httpCode": code,
        "active": active,
        "checkError": err,
    })

out = {"polledAt": now, "jobs": results}
with open(status_path, "w") as f:
    json.dump(out, f, indent=2)

active_n = sum(1 for j in results if j["active"])
print(f"Checked {len(results)} URLs — {active_n} active")
PY

python3 - "$JOBS" "$STATUS" "$TRACKER" <<'PY'
import json, sys

jobs_path, status_path, tracker_path = sys.argv[1:4]
with open(jobs_path) as f:
    meta = json.load(f)
with open(status_path) as f:
    status = json.load(f)

by_id = {j["id"]: j for j in status["jobs"]}
polled = status["polledAt"]

lines = [
    "# Job tracker — Jack Rockell",
    "",
    f"**Last polled (UTC):** {polled}",
    "",
    "Run `./poll-jobs.sh` to refresh. ✅ = apply link OK.",
    "",
    "| Pri | ID | Fit | Active | Company | Role | Remote | Status | Apply |",
    "|-----|-----|-----|--------|---------|------|--------|--------|-------|",
]

for job in sorted(meta["jobs"], key=lambda x: x["priority"]):
    s = by_id.get(job["id"], {})
    active = s.get("active", False)
    code = s.get("httpCode", "—")
    flag = "✅" if active else "❌"
    st = job.get("status", "todo")
    url = job["applyUrl"]
    lines.append(
        f"| {job['priority']} | {job['id']} | {job['fit']}/10 | {flag} {code} | "
        f"{job['company']} | {job['title']} | {job['remote']} | **{st}** | [Apply]({url}) |"
    )

lines += [
    "",
    "## Status legend",
    "",
    "- `todo` — ready to apply",
    "- `applied` — you submitted",
    "- `interview` — in process",
    "- `skip` — low fit or dead link",
    "",
    "## Apply this week (priority)",
    "",
    "1. **[P01 Prolific](https://job-boards.eu.greenhouse.io/prolific/jobs/4390860101)** — Greenhouse, copy from APPLY_KIT § P01",
    "2. **[M01 Longshot](https://apply.workable.com/longshot-systems-ltd/j/7A58A7782C)** — Workable, copy § M01",
    "3. **P02 Owen Thomas** — find direct apply from aggregator",
    "4. **[M02 Superbet](https://builtinlondon.uk/job/senior-machine-learning-engineer-applied-ml-research/8942880)**",
    "5. **[T01 Applied Blockchain](https://sailonchain.com/jobs/senior-trading-platform-engineer-full-stack-applied-blockchain)** — hybrid London",
    "",
    "Full copy-paste: [APPLY_KIT.md](./APPLY_KIT.md)",
]

with open(tracker_path, "w") as f:
    f.write("\n".join(lines) + "\n")

print(f"Wrote {tracker_path}")
PY

echo "Done."
