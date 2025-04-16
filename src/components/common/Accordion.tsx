import { useState } from 'react';
import { IconArrowDown } from '@/assets/common';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionItemProps extends AccordionItem {
  isOpen: boolean;
  onClick: () => void;
}

interface AccordionProps {
  items: AccordionItem[];
}

const AccordionItem = ({
  title,
  content,
  isOpen,
  onClick,
}: AccordionItemProps) => {
  return (
    <li className='cursor-pointer border-b border-gray-300' onClick={onClick}>
      <div
        className={`flex justify-between items-center p-4 ${
          isOpen ? 'bg-gray-100' : ''
        }`}
      >
        <h3 className='text-lg font-bold'>{title}</h3>
        <button>
          <IconArrowDown
            className={`transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>

      <div className={`pb-4 ${isOpen ? 'block bg-gray-100' : 'hidden'}`}>
        <div className='border-t border-b border-gray-300 bg-white p-4'>
          <p className='text-lg'>{content}</p>
        </div>
      </div>
    </li>
  );
};

const Accordion = ({ items }: AccordionProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <ul className='border-t-2 border-gray-900'>
      {items.map((item, index) => (
        <AccordionItem
          key={`accordion-item-${item.title}`}
          {...item}
          isOpen={selectedIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </ul>
  );
};

export default Accordion;
