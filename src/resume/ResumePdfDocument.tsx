import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Link,
  Font,
} from '@react-pdf/renderer'
import {
  careerHighlights,
  experience,
  projectHighlights,
  resumeMeta,
  resumeSummary,
  skillGroups,
} from '../data/resume'

Font.registerHyphenationCallback((word) => [word])

const accent = '#0891b2'
const ink = '#0f172a'
const muted = '#475569'

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 32,
    paddingTop: 32,
    paddingBottom: 32,
    fontFamily: 'Helvetica',
    fontSize: 8.5,
    color: ink,
  },
  topBar: {
    height: 4,
    backgroundColor: accent,
    marginBottom: 16,
    marginHorizontal: -32,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  headerText: {
    flex: 1,
    paddingRight: 14,
    flexDirection: 'column',
  },
  nameBlock: { marginBottom: 8 },
  name: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    color: ink,
    lineHeight: 1.25,
  },
  titleBlock: { marginBottom: 10 },
  title: {
    fontSize: 9.5,
    color: accent,
    fontFamily: 'Helvetica-Bold',
    lineHeight: 1.3,
  },
  contact: {
    fontSize: 8,
    color: muted,
    lineHeight: 1.45,
    marginBottom: 4,
  },
  link: { color: accent, textDecoration: 'none' },
  photo: {
    width: 64,
    height: 64,
    borderRadius: 6,
    objectFit: 'cover',
    objectPosition: 'center top',
  },
  sectionTitle: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: accent,
    letterSpacing: 1,
    marginBottom: 5,
    marginTop: 7,
  },
  summary: { fontSize: 8.5, color: ink, marginBottom: 2, lineHeight: 1.4 },
  highlightBullet: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 3,
    paddingLeft: 10,
    lineHeight: 1.35,
    color: ink,
  },
  skillBlock: { marginBottom: 4 },
  skillLabel: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8,
    color: ink,
    marginBottom: 1,
  },
  skillList: { fontSize: 8, color: muted, lineHeight: 1.35 },
  jobBlock: { marginBottom: 7 },
  jobHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 1,
  },
  jobCompany: { fontFamily: 'Helvetica-Bold', fontSize: 9.5, flex: 1 },
  jobDates: { fontSize: 7.5, color: muted, width: 82, textAlign: 'right' },
  jobRole: { fontSize: 8.5, color: accent, marginBottom: 3 },
  bullet: {
    fontSize: 8.5,
    marginBottom: 2,
    paddingLeft: 10,
    lineHeight: 1.35,
  },
})

type Props = { photoSrc: string }

function Bullet({ children, strong }: { children: string; strong?: boolean }) {
  return (
    <Text style={strong ? styles.highlightBullet : styles.bullet}>• {children}</Text>
  )
}

export function ResumePdfDocument({ photoSrc }: Props) {
  return (
    <Document title={`${resumeMeta.name} Resume`} author={resumeMeta.name}>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.topBar} />

        <View style={styles.header} wrap={false}>
          <View style={styles.headerText}>
            <View style={styles.nameBlock}>
              <Text style={styles.name}>{resumeMeta.name}</Text>
            </View>
            <View style={styles.titleBlock}>
              <Text style={styles.title}>{resumeMeta.title}</Text>
            </View>
            <Text style={styles.contact}>{resumeMeta.email}</Text>
            <Text style={styles.contact}>{resumeMeta.location}</Text>
            <Text style={styles.contact}>
              <Link src={resumeMeta.website} style={styles.link}>
                rockellstech.com
              </Link>
              {'  ·  '}
              <Link src={resumeMeta.github} style={styles.link}>
                github.com/EagleAIbot
              </Link>
            </Text>
          </View>
          <Image src={photoSrc} style={styles.photo} />
        </View>

        <Text style={styles.sectionTitle}>PROFESSIONAL SUMMARY</Text>
        <Text style={styles.summary}>{resumeSummary}</Text>

        <Text style={styles.sectionTitle}>KEY HIGHLIGHTS</Text>
        {careerHighlights.map((h) => (
          <Bullet key={h.slice(0, 40)} strong>
            {h}
          </Bullet>
        ))}

        <Text style={styles.sectionTitle}>TECHNICAL SKILLS</Text>
        {skillGroups.map((g) => (
          <View key={g.label} style={styles.skillBlock} wrap={false}>
            <Text style={styles.skillLabel}>{g.label}</Text>
            <Text style={styles.skillList}>{g.skills.join(', ')}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>
        {experience.map((job) => (
          <View key={job.company + job.dates} style={styles.jobBlock}>
            <View style={styles.jobHead} wrap={false}>
              <Text style={styles.jobCompany}>{job.company}</Text>
              <Text style={styles.jobDates}>{job.dates}</Text>
            </View>
            <Text style={styles.jobRole}>{job.role}</Text>
            {job.bullets.map((b) => (
              <Bullet key={b.slice(0, 48)}>{b}</Bullet>
            ))}
          </View>
        ))}

        <Text style={styles.sectionTitle}>SELECTED PROJECTS</Text>
        {projectHighlights.map((p) => (
          <Bullet key={p.slice(0, 40)}>{p}</Bullet>
        ))}
      </Page>
    </Document>
  )
}
