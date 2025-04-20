import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Tab from '@/components/common/Tab';
import Search from '@/components/common/Search';
import FaqList from '@/components/faq/FaqList';
import InquirySection from '@/components/section/Inquery';
import ProcessStepSection from '@/components/faq/ProcessStepSection';
import AppDownloadBanner from '@/components/section/AppDownloadBanner';
import { getFaqMainTabs, getFaqCategory } from '@/apis/faq';

interface FaqCategory {
  value: string;
  title: string;
}

const Faq = () => {
  const { data: mainTabs, isSuccess: isSuccessMainTabs } = useQuery({
    queryKey: ['faq-main-tabs'],
    queryFn: getFaqMainTabs,
  });

  const [inputValue, setInputValue] = useState<string>('');
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const [selectedTab, setSelectedTab] = useState<string>(
    mainTabs?.[0]?.value || ''
  );

  const [faqCategory, setFaqCategory] = useState<FaqCategory[]>([]);
  const [selectedSubTab, setSelectedSubTab] = useState<string>('');

  const { data: category } = useQuery({
    queryKey: ['faq-category', selectedTab],
    queryFn: () => getFaqCategory(selectedTab),
    enabled: !!selectedTab,
  });

  useEffect(() => {
    setInputValue('');
    setSearchKeyword('');
  }, [selectedTab]);

  useEffect(() => {
    if ((category || []).length > 0) {
      setFaqCategory([{ title: '전체', value: '' }, ...category]);
    }
  }, [category]);

  useEffect(() => {
    if (isSuccessMainTabs && mainTabs && !selectedTab) {
      setSelectedTab(mainTabs[0].value);
    }
  }, [isSuccessMainTabs, mainTabs, selectedTab]);

  return (
    <div>
      <div className='flex flex-col gap-2  sm:mt-8 mb-8'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>
          자주 묻는 질문
        </h1>
        <span className='text-sm sm:text-base md:text-lg'>
          궁금하신 내용을 빠르게 찾아보세요
        </span>
      </div>

      <Tab
        tabs={mainTabs || []}
        selectedTab={selectedTab}
        onSelectTab={setSelectedTab}
      />

      <Search
        inputValue={inputValue}
        setInputValue={setInputValue}
        setSearchKeyword={setSearchKeyword}
      />

      <Tab
        tabs={faqCategory || []}
        selectedTab={selectedSubTab}
        onSelectTab={setSelectedSubTab}
        styleType='rounded'
      />

      <FaqList
        type={selectedTab}
        subType={selectedSubTab}
        search={searchKeyword}
      />

      <InquirySection />

      <ProcessStepSection />

      <AppDownloadBanner />
    </div>
  );
};

export default Faq;
