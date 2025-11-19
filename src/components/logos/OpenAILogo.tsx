import openaiLogo from '@/assets/openai-logo.png'

export const OpenAILogo = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={openaiLogo} alt="OpenAI" {...props} className="h-full w-full object-contain" />
)
