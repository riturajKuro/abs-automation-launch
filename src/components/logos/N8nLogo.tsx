import n8nLogo from '@/assets/n8n-logo.png'

export const N8nLogo = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={n8nLogo} alt="n8n" {...props} className="h-full w-full object-contain" />
)
