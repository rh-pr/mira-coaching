
import { useCallback, useEffect, useState } from 'react';
import './Nav.scss';
import { useNavigate } from 'react-router-dom';
import { div } from 'framer-motion/client';
import { scrollToHash } from '../../utilits/scrollToHash';
import { TextSplit } from '../common/TextSplit';

function Nav() {
  const [isActive, seetIsActive] = useState<number>(0);

  const navigate = useNavigate();

  const handleClick = useCallback((num: number, pathNav: string) => {
    seetIsActive(num);
  
     window.scrollTo({ top: 0, behavior: 'instant' }); 
    
    const [path, hash] = pathNav.split('#');

    navigate(`/${path}`);

    setTimeout(() => {
      if (hash) {
        scrollToHash(hash)
      }
    },100)
    
  }, []);

  useEffect(() => {
    
  })

  return (
   <div className='navbar-container'>
     <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold w-50 h-100" href="#"><TextSplit text='Dein Moment zur Verbesserung' hoverText='Bring dein Mut in der Welt' /></a>
        {/* <a className="navbar-brand fw-bold" href="#">Dein Moment zur Verbesserung</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarToggler">
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
          <button className="btn bg-#0E5A2A fw-semibold text-white " type="submit" onClick={() => handleClick(2, 'home#contact')}>Kontaktieren</button>
        
        </div>
      </div>
    </nav>
   </div>
  )
}

export default Nav
