import geminiLogo from '@/assets/gemini-logo.svg'

export const GeminiLogo = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={geminiLogo} alt="Gemini" {...props} className="h-full w-full object-contain" />
)
