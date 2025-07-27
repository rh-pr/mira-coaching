
import { useCallback, useEffect, useRef, useState } from 'react';
import './Nav.scss';
import { useNavigate } from 'react-router-dom';
import { scrollToHash } from '../../utilits/scrollToHash';
import { TextSplit } from '../common/TextSplit';
import { pathNames } from '../../constants/main';

import Collapse from 'bootstrap/js/dist/collapse';


function Nav() {
  const [isActive, setIsActive] = useState<number>(0);
  const collapseRef =  useRef<HTMLDivElement | null>(null);
  const href = window.location.href.split('/');

  const navigate = useNavigate();

  const handleClick = useCallback((num: number, pathNav: string) => {
    setIsActive(num);
  
     window.scrollTo({ top: 0, behavior: 'instant' }); 
    
    const [path, hash] = pathNav.split('#');
    const navPath = hash ? `/${path}#${hash}` : `/${path}`;
    toggleMenu();

    navigate(navPath);
    setTimeout(() => {
      if (hash) {
        scrollToHash(hash)
      }
    },100)
    
  }, []);

 const toggleMenu = () => {
  if ( window.innerWidth < 992 && collapseRef.current) {
    const bsCollapse = Collapse.getInstance(collapseRef.current) || new Collapse(collapseRef.current, { toggle: false });
    bsCollapse.toggle();
  }
};

  useEffect(() => {
    const pathData = pathNames.filter( el => href[href.length - 1].includes( el.path));
    setIsActive(pathData[pathData.length - 1].ind);
  },[href])


  return (
   <div className='navbar-container'>
     <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold w-50 h-100" href="#"><TextSplit text='Dein Moment zur Verbesserung' hoverText='Bring dein Mut in der Welt' /></a>
        {/* <a className="navbar-brand fw-bold" href="#">Dein Moment zur Verbesserung</a> */}
        <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse bg-white px-3 " id="navbarToggler" ref={collapseRef}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end">
            <li className="nav-item " onClick={() => handleClick(0, 'home#home')}>
              <a onClick={(e:  React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}  className={`nav-link ${isActive === 0 ? 'active' : ''} fw-semibold`} aria-current="page" href="#">Startseite</a>
            </li>
            <li className="nav-item" onClick={() => handleClick(1, 'home#aboutMe')}>
              <a onClick={(e:  React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()} className={`nav-link ${isActive === 1 ? 'active' : ''} fw-semibold`} href="#">Über mich</a>
            </li>
            <li className="nav-item" onClick={() => handleClick(2, 'reviews')}>
              <a onClick={(e:  React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()} className={`nav-link ${isActive === 2 ? 'active' : ''} fw-semibold`} href=''>Bewertung</a>
            </li>
          </ul>
          <button className="btn bg-#0E5A2A fw-semibold text-white " type="submit" onClick={() => handleClick(3, 'home#contact')}>Kontaktieren</button>
        
        </div>
      </div>
    </nav>
   </div>
  )
}

export default Nav
