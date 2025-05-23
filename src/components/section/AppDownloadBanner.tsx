import { LogoGooglePlay, LogoAppStore } from '@/assets/common';

const AppDownloadBanner = () => {
  return (
    <div className='flex flex-col items-center gap-8 bg-gray-100 p-8 my-8 rounded-lg'>
      <h2 className='text-lg md:text-2xl font-bold'>
        기아 비즈 App 지금 만나보세요!
      </h2>

      <div className='flex flex-wrap justify-center gap-4 font-semibold text-sm sm:text-lg'>
        <a
          className='bg-white rounded-lg flex items-center justify-center gap-2 px-12 py-4 min-w-[260px]'
          href='https://play.google.com/store/apps/details?id=kor.mop.user.app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LogoGooglePlay />
          <span>Google Play</span>
        </a>
        <a
          className='bg-white rounded-lg flex items-center justify-center gap-2 px-12 py-4 min-w-[260px]'
          href='https://apps.apple.com/kr/app/kia-biz-%EA%B8%B0%EC%95%84-%EB%B9%84%EC%A6%88/id1598065794'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LogoAppStore />
          <span>App Store</span>
        </a>
      </div>
    </div>
  );
};

export default AppDownloadBanner;
