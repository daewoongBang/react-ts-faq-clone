import { memo } from 'react';
import { useQuery } from '@tanstack/react-query';
import Accordion from '../common/Accordion';
import { getFaqItems } from '@/apis/faq';

interface FaqListProps {
  type: string;
}

interface FaqItem {
  id: number;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
}

const FaqList = memo(({ type }: FaqListProps) => {
  const { data: faqItems } = useQuery({
    queryKey: ['faq-items', type],
    queryFn: () => getFaqItems(type),
    enabled: !!type,
  });

  return (
    <Accordion
      items={faqItems?.items.map((item: FaqItem) => ({
        title: item.question,
        subTitle: item.subCategoryName,
        content: item.answer,
      }))}
    />
  );
});

export default FaqList;
