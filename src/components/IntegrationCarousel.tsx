import { LogoCarousel, type Logo } from "@/components/ui/logo-carousel"
import {
  ClaudeLogo,
  AnthropicLogo,
  N8nLogo,
  VoiceflowLogo,
  OpenAILogo,
  GeminiLogo,
} from "@/components/logos"

const integrationLogos: Logo[] = [
  { name: "Claude", id: 1, img: ClaudeLogo },
  { name: "Anthropic", id: 2, img: AnthropicLogo },
  { name: "n8n", id: 3, img: N8nLogo },
  { name: "Voiceflow", id: 4, img: VoiceflowLogo },
  { name: "OpenAI", id: 5, img: OpenAILogo },
  { name: "Gemini", id: 6, img: GeminiLogo },
]

export const IntegrationCarousel = () => {
  return (
    <section id="integrations" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Powered By Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We integrate with the best AI and automation platforms to deliver cutting-edge solutions
          </p>
        </div>
        
        <div className="flex justify-center">
          <LogoCarousel logos={integrationLogos} columnCount={3} />
        </div>
      </div>
    </section>
  )
}
