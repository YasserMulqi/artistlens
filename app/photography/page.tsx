import CTASection from '@/components/CTASection'

const categories = [
  {
    id: 'product',
    title: 'Product Photography',
    description: 'Exceptional product imagery that showcases your products at their very best.',
    images: [
      'https://artistlens.com/wp-content/uploads/2025/04/DSC_1769-200x300.webp',
      'https://artistlens.com/wp-content/uploads/2025/04/pearl_earring-300x240.jpg',
      'https://artistlens.com/wp-content/uploads/2025/04/Hoover-300x300.jpg',
      'https://artistlens.com/wp-content/uploads/2025/04/DSC_4331-214x300.webp',
    ],
  },
  {
    id: 'food',
    title: 'Food Photography',
    description: 'Images that convey the texture, emotion and craftsmanship of food.',
    images: [
      'https://artistlens.com/wp-content/uploads/2025/04/DSC_2095-300x169.webp',
      'https://artistlens.com/wp-content/uploads/2025/04/DSC_2205-300x169.webp',
      'https://artistlens.com/wp-content/uploads/2025/04/DSC_2176-300x300.webp',
      'https://artistlens.com/wp-content/uploads/2025/04/DSC_2389-e-300x206.webp',
    ],
  },
  {
    id: 'real-estate',
    title: 'Real Estate Photography',
    description: 'Capturing the ambience of interior and exterior spaces.',
    images: [
      'https://artistlens.com/wp-content/uploads/2025/04/DSC_1099-300x169.webp',
      'https://artistlens.com/wp-content/uploads/2025/04/DSC8000-e-300x242.webp',
      'https://artistlens.com/wp-content/uploads/2025/04/DSC_1093-300x169.webp',
      'https://artistlens.com/wp-content/uploads/2025/04/DSC_1928-300x200.webp',
    ],
  },
]

export default function PhotographyPage() {
  return (
    <>
      <div className="pt-40 pb-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Services</p>
          <h1 className="font-serif text-5xl md:text-7xl text-white">Photography</h1>
        </div>
      </div>

      {categories.map((cat, idx) => (
        <section
          key={cat.id}
          id={cat.id}
          className={idx % 2 === 0 ? 'py-24 bg-[#0a0a0a]' : 'py-24 bg-[#0d0d0d]'}
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">{cat.title}</h2>
            <p className="text-white/40 text-sm leading-relaxed mb-10">{cat.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {cat.images.map((img, i) => (
                <div key={i} className="img-zoom aspect-square overflow-hidden bg-[#1a1a1a]">
                  <img src={img} alt={cat.title + ' ' + (i + 1)} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  )
}
