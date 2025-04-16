import { LogoWhite } from '@/assets/common';

const Footer = () => {
  return (
    <footer className='bg-primary flex px-12 py-8'>
      <div className='flex flex-col'>
        <LogoWhite className='h-12 w-24' />
        <p className='text-white'>© 2023 KIA CORP. All Rights Reserved.</p>
      </div>

      <div className='flex flex-col gap-4 text-right'>
        <div className='flex items-center justify-end gap-4 text-white font-bold'>
          <span>개인정보 처리 방침</span>
          <span>이용약관</span>
        </div>
        <address className='text-white not-italic'>
          <span>서울특별시 서초구 헌릉로 12 기아㈜</span>
          <span>대표: 송호성, 최준영</span>
          <span>사업자등록번호: 119-81-02316</span>
          <span>통신판매번호: 2006-07935</span>
          <span>고객센터: 1833-4964</span>
          <span>제휴문의: kiabiz@kia.com</span>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
