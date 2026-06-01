import CTASection from '@/components/CTASection'

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-40 pb-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">The Photographer</p>
          <h1 className="font-serif text-5xl md:text-7xl text-white">About</h1>
        </div>
      </div>

      {/* Main content */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Portrait */}
            <div className="img-zoom overflow-hidden aspect-[3/4]">
              <img
                src="https://artistlens.com/wp-content/uploads/2025/04/6fc137_e0a0188af6ce4cb8bd81a50c92a8b47cmv2.webp"
                alt="Yasser Al-Mulqi"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <div className="md:pt-8">
              <h2 className="font-serif text-4xl text-white mb-2">Yasser Al-Mulqi</h2>
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-10">Professional Photographer · Al Khobar</p>
              <div className="space-y-6 text-white/50 text-sm leading-relaxed">
                <p>Hello, my name is Yasser Al-Mulqi, and I have been passionate about photography for most of my life. This commitment to photography has allowed me to amass over 20 years of experience.</p>
                <p>Frum creating the perfect image of sumptuous gateaux to capturing the essence of a luxurious hotel, my focus is not just to create technically perfect images, but to produce art that stirs the emotions.</p>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-14 pt-14 border-t border-white/10">
                {[{value:'20+',label:'Years Experience'},{value:'500+',label:'Projects Completed'},{value:'2009',label:'Est.'}].map(s => (
                  <div key={s.label}>
                    <p className="font-serif text-3xl text-gold mb-1">{s.value}</p>
                    <p className="text-white/30 text-xs tracking-[0.1em] uppercase">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
