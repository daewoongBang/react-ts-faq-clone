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
        <div className='flex flex-col gap-4 md:flex-col lg:flex-row text-left lg:text-center'>
          <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
            {categoryName && subCategoryName ? (
              <>
                <span className='hidden lg:block w-24 text-sm md:text-lg text-gray-500'>
                  {categoryName}
                </span>
                <span className='hidden lg:block w-24 text-sm md:text-lg text-gray-500'>
                  {subCategoryName}
                </span>
                <span className='lg:hidden text-sm md:text-lg text-gray-500'>
                  {categoryName} &gt; {subCategoryName}
                </span>
              </>
            ) : (
              <>
                {categoryName && (
                  <span className='w-24 text-sm md:text-lg text-gray-500'>
                    {categoryName}
                  </span>
                )}
                {subCategoryName && (
                  <span className='w-24 text-sm md:text-lg text-gray-500'>
                    {subCategoryName}
                  </span>
                )}
              </>
            )}
          </div>
          <h3 className='text-sm md:text-lg font-bold'>{question}</h3>
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
          <p
            className='text-sm md:text-lg'
            dangerouslySetInnerHTML={{ __html: answer }}
          />
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
