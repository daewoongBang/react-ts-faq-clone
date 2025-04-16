import axios from 'axios';

export const getFaqTabs = async () =>
  await axios.get('/mock/faq-tabs.json').then((res) => res.data.tabs);
