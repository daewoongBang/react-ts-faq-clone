import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />

      <main className='mx-auto w-full max-w-screen-xl min-w-[320px] px-4 py-8 sm:px-8 lg:px-16'>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
