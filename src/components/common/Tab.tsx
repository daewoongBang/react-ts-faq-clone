interface TabItem {
  title: string;
  value: string;
}

interface TabProps {
  tabs: TabItem[];
  selectedTab: string;
  onSelectTab: (tab: string) => void;
}

const Tab = ({ tabs, selectedTab, onSelectTab }: TabProps) => {
  return (
    <ul className='flex border border-gray-300 w-full'>
      {tabs.map((tab) => (
        <li
          className={`flex-1 px-4 py-3 text-center text-xl cursor-pointer ${
            selectedTab === tab.value ? 'bg-primary text-white font-bold' : ''
          }`}
          key={`faq-tab-${tab.value}`}
          onClick={() => onSelectTab(tab.value)}
        >
          {tab.title}
        </li>
      ))}
    </ul>
  );
};

export default Tab;
