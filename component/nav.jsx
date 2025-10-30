import { useState, useEffect } from 'react';

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Hide on scroll down, show on scroll up
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);

      // Glassmorphism effect after first page
      if (currentScrollPos > window.innerHeight) {
        setScrolledPastHero(true);
      } else {
        setScrolledPastHero(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed w-full z-40 text-white p-4 sm:p-6  text-lg sm:text-xl md:text-2xl transition-all duration-300 ${visible ? 'top-0' : '-top-40'} ${scrolledPastHero ? 'md:bg-black/30 md:backdrop-blur-md md:shadow-lg' : 'bg-transparent md:showdow-none'}`}
    >
      <div className="flex h-32 justify-end md:justify-between items-center w-full">
        <img src="../src/assets/heading.png" className="w-1/9 hidden md:block"/>
        <div className="flex items-center justify-end">
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="black"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`fixed top-0 right-0 h-full w-full bg-gray-800 transition-transform duration-300 ease-in-out md:hidden ${
              isOpen ? 'transform translate-x-0' : 'transform translate-x-full'
            }`}
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setIsOpen(false)} className="p-2 rounded-md">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <ul className="flex flex-col items-center justify-center h-full">
              <li className="py-2 text-center transition-all duration-300 ease-in-out delay-150"><a href="https://forms.gle/GSb4uhT2aki8duXX6" target="_blank">[ register ]</a></li>
              <li className="py-2 text-center transition-all duration-300 ease-in-out delay-200"><a href="#schedule">[ events ]</a></li>
              <li className="py-2 text-center transition-all duration-300 ease-in-out delay-250"><a href="https://maps.app.goo.gl/gj7j57ZEZB3m4srz6" target="_blank">[ map ]</a></li>
            </ul>
          </div>
          <ul className="hidden md:flex md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-11 items-center justify-end">
            <li className="py-2 md:py-0 text-center"><a href="https://forms.gle/GSb4uhT2aki8duXX6">[ register ]</a></li>
            <li className="py-2 md:py-0 text-center"><a href="#schedule">[ events ]</a></li>
            <li className="py-2 md:py-0 text-center"><a href="https://maps.app.goo.gl/gj7j57ZEZB3m4srz6" target="_blank">[ map ]</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
