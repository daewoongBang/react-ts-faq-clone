import { useInfiniteQuery } from '@tanstack/react-query';
import Accordion from '@/components/common/Accordion';
import { getFaqItems } from '@/apis/faq';
import { IconNoData } from '@/assets/common';

interface FaqListProps {
  type: string;
  subType?: string;
  search?: string;
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

const FaqList = ({ type, subType, search }: FaqListProps) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<FaqResponse>({
      queryKey: ['faq-items', type, subType, search],
      queryFn: ({ pageParam }) =>
        getFaqItems({ type, page: pageParam as number, subType, search }),
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

  return (
    <div className='border-t-2 border-gray-900 mb-8'>
      {faqItems.length > 0 ? (
        <>
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
        </>
      ) : (
        <div className='flex flex-col items-center justify-center h-full gap-4 py-48 border-b border-gary-300'>
          <IconNoData />
          <p className='font-semibold text-xl text-gray-500'>
            검색결과가 없습니다.
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqList;
