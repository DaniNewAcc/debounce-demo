import { useEffect, useState } from 'react';
import Input from './components/Input';
import useDebounce from './hooks/useDebounce';
import { useInput } from './hooks/useInput';

const DATA = [
  'Result 1',
  'Result 2',
  'Result 3',
  'Result 4',
  'Result 5',
  'Result 6'
];

function App() {
  const { value, handleInputBlur, handleInputChange } = useInput('');
  const [results, setResults] = useState<string[]>([]);
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    const data = DATA.filter(item =>
      item.toLowerCase().includes(debouncedValue)
    );
    setResults(data);
  }, [debouncedValue]);

  return (
    <div className="w-full h-screen mx-auto">
      <div className="flex flex-col justify-center items-center">
        <Input
          id="input-search"
          type="search"
          placeholder='Search...'
          label="Search"
          value={value}
          inputClasses="px-2 outline-none"
          labelClasses="absolute -top-8"
          wrapperClasses="w-full relative border-2 border-black flex flex-col my-10"
          onBlur={handleInputBlur}
          onChange={handleInputChange}
        />
      </div>
        <ul className="grid grid-cols-2 mt-8">
          {results.map(result => {
            return (
              <li key={result} className="mx-auto">
                {result}
              </li>
            );
          })}
        </ul>
    </div>
  );
}

export default App;
