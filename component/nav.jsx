import { useState, useEffect } from 'react';

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed bg-transparent w-full z-40 text-white p-4 sm:p-6 md:p-8 lg:p-11 text-lg sm:text-xl md:text-2xl transition-all duration-300 ${
        visible ? 'top-0' : '-top-40'
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <div className="text-2xl font-bold">GCU Fiesta 2025</div>
        <div className="flex items-center justify-end">
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? '' : 'M4 6h16M4 12h16M4 18h16'}
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
                  stroke="currentColor"
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
              <li className="py-2 text-center transition-all duration-300 ease-in-out delay-150">[ register ]</li>
              <li className="py-2 text-center transition-all duration-300 ease-in-out delay-200">[ events ]</li>
              <li className="py-2 text-center transition-all duration-300 ease-in-out delay-250">[ map ]</li>
            </ul>
          </div>
          <ul className="hidden md:flex md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-11 items-center justify-end">
            <li className="py-2 md:py-0 text-center">[ register ]</li>
            <li className="py-2 md:py-0 text-center">[ events ]</li>
            <li className="py-2 md:py-0 text-center">[ map ]</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
