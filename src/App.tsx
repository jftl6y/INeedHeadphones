import './App.css'
import type { CSSProperties } from 'react';

interface HeadphoneBrand {
  name: string;
  url: string;
}

function App() {
  const expensiveBrands: HeadphoneBrand[] = [
    { name: '💀 Beats', url: 'https://www.beatsbydre.com/' },
    { name: '🔥 Bose', url: 'https://www.bose.com/' },
    { name: '⚡ Apple AirPods Max', url: 'https://www.apple.com/airpods-max/' },
    { name: '🎧 Sennheiser', url: 'https://www.sennheiser.com/' },
    { name: '💎 Bang & Olufsen', url: 'https://www.bang-olufsen.com/' }
  ];

  const midRangeBrands: HeadphoneBrand[] = [
    { name: '⚔️ Sony', url: 'https://www.sony.com/electronics/headphones' },
    { name: '🌟 Samsung', url: 'https://www.samsung.com/us/audio/headphones/' },
    { name: '🚀 JBL', url: 'https://www.jbl.com/headphones/' },
    { name: '🎵 Audio-Technica', url: 'https://www.audio-technica.com/' },
    { name: '🔊 Jabra', url: 'https://www.jabra.com/' }
  ];

  const budgetBrands: HeadphoneBrand[] = [
    { name: '💀 Skullcandy', url: 'https://www.skullcandy.com/' },
    { name: '⚡ Philips', url: 'https://www.philips.com/c-m-so/headphones' },
    { name: '🔋 Anker Soundcore', url: 'https://www.soundcore.com/' },
    { name: '🎧 JLab', url: 'https://www.jlab.com/' },
    { name: '🌿 House of Marley', url: 'https://www.thehouseofmarley.com/' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-900 text-white relative overflow-hidden">
      {/* Glitch effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent animate-pulse"></div>
      
      <header className="py-16 text-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 glitch-text">
          I NEED HEADPHONES
        </h1>
        <div className="text-xl md:text-2xl text-red-400 font-bold mb-2">
          🔥 NOBODY WANTS TO HEAR YOUR TRASH 🔥
        </div>
        <p className="text-lg text-gray-300 italic">Stop being THAT person. Get some headphones. NOW.</p>
      </header>

      <main className="container mx-auto px-4 pb-16 relative z-10">
        <div className="mb-16">
          <div className="bg-black/70 border-2 border-red-500/50 p-8 rounded-lg mb-8 shadow-2xl backdrop-blur-sm border-glow">
            <h2 className="text-4xl font-black mb-6 text-center text-red-400">⚠️ REALITY CHECK ⚠️</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p className="text-center text-gray-200">
                <span className="text-red-400 font-bold">LISTEN UP:</span> Nobody gives a damn about your TikToks, your phone calls, or your music taste.
              </p>
              <p className="text-center text-gray-300">
                Keep your audio to yourself and stop being a public menace. 
                <br />
                <span className="text-orange-400 font-bold">Choose your weapon below</span> 👇
              </p>
            </div>
          </div>
        </div>

        <section className="mb-16 fade-in">
          <h2 className="text-5xl font-black mb-8 text-center text-yellow-400 text-shadow-glow">
            💰 I'M BOUGIE AF 💰
          </h2>
          <p className="text-xl mb-8 text-center text-gray-300 font-bold">
            Premium audio for people with <span className="text-yellow-400">TASTE</span> and <span className="text-green-400">MONEY</span>
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expensiveBrands.map((brand, index) => (
              <a 
                key={brand.name}
                href={brand.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="headphone-category bg-gradient-to-br from-yellow-600/20 to-orange-800/20 hover:from-yellow-500/30 hover:to-orange-700/30 border-2 border-yellow-500/30 hover:border-yellow-400 p-6 rounded-lg text-center transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20"
                style={{ '--index': index } as CSSProperties}
              >
                <h3 className="text-2xl font-bold text-yellow-300 hover:text-yellow-100 transition-colors">{brand.name}</h3>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-16 fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-5xl font-black mb-8 text-center text-blue-400 text-shadow-glow">
            🤖 I'M BASIC AND THATS OK 🤖
          </h2>
          <p className="text-xl mb-8 text-center text-gray-300 font-bold">
            Solid headphones for <span className="text-blue-400">NORMAL HUMANS</span> with reasonable expectations
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {midRangeBrands.map((brand, index) => (
              <a 
                key={brand.name}
                href={brand.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="headphone-category bg-gradient-to-br from-blue-600/20 to-purple-800/20 hover:from-blue-500/30 hover:to-purple-700/30 border-2 border-blue-500/30 hover:border-blue-400 p-6 rounded-lg text-center transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                style={{ '--index': index } as CSSProperties}
              >
                <h3 className="text-2xl font-bold text-blue-300 hover:text-blue-100 transition-colors">{brand.name}</h3>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-16 fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-5xl font-black mb-8 text-center text-green-400 text-shadow-glow">
            💸 I'M BROKE BUT NOT BROKEN 💸
          </h2>
          <p className="text-xl mb-8 text-center text-gray-300 font-bold">
            Budget beats for people who are <span className="text-green-400">SMART</span> with their money
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {budgetBrands.map((brand, index) => (
              <a 
                key={brand.name}
                href={brand.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="headphone-category bg-gradient-to-br from-green-600/20 to-teal-800/20 hover:from-green-500/30 hover:to-teal-700/30 border-2 border-green-500/30 hover:border-green-400 p-6 rounded-lg text-center transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
                style={{ '--index': index } as CSSProperties}
              >
                <h3 className="text-2xl font-bold text-green-300 hover:text-green-100 transition-colors">{brand.name}</h3>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-black/80 border-t border-red-500/30 py-8 text-center relative z-10">
        <p className="text-gray-400 text-lg">© 2025 INeedHeadphones</p>
        <p className="text-red-400 font-bold text-sm mt-2">STOP. BEING. ANNOYING. 🎧</p>
        <p className="text-red-400 font-bold text-sm mt-2">Disclaimer: I am not making money with these links. I just want people to stop being narcisstic psychopaths who don't give a shit about other people.</p>
        
      </footer>
    </div>
  );
}

export default App;
