export default function ContactPage() {
  return (
    <>
      <div className="pt-40 pb-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Let&apos;s Talk</p>
          <h1 className="font-serif text-5xl md:text-7xl text-white">Contact</h1>
        </div>
      </div>
      <section className="py-16 pb-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="font-serif text-3xl text-white mb-8">Start a Project</h2>
              <p className="text-white/40 text-sm leading-relaxed mb-12 max-w-md">Get in touch today to discuss your next project.</p>
              <div className="space-y-6">
                <div><p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">Email</p><a href="mailto:info@ArtistLens.com" className="text-white hover:text-gold text-sm">info@ArtistLens.com</a></div>
                <div><p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">Location</p><p className="text-white/50 text-sm">Al Khobar, Saudi Arabia</p></div>
              </div>
            </div>
            <form className="space-y-6">
              <div><label className="block text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Name</label><input type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-gold" /></div>
              <div><label className="block text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Email</label><input type="email" className="w-full bg-transparent border-b border-white/20 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-gold" /></div>
              <div><label className="block text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Message</label><textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-gold resize-none" /></div>
              <button type="submit" className="btn-gold w-full text-center mt-4">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
