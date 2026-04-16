import { useMemo, useState } from 'react';

const whatsappNumber = '9497314398';
const whatsappUrl = `https://wa.me/91${whatsappNumber}`;

const content = {
  en: {
    nav: ['Home', 'Products', 'About', 'Why Us', 'Reviews', 'Contact'],
    heroTitle: 'Premium Custom Printing & Gift Studio',
    heroSubtitle:
      'APPLE GRAPHICS, Mulleria — elegant wedding cards, luxury invitations, personalized gifts, and professional printing services.',
    ctaView: 'View Products',
    ctaOrder: 'WhatsApp Order',
    trustTitle: 'Trusted by families and businesses across Kasaragod',
    trustItems: ['High Quality Print Finish', 'Custom Design Support', 'Fast Turnaround'],
    featured: 'Featured Categories',
    aboutTitle: 'About APPLE GRAPHICS',
    aboutBody:
      'We craft memorable print experiences with modern design and premium production. From wedding cards to personalized gifts, every order is made with precision.',
    whyTitle: 'Why Choose Us',
    reasons: ['Affordable Pricing', 'Fast Delivery', 'Custom Design', 'Premium Quality'],
    reviews: 'Customer Reviews',
    contact: 'Contact Us',
    contactBody: 'For instant quotation and order booking, connect with us on WhatsApp.',
    form: { name: 'Name', phone: 'Phone', message: 'Message', send: 'Send Inquiry' },
    hours: 'Business Hours',
    quickLinks: 'Quick Links'
  },
  ml: {
    nav: ['ഹോം', 'ഉൽപ്പന്നങ്ങൾ', 'ഞങ്ങളേക്കുറിച്ച്', 'എന്തുകൊണ്ട് ഞങ്ങൾ', 'അഭിപ്രായങ്ങൾ', 'ബന്ധപ്പെടുക'],
    heroTitle: 'പ്രീമിയം കസ്റ്റം പ്രിന്റിംഗും ഗിഫ്റ്റ് സ്റ്റുഡിയോയും',
    heroSubtitle:
      'മുളളേരിയയിലെ APPLE GRAPHICS — വിവാഹ കാർഡുകൾ, കസ്റ്റം ക്ഷണങ്ങൾ, വ്യക്തിഗത സമ്മാനങ്ങൾ, പ്രൊഫഷണൽ പ്രിന്റിംഗ് സേവനങ്ങൾ.',
    ctaView: 'ഉൽപ്പന്നങ്ങൾ കാണുക',
    ctaOrder: 'വാട്‌സ്ആപ്പ് ഓർഡർ',
    trustTitle: 'കാസർഗോഡിലെ കുടുംബങ്ങളും ബിസിനസ്സുകളും വിശ്വസിക്കുന്ന സേവനം',
    trustItems: ['ഉന്നത നിലവാരമുള്ള പ്രിന്റ്', 'കസ്റ്റം ഡിസൈൻ പിന്തുണ', 'വേഗത്തിലുള്ള ഡെലിവറി'],
    featured: 'പ്രധാന വിഭാഗങ്ങൾ',
    aboutTitle: 'APPLE GRAPHICS പരിചയം',
    aboutBody:
      'മോഡേൺ ഡിസൈനും പ്രീമിയം പ്രിന്റിംഗും ഉപയോഗിച്ച് ഓർമ്മിക്കപ്പെടുന്ന ഉൽപ്പന്നങ്ങൾ നിർമിക്കുന്നു. വിവാഹ ക്ഷണപ്പത്രികയിൽ നിന്നും വ്യക്തിഗത സമ്മാനങ്ങളോളം എല്ലാം കൃത്യതയോടെ.',
    whyTitle: 'എന്തുകൊണ്ട് ഞങ്ങളെ തിരഞ്ഞെടുക്കണം',
    reasons: ['മിതമായ വില', 'വേഗത്തിൽ ഡെലിവറി', 'കസ്റ്റം ഡിസൈൻ', 'പ്രീമിയം ഗുണമേൻമ'],
    reviews: 'ഉപഭോക്തൃ അഭിപ്രായങ്ങൾ',
    contact: 'ബന്ധപ്പെടുക',
    contactBody: 'തത്സമയം ക്വട്ടേഷൻക്കും ഓർഡറിനും വാട്‌സ്ആപ്പിൽ ബന്ധപ്പെടുക.',
    form: { name: 'പേര്', phone: 'ഫോൺ', message: 'സന്ദേശം', send: 'അയക്കുക' },
    hours: 'ബിസിനസ് സമയം',
    quickLinks: 'ത്വരിത ലിങ്കുകൾ'
  }
};

const categories = ['All', 'Wedding Cards', 'Frames', 'Gifts', 'Printing Works'];

const products = [
  { title: 'Royal Wedding Invite', price: '₹35', category: 'Wedding Cards', image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80' },
  { title: 'Luxury Couple Frame', price: '₹699', category: 'Frames', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80' },
  { title: 'Personalized Mug Combo', price: '₹299', category: 'Gifts', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=800&q=80' },
  { title: 'Premium Brochure Print', price: '₹8', category: 'Printing Works', image: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&w=800&q=80' },
  { title: 'Foil Invitation Set', price: '₹55', category: 'Wedding Cards', image: 'https://images.unsplash.com/photo-1516961642265-531546e84af2?auto=format&fit=crop&w=800&q=80' },
  { title: 'Return Gift Box', price: '₹120', category: 'Gifts', image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80' }
];

const testimonials = [
  { name: 'Afsal K', text: 'Very premium finish and super fast delivery for our wedding cards.' },
  { name: 'Rashmi N', text: 'They designed exactly what we imagined. Highly recommended in Mulleria.' },
  { name: 'Niyas P', text: 'Best place for personalized gifts and quality printing services.' }
];

function App() {
  const [lang, setLang] = useState('en');
  const [filter, setFilter] = useState('All');
  const [slide, setSlide] = useState(0);
  const t = content[lang];

  const filteredProducts = useMemo(
    () => (filter === 'All' ? products : products.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <div className="bg-ink text-paper">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="text-lg font-semibold tracking-[0.2em]">APPLE GRAPHICS</a>
          <div className="hidden gap-6 text-sm md:flex">
            {['home', 'products', 'about', 'why', 'reviews', 'contact'].map((id, i) => (
              <a key={id} href={`#${id}`} className="hover:text-accent transition">{t.nav[i]}</a>
            ))}
          </div>
          <button
            className="rounded-full border border-white/20 px-3 py-1 text-xs"
            onClick={() => setLang((l) => (l === 'en' ? 'ml' : 'en'))}
          >
            {lang === 'en' ? 'മലയാളം' : 'English'}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Mulleria, Kerala</p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">{t.heroTitle}</h1>
            <p className="text-white/70">{t.heroSubtitle}</p>
            <div className="flex gap-3">
              <a href="#products" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">{t.ctaView}</a>
              <a href={whatsappUrl} className="rounded-full border border-white/40 px-5 py-3 text-sm">{t.ctaOrder}</a>
            </div>
          </div>
          <div className="gradient-border rounded-3xl p-2 shadow-premium">
            <img
              src="https://images.unsplash.com/photo-1529511582893-2d7e684dd128?auto=format&fit=crop&w=1200&q=80"
              alt="Premium printing setup"
              className="h-full min-h-[320px] w-full rounded-[1.3rem] object-cover"
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-12">
          <h2 className="mb-4 text-xl font-semibold">{t.trustTitle}</h2>
          <div className="grid gap-3 md:grid-cols-3">
            {t.trustItems.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">{item}</div>
            ))}
          </div>
        </section>

        <section id="products" className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-3xl font-semibold">{t.featured}</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`rounded-full px-3 py-1 text-sm transition ${filter === category ? 'bg-white text-black' : 'border border-white/20'}`}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <article key={product.title} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img src={product.image} alt={product.title} className="h-52 w-full object-cover" />
                <div className="space-y-3 p-4">
                  <h3 className="text-lg font-medium">{product.title}</h3>
                  <p className="text-sm text-white/70">Starting from {product.price}</p>
                  <a href={`${whatsappUrl}?text=I%20want%20to%20order%20${encodeURIComponent(product.title)}`} className="inline-block rounded-full bg-accent px-4 py-2 text-xs font-semibold text-black">
                    {t.ctaOrder}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-3 text-3xl font-semibold">{t.aboutTitle}</h2>
            <p className="max-w-3xl text-white/75">{t.aboutBody}</p>
          </div>
        </section>

        <section id="why" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="mb-6 text-3xl font-semibold">{t.whyTitle}</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {t.reasons.map((reason) => (
              <div key={reason} className="rounded-2xl border border-white/10 p-6 text-center text-sm font-medium">{reason}</div>
            ))}
          </div>
        </section>

        <section id="reviews" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="mb-6 text-3xl font-semibold">{t.reviews}</h2>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="mb-4 text-lg">“{testimonials[slide].text}”</p>
            <p className="text-sm text-white/70">— {testimonials[slide].name}</p>
            <div className="mt-5 flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} className={`h-2 w-8 rounded-full ${i === slide ? 'bg-accent' : 'bg-white/20'}`} onClick={() => setSlide(i)} aria-label={`Review ${i + 1}`}/>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="mb-3 text-3xl font-semibold">{t.contact}</h2>
          <p className="mb-8 text-white/70">{t.contactBody}</p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <a className="block rounded-xl bg-green-500 px-4 py-3 text-center font-semibold text-black" href={whatsappUrl}>WhatsApp: +91 {whatsappNumber}</a>
              <a className="block rounded-xl border border-white/20 px-4 py-3 text-center" href="#">Instagram (coming soon)</a>
              <iframe
                title="Mulleria Map"
                className="h-64 w-full rounded-xl border-0"
                loading="lazy"
                src="https://maps.google.com/maps?q=Mulleria%2C%20Kerala&t=&z=13&ie=UTF8&iwloc=&output=embed"
              />
            </div>
            <form className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-6">
              <input className="w-full rounded-xl border border-white/20 bg-black/30 p-3" placeholder={t.form.name} />
              <input className="w-full rounded-xl border border-white/20 bg-black/30 p-3" placeholder={t.form.phone} />
              <textarea rows="4" className="w-full rounded-xl border border-white/20 bg-black/30 p-3" placeholder={t.form.message} />
              <button className="rounded-xl bg-white px-5 py-3 font-semibold text-black">{t.form.send}</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/70">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
          <div>
            <h3 className="mb-2 text-lg font-semibold">APPLE GRAPHICS</h3>
            <p className="text-sm text-white/60">Mulleria, Kerala, India</p>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-semibold">{t.quickLinks}</h4>
            <div className="space-y-1 text-sm text-white/70">
              <a className="block" href="#home">Home</a>
              <a className="block" href="#products">Products</a>
              <a className="block" href="#contact">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-semibold">{t.hours}</h4>
            <p className="text-sm text-white/70">Mon - Sat: 9:30 AM - 8:00 PM</p>
            <p className="text-sm text-white/70">Sunday: 10:00 AM - 2:00 PM</p>
          </div>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        className="fixed bottom-5 right-5 z-50 animate-float rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-black shadow-lg"
      >
        WhatsApp
      </a>
    </div>
  );
}

export default App;
