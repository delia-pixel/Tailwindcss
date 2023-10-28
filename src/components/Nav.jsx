import { headerLogo } from '../assets/images';
import {navLinks} from '../constants';
import { hamburger } from '../assets/icons';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
          <nav className='flex justify-between items-center max-container'>
              <a href="/"><img src={headerLogo} alt='Logo' width={130} height={29} /></a>
              <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                  {navLinks.map((item, index) => (
                      <li key={index}><a href={item.href} className='font-monsterrat leading-normal text-lg text-slate-gray transition-all duration-200 hover:border-b-4 hover:border-spacing-1 hover:border-coral-red hover:animate-pulse active:text-coral-red'>{item.label }</a></li>
                 ))} 
              </ul>
              <div className='hidden max-lg:block'>
                  <img src={hamburger} alt="Hamburger" width={24} height={25}/>
              </div>
      </nav>
    </header>
  )
}

export default Nav
