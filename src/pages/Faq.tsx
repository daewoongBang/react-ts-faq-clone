import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Tab from '@/components/common/Tab';
import Search from '@/components/common/Search';
import { getFaqTabs } from '@/apis/faq';

const Faq = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['faq-tabs'],
    queryFn: getFaqTabs,
  });

  const [selectedTab, setSelectedTab] = useState<string>('');
  const [selectedSubTab, setSelectedSubTab] = useState<string>('all');

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
    </div>
  );
};

export default Faq;
