import axios from 'axios';

interface GetFaqItemsProps {
  type: string;
  page: number;
  subType?: string;
}

interface FaqItem {
  id: number;
  categoryName: string;
  categoryValue: string;
  subCategoryName: string;
  question: string;
  answer: string;
}

export const getFaqMainTabs = async () =>
  await axios.get('/mock/faq-main-tabs.json').then((res) => res.data.tabs);

export const getFaqCategory = async (type: string) =>
  await axios.get('/mock/faq-category.json').then((res) => res.data[type]);

export const getFaqItems = async ({
  type,
  page,
  subType = '',
}: GetFaqItemsProps) =>
  await axios.get('/mock/faq-items.json').then((res) => {
    const data = res.data[type];

    const items = subType
      ? data.items.filter((item: FaqItem) => item.categoryValue === subType)
      : data.items;

    const startIndex = page * data.pageInfo.limit;
    const endIndex = startIndex + data.pageInfo.limit;

    const nextOffset = endIndex < items.length ? endIndex : 0;

    return {
      items: items.slice(startIndex, endIndex),
      pageInfo: {
        ...data.pageInfo,
        nextOffset,
        totalRecord: items.length,
        hasNext: nextOffset > 0,
      },
    };
  });
