import { IconDownload } from '@/assets/common';
import InqueryCard from './Card';

const inquiryItems = [
  {
    title: '서비스 제안서 다운로드',
    icon: <IconDownload />,
  },
  {
    title: '상담문의 등록하기',
    icon: <IconDownload />,
  },
  {
    title: '카톡으로 문의하기',
    icon: <IconDownload />,
    description: 'ID : 기아 비즈',
  },
];

const InquirySection = () => {
  return (
    <section className='mb-8'>
      <h2 className='text-2xl font-bold mb-8'>서비스 문의</h2>

      <div className='flex flex-wrap gap-4'>
        {inquiryItems.map((item, index) => {
          const isSmLast =
            inquiryItems.length % 2 === 1 && index === inquiryItems.length - 1;

          return (
            <InqueryCard
              key={`${index}-${item.title}`}
              {...item}
              className={`${
                isSmLast ? 'sm:w-full ' : 'sm:w-[calc(50%-8px)] '
              } lg:w-[calc(33.333%-11px)]`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default InquirySection;
