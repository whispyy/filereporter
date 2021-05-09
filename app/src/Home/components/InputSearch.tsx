import React, { useState } from 'react';
// import './Home.css';

type Props = {
  disabled: boolean,
  onClick: (path: string) => void,
}
function InputSearch({ disabled, onClick }: Props) {
  const [text, setText] = useState<string>('');

  const search = () => onClick(text);
  return (
    <div>
      <div className="Input-Container">
        <input 
          type="search"
          aria-label="Search"
          placeholder="Enter path"
          value={text}
          onChange={e => setText(e.target.value)}
          disabled={disabled}
        />
      </div>
      <button onClick={search} disabled={disabled}>
        Search
      </button>
    </div>
  );
}

export default InputSearch;
