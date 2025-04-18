import { LogoWhite } from '@/assets/common';

const Footer = () => {
  return (
    <footer className='bg-primary flex flex-col-reverse md:flex-row px-6 sm:px-12 py-8 lg:py-12 gap-8 lg:gap-4 lg:justify-between'>
      <div className='flex flex-col'>
        <LogoWhite className='h-10 w-20 sm:h-14 sm:w-28' />
        <p className='text-gray-400 text-xs sm:text-sm'>
          © 2023 KIA CORP. All Rights Reserved.
        </p>
      </div>

      <div className='flex flex-col gap-4 text-left md:text-right'>
        <div className='text-sm sm:text-lg flex items-start md:items-center md:justify-end gap-4 text-white font-bold'>
          <span>
            <a
              href='https://privacy.kia.com/overview/full-policy'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline'
            >
              개인정보 처리 방침
            </a>
          </span>
          <span>이용약관</span>
        </div>
        <address className='text-xs sm:text-sm text-gray-400 not-italic flex flex-col md:flex-row md:flex-wrap md:justify-end gap-1 sm:gap-4'>
          <span>서울특별시 서초구 헌릉로 12 기아㈜</span>
          <span>대표: 송호성, 최준영</span>
          <span>사업자등록번호: 119-81-02316</span>
          <span>통신판매번호: 2006-07935</span>
          <span>고객센터: 1833-4964</span>
          <span>
            제휴문의:{' '}
            <a href='mailto:kiabiz@kia.com' className='underline'>
              kiabiz@kia.com
            </a>
          </span>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
