import anthropicLogo from '@/assets/anthropic-logo.jpg'

export const AnthropicLogo = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={anthropicLogo} alt="Anthropic" {...props} className="h-full w-full object-contain rounded-lg" />
)
