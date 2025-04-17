import axios from 'axios';

export const getFaqMainTabs = async () =>
  await axios.get('/mock/faq-main-tabs.json').then((res) => res.data.tabs);

export const getFaqCategory = async (type: string) =>
  await axios.get('/mock/faq-category.json').then((res) => res.data[type]);
