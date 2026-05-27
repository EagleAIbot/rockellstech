import { useState } from 'react'
import { Download, FileText } from 'lucide-react'
import { pdf } from '@react-pdf/renderer'
import { ResumePreview } from '../components/ResumePreview'
import { ResumePdfDocument } from '../resume/ResumePdfDocument'
import { buildResumeText, downloadTextFile, fetchPhotoDataUrl } from '../resume/buildResumeText'

export function ResumeDownload() {
  const [busy, setBusy] = useState<'pdf' | 'txt' | null>(null)
  const [error, setError] = useState<string | null>(null)

  const downloadPdf = async () => {
    setBusy('pdf')
    setError(null)
    try {
      const photoSrc = await fetchPhotoDataUrl()
      const blob = await pdf(<ResumePdfDocument photoSrc={photoSrc} />).toBlob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'Jack_Rockell_Resume.pdf'
      a.click()
      URL.revokeObjectURL(url)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'PDF export failed')
    } finally {
      setBusy(null)
    }
  }

  const downloadTxt = () => {
    setBusy('txt')
    setError(null)
    try {
      downloadTextFile('Jack_Rockell_Resume.txt', buildResumeText())
    } finally {
      setBusy(null)
    }
  }

  return (
    <section className="rt-resume" id="resume">
      <div className="container">
        <div className="section-divider" data-reveal />
        <p className="eyebrow" data-reveal>
          Resume
        </p>
        <div className="rt-resume-head" data-reveal>
          <div>
            <h2 className="section-title">Jack Rockell</h2>
            <p className="section-subtitle rt-resume-head-sub">
              ATS-ready layout: metrics, standard sections, Eagle AI and Pitch Predict separate. Download for autofill.
            </p>
          </div>
          <div className="rt-resume-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={downloadPdf}
              disabled={busy !== null}
            >
              <Download size={16} />
              {busy === 'pdf' ? 'Building…' : 'Download PDF'}
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={downloadTxt}
              disabled={busy !== null}
            >
              <FileText size={16} />
              TXT
            </button>
          </div>
        </div>

        <div className="rt-resume-viewer" data-reveal>
          <ResumePreview />
        </div>

        {error ? <p className="rt-resume-error">{error}</p> : null}
      </div>
    </section>
  )
}
