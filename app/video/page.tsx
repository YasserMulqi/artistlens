import CTASection from '@/components/CTASection'

const services = [
  { title: 'Commercial Video', description: 'High-impact commercial productions that tell your brand story with cinematic quality.' },
  { title: 'Food & Product Video', description: 'Dynamic video content that showcases your food and products in the most compelling way.' },
  { title: 'Cinematic / Visual Effects', description: 'Cinematic storytelling with advanced visual effects that resonates with audiences.' },
]

export default function VideoPage() {
  return (
    <>
      <div className="pt-40 pb-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Production</p>
          <h1 className="font-serif text-5xl md:text-7xl text-white">Video</h1>
        </div>
      </div>

      <section className="relative h-[60vh] bg-[#050505] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://artistlens.com/wp-content/uploads/2025/04/DSC_1099-300x169.webp')" }}
        />
        <div className="relative z-10 text-center">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">Reel 2024</p>
          <div className="w-20 h-20 border border-white/30 rounded-full flex items-center justify-center mx-auto hover:border-gold transition-colors duration-300 cursor-pointer group">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-gold ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mt-6">Watch Showreel</p>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">What We Offer</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white">Video Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {services.map((service) => (
              <div key={service.title} className="bg-[#0a0a0a] p-10 group hover:bg-[#111] transition-colors duration-300">
                <div className="w-8 h-px bg-gold mb-8 group-hover:w-16 transition-all duration-500" />
                <h3 className="text-white text-sm tracking-[0.1em] uppercase mb-4">{service.title}</h3>
                <p className="text-white/35 text-xs leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
