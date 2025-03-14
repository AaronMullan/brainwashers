export default function Home() {
  return (
    <main className="min-h-screen bg-tr808-light-gray text-tr808-black">
      <div className="fixed top-0 left-0 w-full bg-tr808-black text-tr808-yellow p-2 text-center overflow-hidden">
        <div className="marquee rainbow">
          🎵 Welcome to the BRAINWASHERS Homepage! Best viewed in Netscape Navigator! 🎵
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 mt-12">
        <div className="text-center mb-4">
          <img
            src="https://web.archive.org/web/20091027130416/http://es.geocities.com/euronews2000/hacker.gif"
            alt="Hacker"
            className="inline-block spin"
            width="50"
            height="50"
          />
        </div>

        <header className="text-center mb-8 sm:mb-16">
          <h1 className="text-4xl sm:text-6xl font-black text-tr808-red tracking-wider m-0 drop-shadow-lg glow">
            BRAINWASHERS
          </h1>
          <div className="text-lg sm:text-2xl text-tr808-blue mt-2 font-mono blink">
            Electronic Music Collective
          </div>
          <div className="text-sm text-tr808-green mt-2">
            <span className="blink">[</span> Visitors: 12,345 <span className="blink">]</span>
          </div>
        </header>

        <section className="bg-tr808-black rounded-lg p-6 sm:p-16 mb-8 sm:mb-16 relative overflow-hidden border-2 sm:border-4 border-tr808-gray construction-border">
          <div className="absolute top-2 right-2">
            <img
              src="https://web.archive.org/web/20091027130416/http://es.geocities.com/euronews2000/new.gif"
              alt="New"
              width="40"
              height="20"
            />
          </div>
          <div className="relative z-10">
            <div className="text-center text-tr808-white">
              <h2 className="text-2xl sm:text-4xl mb-3 sm:mb-4 text-tr808-green font-mono glow">
                New Album Out Now
              </h2>
              <p className="text-base sm:text-xl mb-6 sm:mb-8 text-tr808-white font-mono">
                Experience the future of electronic music
              </p>
              <button className="w-full sm:w-auto bg-tr808-orange text-tr808-black border-none px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded cursor-pointer transition-colors duration-300 hover:bg-orange-600 font-mono font-bold shadow-lg">
                <span className="rainbow">Listen Now</span>
              </button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-16">
          <div className="text-center p-6 sm:p-8 bg-tr808-white rounded-lg transition-transform duration-300 hover:-translate-y-2 border-2 border-tr808-gray shadow-lg">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 spin">🎵</div>
            <h3 className="text-lg sm:text-xl text-tr808-blue mb-2 font-mono rainbow">
              Latest Releases
            </h3>
            <p className="text-sm sm:text-base text-tr808-gray">Check out our newest tracks</p>
          </div>
          <div className="text-center p-6 sm:p-8 bg-tr808-white rounded-lg transition-transform duration-300 hover:-translate-y-2 border-2 border-tr808-gray shadow-lg">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 spin">🎸</div>
            <h3 className="text-lg sm:text-xl text-tr808-blue mb-2 font-mono rainbow">
              Live Shows
            </h3>
            <p className="text-sm sm:text-base text-tr808-gray">Upcoming performances</p>
          </div>
          <div className="text-center p-6 sm:p-8 bg-tr808-white rounded-lg transition-transform duration-300 hover:-translate-y-2 border-2 border-tr808-gray shadow-lg sm:col-span-2 lg:col-span-1 sm:mx-auto lg:mx-0 sm:w-full lg:w-auto">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 spin">🎹</div>
            <h3 className="text-lg sm:text-xl text-tr808-blue mb-2 font-mono rainbow">Merch</h3>
            <p className="text-sm sm:text-base text-tr808-gray">Official merchandise</p>
          </div>
        </section>

        <footer className="text-center mt-8 text-tr808-gray">
          <div className="mb-4">
            <img
              src="https://web.archive.org/web/20091027130416/http://es.geocities.com/euronews2000/construction.gif"
              alt="Under Construction"
              className="inline-block"
            />
          </div>
          <p className="text-xs">
            <span className="blink">⚡</span> Made with GeoCities Spirit{' '}
            <span className="blink">⚡</span>
          </p>
        </footer>
      </div>
    </main>
  );
}
