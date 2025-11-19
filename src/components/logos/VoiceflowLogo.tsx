import voiceflowLogo from '@/assets/voiceflow-logo.png'

export const VoiceflowLogo = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={voiceflowLogo} alt="Voiceflow" {...props} className="h-full w-full object-contain" />
)
