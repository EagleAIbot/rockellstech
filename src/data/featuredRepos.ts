/** @deprecated Import from ./work instead */
export { flagshipWork as featuredRepos, workMore as workArchive } from './work'
export type { WorkItem as FeaturedRepo } from './work'

import { workMore } from './work'

/** Flat list for legacy Builds section */
export const moreRepos = workMore.flatMap((c) =>
  c.items.map((i) => ({ name: i.name, repoUrl: '#', note: i.flex })),
)
