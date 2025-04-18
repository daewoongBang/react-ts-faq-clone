import { SearchIcon } from '@/assets/common';

interface SearchProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  setSearchKeyword: (value: string) => void;
  placeholder?: string;
}

const Search = ({
  inputValue,
  setInputValue,
  setSearchKeyword,
  placeholder = '찾으시는 내용을 입력해주세요',
}: SearchProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchKeyword(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='relative bg-gray-100 p-4 mb-8'>
        <input
          type='text'
          placeholder={placeholder}
          className='w-full p-4 border border-gray-900 outline-none placeholder:text-lg'
          value={inputValue}
          onChange={handleInputChange}
        />

        <button className='absolute right-8 top-1/2 -translate-y-1/2'>
          <SearchIcon className='w-8 h-8' />
        </button>
      </div>
    </form>
  );
};

export default Search;
