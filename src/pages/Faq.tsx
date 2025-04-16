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
    </div>
  );
};

export default Faq;
