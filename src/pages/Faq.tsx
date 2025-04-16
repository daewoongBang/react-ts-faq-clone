import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Tab from '@/components/common/Tab';
import Search from '@/components/common/Search';
import Accordion from '@/components/common/Accordion';
import { getFaqTabs } from '@/apis/faq';

const Faq = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['faq-tabs'],
    queryFn: getFaqTabs,
  });

  const [selectedTab, setSelectedTab] = useState<string>('');
  const [selectedSubTab, setSelectedSubTab] = useState<string>('ALL');

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedTab(data[0].value);
    }
  }, [data]);

  return (
    <div>
      <div className='flex flex-col gap-2 mb-8'>
        <h1 className='text-4xl font-bold'>자주 묻는 질문</h1>
        <span className='text-md'>궁금하신 내용을 빠르게 찾아보세요</span>
      </div>

      <Tab
        tabs={isLoading ? [] : data}
        selectedTab={selectedTab}
        onSelectTab={setSelectedTab}
      />

      <Search />

      <Tab
        tabs={[
          { title: '전체', value: 'ALL' },
          { title: '서비스 상품', value: 'PRODUCT' },
          { title: '도입 상담', value: 'COUNSELING' },
          { title: '계약', value: 'CONTRACT' },
        ]}
        selectedTab={selectedSubTab}
        onSelectTab={setSelectedSubTab}
        styleType='rounded'
      />

      <Accordion
        items={[
          { title: '전체', content: '전체 질문에 대한 답변입니다.' },
          {
            title: '서비스 상품',
            content: '서비스 상품에 대한 질문에 대한 답변입니다.',
          },
          {
            title: '도입 상담',
            content: '도입 상담에 대한 질문에 대한 답변입니다.',
          },
          { title: '계약', content: '계약에 대한 질문에 대한 답변입니다.' },
        ]}
      />
    </div>
  );
};

export default Faq;
