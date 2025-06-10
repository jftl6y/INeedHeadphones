import './App.css'
import type { CSSProperties } from 'react';

interface HeadphoneBrand {
  name: string;
  url: string;
}

function App() {
  const expensiveBrands: HeadphoneBrand[] = [
    { name: 'Beats', url: 'https://www.beatsbydre.com/' },
    { name: 'Bose', url: 'https://www.bose.com/' },
    { name: 'Apple AirPods Max', url: 'https://www.apple.com/airpods-max/' },
    { name: 'Sennheiser', url: 'https://www.sennheiser.com/' },
    { name: 'Bang & Olufsen', url: 'https://www.bang-olufsen.com/' }
  ];

  const midRangeBrands: HeadphoneBrand[] = [
    { name: 'Sony', url: 'https://www.sony.com/electronics/headphones' },
    { name: 'Samsung', url: 'https://www.samsung.com/us/audio/headphones/' },
    { name: 'JBL', url: 'https://www.jbl.com/headphones/' },
    { name: 'Audio-Technica', url: 'https://www.audio-technica.com/' },
    { name: 'Jabra', url: 'https://www.jabra.com/' }
  ];

  const budgetBrands: HeadphoneBrand[] = [
    { name: 'Skullcandy', url: 'https://www.skullcandy.com/' },
    { name: 'Philips', url: 'https://www.philips.com/c-m-so/headphones' },
    { name: 'Anker Soundcore', url: 'https://www.soundcore.com/' },
    { name: 'JLab', url: 'https://www.jlab.com/' },
    { name: 'House of Marley', url: 'https://www.thehouseofmarley.com/' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 text-white">
      <header className="py-12 text-center">
        <h1 className="text-5xl font-bold mb-2">I Need Headphones</h1>
        <p className="text-xl text-blue-200">Because nobody wants to hear your music, calls, or videos in public.</p>
      </header>

      <main className="container mx-auto px-4 pb-16">
        <div className="mb-16">
          <div className="bg-blue-800/50 p-6 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Why You Should Use Headphones</h2>
            <p className="text-lg">
              Using speakerphone or playing audio out loud in public is inconsiderate to those around you.
              Everyone deserves peaceful public spaces. Choose from our curated list of headphone options below!
            </p>
          </div>
        </div>

        <section className="mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-8 text-center">I'm Bougie</h2>
          <p className="text-xl mb-6 text-center text-blue-200">Premium headphones for the discerning ear</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
            {expensiveBrands.map((brand, index) => (
              <a 
                key={brand.name}
                href={brand.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="headphone-category bg-white/10 hover:bg-white/20 p-2 rounded-lg text-center transition-all transform hover:scale-105"
                style={{ '--index': index } as CSSProperties}
              >
                <h3 className="text-2xl font-semibold text-white">{brand.name}</h3>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-16 fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-4xl font-bold mb-8 text-center">I'm a Normie</h2>
          <p className="text-xl mb-6 text-center text-blue-200">Reliable mid-range options that won't break the bank</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
            {midRangeBrands.map((brand, index) => (
              <a 
                key={brand.name}
                href={brand.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="headphone-category bg-white/10 hover:bg-white/20 p-2 rounded-lg text-center transition-all transform hover:scale-105"
                style={{ '--index': index } as CSSProperties}
              >
                <h3 className="text-2xl font-semibold text-white">{brand.name}</h3>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-16 fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-4xl font-bold mb-8 text-center">I'm on a Budget</h2>
          <p className="text-xl mb-6 text-center text-blue-200">Affordable options that still get the job done</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
            {budgetBrands.map((brand, index) => (
              <a 
                key={brand.name}
                href={brand.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="headphone-category bg-white/10 hover:bg-white/20 p-2 rounded-lg text-center transition-all transform hover:scale-105"
                style={{ '--index': index } as CSSProperties}
              >
                <h3 className="text-2xl font-semibold text-white">{brand.name}</h3>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 py-8 text-center">
        <p className="text-blue-300">© 2025 INeedHeadphones - Making public spaces peaceful again</p>
      </footer>
    </div>
  );
}

export default App;
