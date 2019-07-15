import React, { useContext, useState } from 'react';
import { CardsViewer, SearchInput, Sort, SortSelector, Spinner } from '../../components';
import { User } from '../../hooks';
import { UserContext } from '../../providers';
import './Demo.scss';

export function DemoViewer() {
  const [state] = useContext(UserContext);
  const [textFilter, setTextFilter] = useState<string>('');
  const [sort, setSort] = useState<Sort<User>>();

  return (
    <div className="container">
      <div className="sortFilter">
        <SearchInput setFilter={event => setTextFilter(event.target.value)} />
        <SortSelector setSort={setSort} options={['name', 'email', 'phoneNumber', 'location']} />
      </div>
      <div className="content">
        {state.isLoading
          ? <Spinner />
          : <CardsViewer users={state.users} filter={textFilter} sort={sort} />
        }
      </div>
    </div>
  )
}

