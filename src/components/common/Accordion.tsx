import { useState } from 'react';
import { IconArrowDown } from '@/assets/common';

interface AccordionItem {
  id: number;
  question: string;
  answer: string;
  categoryName: string;
  subCategoryName: string;
}

interface AccordionItemProps extends AccordionItem {
  isOpen: boolean;
  onClick: () => void;
}

interface AccordionProps {
  items: AccordionItem[];
}

const AccordionItem = ({
  question,
  answer,
  categoryName,
  subCategoryName,
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
        <div className='flex flex-col gap-4 sm:flex-col lg:flex-row text-center'>
          {categoryName && (
            <span className='w-24 text-lg text-gray-500'>{categoryName}</span>
          )}
          {subCategoryName && (
            <span className='w-24 text-lg text-gray-500'>
              {subCategoryName}
            </span>
          )}
          <h3 className='text-lg font-bold'>{question}</h3>
        </div>

        <button>
          <IconArrowDown
            className={`transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>

      <div className={`pb-4 ${isOpen ? 'block bg-gray-100' : 'hidden'}`}>
        <div className='border-t border-b border-gray-300 bg-white p-8'>
          <p className='text-lg' dangerouslySetInnerHTML={{ __html: answer }} />
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
    <ul>
      {(items || []).map((item, index) => (
        <AccordionItem
          key={`accordion-item-${item.id}-${index}`}
          {...item}
          isOpen={selectedIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </ul>
  );
};

export default Accordion;
