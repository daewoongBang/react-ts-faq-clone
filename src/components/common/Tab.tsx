interface TabItem {
  title: string;
  value: string;
}

interface TabBaseProps {
  tabs: TabItem[];
  selectedTab: string;
  onSelectTab: (value: string) => void;
}

type TabStyleType = 'full' | 'rounded';

interface TabProps extends TabBaseProps {
  styleType?: TabStyleType;
}

const FullTab = ({ tabs, selectedTab, onSelectTab }: TabBaseProps) => {
  return (
    <ul className='flex border border-gray-300 w-full mb-8'>
      {tabs.map((tab) => (
        <li
          className={`px-4 py-3 text-center text-sm sm:text-lg md:text-xl cursor-pointer flex-1 ${
            selectedTab === tab.value ? 'bg-primary text-white font-bold' : ''
          }`}
          key={`tab-${tab.value}`}
          onClick={() => onSelectTab(tab.value)}
        >
          {tab.title}
        </li>
      ))}
    </ul>
  );
};

const RoundedTab = ({ tabs, selectedTab, onSelectTab }: TabBaseProps) => {
  return (
    <ul className='flex flex-wrap mb-8'>
      {tabs.map((tab) => (
        <li
          className={`px-3 py-2 sm:px-5 text-center text-sm sm:text-lg md:text-xl cursor-pointer rounded-full font-semibold whitespace-nowrap ${
            selectedTab === tab.value ? 'bg-primary text-white' : ''
          }`}
          key={`tab-${tab.value}`}
          onClick={() => onSelectTab(tab.value)}
        >
          {tab.title}
        </li>
      ))}
    </ul>
  );
};

const Tab = ({ styleType = 'full', ...props }: TabProps) => {
  return styleType === 'rounded' ? (
    <RoundedTab {...props} />
  ) : (
    <FullTab {...props} />
  );
};

export default Tab;
