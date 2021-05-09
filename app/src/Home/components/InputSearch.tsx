import React, { KeyboardEvent, useState } from 'react';
import './InputSearch.css';

const ENTER_KEY = "Enter";

type Props = {
  disabled: boolean,
  onClick: (path: string) => void,
}

function InputSearch({ disabled, onClick }: Props) {
  const [text, setText] = useState<string>('');

  const keyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ENTER_KEY) {
      return search();
    }
  }
  const search = () => onClick(text);
  return (
    <div className="Search-Container">
      <input 
        type="text"
        aria-label="Search"
        placeholder="Enter path"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={keyPress}
        disabled={disabled}
      />
      <button onClick={search} disabled={disabled}>
        Search
      </button>
    </div>
  );
}

export default InputSearch;
