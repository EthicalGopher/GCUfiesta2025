import { useState, useEffect } from 'react';

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <nav
      className={`fixed bg-transparent w-full z-20 text-white p-11 text-2xl transition-top duration-300 ${visible ? 'top-0' : '-top-40'}`}>
      <ul className="flex gap-11 w-full justify-end p-11">
        <li>[ register ]</li>
        <li>[ events ]</li>
        <li>[ map ]</li>
      </ul>
    </nav>
  );
}
