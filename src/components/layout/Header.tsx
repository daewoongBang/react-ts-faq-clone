import { Logo } from '@/assets/common';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex items-center justify-between px-16 py-4'>
      <Link to='/'>
        <Logo />
      </Link>

      <nav>
        <ul className='flex items-center gap-12 text-lg font-bold'>
          <li>
            <Link to='/'>서비스 소개</Link>
          </li>
          <li>
            <Link to='/'>자주 묻는 질문</Link>
          </li>
          <li>
            <Link to='/'>새소식</Link>
          </li>
          <li>
            <Link to='/'>상담문의</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
