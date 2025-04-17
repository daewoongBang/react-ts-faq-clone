import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Tab from '@/components/common/Tab';
import Search from '@/components/common/Search';
import Accordion from '@/components/common/Accordion';
import InquirySection from '@/components/faq/InquirySection';
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

  const [selectedTab, setSelectedTab] = useState<string>(
    mainTabs?.[0]?.value || ''
  );

  const [faqCategory, setFaqCategory] = useState<FaqCategory[]>([]);
  const [selectedSubTab, setSelectedSubTab] = useState<string>('ALL');

  const { data: category } = useQuery({
    queryKey: ['faq-category', selectedTab],
    queryFn: () => getFaqCategory(selectedTab),
    enabled: !!selectedTab,
  });

  useEffect(() => {
    if ((category || []).length > 0) {
      setFaqCategory([{ title: '전체', value: 'ALL' }, ...category]);
    }
  }, [category]);

  useEffect(() => {
    if (isSuccessMainTabs && mainTabs && !selectedTab) {
      setSelectedTab(mainTabs[0].value);
    }
  }, [isSuccessMainTabs, mainTabs, selectedTab]);

  return (
    <div>
      <div className='flex flex-col gap-2 mb-8'>
        <h1 className='text-4xl font-bold'>자주 묻는 질문</h1>
        <span className='text-md'>궁금하신 내용을 빠르게 찾아보세요</span>
      </div>

      <Tab
        tabs={mainTabs || []}
        selectedTab={selectedTab}
        onSelectTab={setSelectedTab}
      />

      <Search />

      <Tab
        tabs={faqCategory || []}
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

      <InquirySection />

      <ProcessStepSection />

      <AppDownloadBanner />
    </div>
  );
};

export default Faq;
