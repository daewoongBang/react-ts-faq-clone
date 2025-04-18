import { useInfiniteQuery } from '@tanstack/react-query';
import { getFaqItems } from '@/apis/faq';
import Accordion from '@/components/common/Accordion';

interface FaqListProps {
  type: string;
  subType?: string;
}

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  categoryName: string;
  subCategoryName: string;
}

interface FaqResponse {
  items: FaqItem[];
  pageInfo: {
    hasNext: boolean;
  };
}

const FaqList = ({ type, subType }: FaqListProps) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<FaqResponse>({
      queryKey: ['faq-items', type, subType],
      queryFn: ({ pageParam }) =>
        getFaqItems({ type, page: pageParam as number, subType }),
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.pageInfo.hasNext ? allPages.length : undefined;
      },
      initialPageParam: 0,
      enabled: !!type,
    });

  const faqItems = data?.pages.flatMap((page) => page.items) || [];

  const handleLoadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  if (!faqItems.length) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <div>
      <Accordion items={faqItems} />
      {hasNextPage && (
        <button
          onClick={handleLoadMore}
          disabled={isFetchingNextPage}
          className='mt-4 w-full text-center text-lg'
        >
          &#43; 더보기
        </button>
      )}
    </div>
  );
};

export default FaqList;
