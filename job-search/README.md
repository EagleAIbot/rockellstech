# Job search kit

Pre-filled tracker and copy-paste fields so you only click **Apply** and paste.

## Live on your site (password protected)

**URL:** https://rockellstech.com/apply

1. Choose a password and generate hash:
   ```bash
   npm run tracker:hash -- "YourSecretPassword"
   ```
2. **GitHub:** Repo → Settings → Secrets → Actions → New secret  
   Name: `TRACKER_PASSWORD_HASH` · Value: the 64-char hash from step 1
3. **Local dev:** paste same hash into `.env.local` as `VITE_TRACKER_PASSWORD_HASH=...`
4. Push to `main` — deploy workflow bakes the hash into the build

Not linked from the public portfolio. Session lasts until you click **Lock** or close the browser tab.

## Files

| File | Purpose |
|------|---------|
| [TRACKER.md](./TRACKER.md) | Live table — which roles are active (auto-generated) |
| [APPLY_KIT.md](./APPLY_KIT.md) | Work experience, skills, why-me blurbs |
| [jobs.json](./jobs.json) | Master list — edit `status`: `todo` → `applied` |
| `poll-jobs.sh` | Checks apply URLs still work |

## Poll for active jobs (run often)

```bash
cd job-search
chmod +x poll-jobs.sh
./poll-jobs.sh
```

Opens `TRACKER.md` — ✅ means the apply link responded OK.

### Auto-poll every 6 hours (Mac)

```bash
crontab -e
```

Add:

```
0 */6 * * * cd "/Users/jackrockell/Desktop/FLEXING ROCKS WORK/rockellstech/job-search" && ./poll-jobs.sh >> poll.log 2>&1
```

Or ask Cursor: “run job poll” and it will refresh the tracker.

## Apply workflow (10 min per job)

1. Open [TRACKER.md](./TRACKER.md) — pick highest priority with ✅
2. Open [APPLY_KIT.md](./APPLY_KIT.md) — copy role blurb (e.g. P01 for Prolific)
3. Upload **Jack Rockell Resume.pdf**
4. Paste work experience + skills from APPLY_KIT
5. Submit → set `"status": "applied"` for that `id` in `jobs.json` → run `./poll-jobs.sh`

## Priority order this week

1. **P01** Prolific — Greenhouse, remote UK  
2. **M01** Longshot — Workable, sports ML  
3. **P02** Owen Thomas — find direct apply from listing  
4. **M02** Superbet  
5. **T01** Trading platform (hybrid London)

## What this does NOT do

- Cannot auto-submit Workday/Greenhouse (login + CAPTCHA + ToS)
- Aggregator links (RemoteITJobs, StudySmarter) may need you to find the company’s real apply page
