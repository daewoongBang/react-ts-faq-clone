import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { Logo } from '@/assets/common';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='flex items-center justify-between p-4 sm:px-8 lg:px-16'>
      <Link to='/'>
        <Logo />
      </Link>

      <nav className='hidden md:block'>
        <ul className='flex items-center gap-12 text-lg font-bold'>
          <li>
            <Link to='/'>서비스 소개</Link>
          </li>
          <li>
            <Link to='/faq'>자주 묻는 질문</Link>
          </li>
          <li>
            <Link to='/'>새소식</Link>
          </li>
          <li>
            <Link to='/'>상담문의</Link>
          </li>
        </ul>
      </nav>

      <button className='md:hidden' onClick={toggleMenu} aria-label='메뉴 열기'>
        <IoMdMenu className='w-6 h-6' />
      </button>

      {isMenuOpen && (
        <div className='fixed inset-0 z-50 bg-white'>
          <div className='flex justify-end p-4'>
            <button onClick={toggleMenu} aria-label='메뉴 닫기'>
              <IoMdClose className='w-6 h-6' />
            </button>
          </div>
          <nav className='flex flex-col items-center justify-center h-full'>
            <ul className='flex flex-col items-center gap-8 text-xl font-bold'>
              <li>
                <Link to='/' onClick={toggleMenu}>
                  서비스 소개
                </Link>
              </li>
              <li>
                <Link to='/faq' onClick={toggleMenu}>
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link to='/' onClick={toggleMenu}>
                  새소식
                </Link>
              </li>
              <li>
                <Link to='/' onClick={toggleMenu}>
                  상담문의
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
