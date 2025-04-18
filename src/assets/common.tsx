import Logo from './common/logo.svg?react';
import LogoWhite from './common/logo-white.svg?react';
import SearchIcon from './common/icon-search.svg?react';
import IconArrowDown from './common/icon-arrow-down.svg?react';
import IconDownload from './common/icon-download.svg?react';
import LogoGooglePlay from './common/logo-google-play.svg?react';
import LogoAppStore from './common/logo-app-store.svg?react';
import IconNoData from './common/icon-nodata.svg?react';

export {
  Logo,
  LogoWhite,
  SearchIcon,
  IconArrowDown,
  IconDownload,
  LogoGooglePlay,
  LogoAppStore,
  IconNoData,
};

export const IconMenu = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
    />
  </svg>
);

export const IconClose = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M6 18L18 6M6 6l12 12'
    />
  </svg>
);
