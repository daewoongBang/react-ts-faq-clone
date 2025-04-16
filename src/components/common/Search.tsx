import { SearchIcon } from '@/assets/common';

interface SearchProps {
  placeholder?: string;
}

const Search = ({
  placeholder = '찾으시는 내용을 입력해주세요',
}: SearchProps) => {
  return (
    <div className='relative bg-gray-100 p-4'>
      <input
        type='text'
        placeholder={placeholder}
        className='w-full p-4 border border-gray-900 outline-none placeholder:text-lg'
      />

      <button className='absolute right-8 top-1/2 -translate-y-1/2'>
        <SearchIcon className='w-8 h-8' />
      </button>
    </div>
  );
};

export default Search;
