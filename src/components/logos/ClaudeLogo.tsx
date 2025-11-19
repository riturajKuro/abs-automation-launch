import claudeLogo from '@/assets/claude-logo.webp'

export const ClaudeLogo = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={claudeLogo} alt="Claude" {...props} className="h-full w-full object-contain" />
)
