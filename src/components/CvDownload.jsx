import { Download } from 'lucide-react'

// Set this to true after adding the CV PDF in public/documents.
const cvAvailable = true
const cvPath = `${import.meta.env.BASE_URL}documents/MasterCV.pdf`

export default function CvDownload({ compact = false }) {
  if (!cvAvailable) return <span title="Add the CV PDF in public/documents to enable this download" className={compact ? 'text-sm text-muted' : 'inline-flex items-center gap-2 rounded-sm border border-line px-4 py-3 text-sm font-semibold text-muted'}>{compact ? 'CV pending' : 'CV pending'}</span>
  return <a href={cvPath} download className={compact ? 'button-primary inline-flex items-center gap-2 rounded-sm px-3 py-2 text-sm font-semibold' : 'button-primary inline-flex items-center gap-2 rounded-sm px-4 py-3 text-sm font-semibold'}><Download size={compact ? 15 : 17}/> {compact ? 'CV' : 'Download CV'}</a>
}
