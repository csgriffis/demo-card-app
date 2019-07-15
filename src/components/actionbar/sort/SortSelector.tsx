import React, { useEffect, useState } from 'react';
import { Sort } from './type';
import './SortSelector.scss';

interface SortSelectorProps<T, P extends keyof T> {
  setSort: (sort: Sort<T>) => void;
  options: P[]; // array of keys in T
}

export function SortSelector<T, P extends keyof T>({ setSort, options }: SortSelectorProps<T, P>) {
  const [sortField, setSortField] = useState<P>();
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // update the sort if the sortField or sortOrder changes
  useEffect(() => {
    setSort({ field: sortField as P, direction: sortOrder })
  }, [sortField, sortOrder, setSort]);

  return (
    <div className='sort-selector'>
      <select onChange={event => setSortField(event.target.value as P)} defaultValue="default">
        <option disabled hidden value="default">-- Sort --</option>
        {/** the typing gets a little hairy here; convert to unknown then string to satisfy tslint for now */}
        {options.map((opt, index) => <option key={index} value={opt as unknown as string}>{opt}</option>)}
      </select>
      <button
        onClick={
          (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setSortOrder(event.currentTarget.value as 'asc')
        }
        value="asc"
        type="button"
        style={isButtonSelectedStyle('asc', sortOrder)}
      >
        ASC
      </button>
      <button
        onClick={
          (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setSortOrder(event.currentTarget.value as 'desc')
        }
        value="desc"
        type="button"
        style={isButtonSelectedStyle('desc', sortOrder)}
      >
        DESC
      </button>
    </div >
  )
}

// Update button style if it is selected
const isButtonSelectedStyle = (buttonValue: 'asc' | 'desc', sortDirection: 'asc' | 'desc') =>
  sortDirection === buttonValue ? { backgroundColor: 'rgba(65, 109, 255, 1)' } : {}
