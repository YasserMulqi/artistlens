import Link from 'next/link'

const services = [
  {
    title: 'Product Photography',
    description: 'Exceptional product imagery that makes your product stand out from the crowd.',
    image: 'https://artistlens.com/wp-content/uploads/2025/04/6fc137_bd9317469a8148e580103f55961963d6mv2_d_4238_2830_s_4_2-300x200.webp',
    href: '/photography#product',
  },
  {
    title: 'Food Photography',
    description: 'Images that make viewers feel like they could smell and taste the food.',
    image: 'https://artistlens.com/wp-content/uploads/2025/04/DSC_2095-300x169.webp',
    href: '/photography#food',
  },
  {
    title: 'Real Estate Photography',
    description: 'Capturing the ambience of every space to create an emotional connection.',
    image: 'https://artistlens.com/wp-content/uploads/2025/04/DSC_1099-300x169.webp',
    href: '/photography#real-estate',
  },
]
export default function ServicesSection(){return(<section className="py-24 bg-[#0d0d0d]"><div className="max-w-7xl mx-auto px-6"><div className="flex items-end justify-between mb-14"><div><p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Services</p><h2 className="font-serif text-3xl md:text-4xl text-white">Photography Services</h2></div><Link href="/photography" className="hidden md:block nav-link">View All</Link></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6">{services.map(s => <Link key={s.title} href={s.href} className="group block"><div className="img-zoom aspect-[4/3] mb-5 overflow-hidden bg-[#1a1a1a]"><img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/></div><h3 className="text-white text-sm tracking-[0.1em] uppercase mb-2 group-hover:text-gold transition-colors duration-300">{s.title}</h3><p className="text-white/40 text-xs leading-relaxed">{s.description}</p></Link>)}</div></div></section>)}