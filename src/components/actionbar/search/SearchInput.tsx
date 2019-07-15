import React from 'react';

interface SearchInputProps {
  setFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchInput({ setFilter }: SearchInputProps) {
  return (
    <div className="search-input">
      <input onChange={setFilter} placeholder={'Filter'} />
    </div>
  )
}
