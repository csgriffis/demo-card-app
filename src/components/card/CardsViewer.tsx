import React from 'react';
import { User } from '../../hooks';
import { Sort } from '../actionbar';
import { Card } from './Card';
import './CardsViewer.scss';

export interface CardViewerProps {
  users: User[];
  filter: string;
  sort?: Sort<User>;
}

export function CardsViewer({ filter, users, sort }: CardViewerProps) {
  return (
    <div className="cards-viewer">
      {users
        .filter(filterUserByText(filter))
        .sort(sortUserOnField(sort))
        .map((user: User) => (
          <Card key={user.id} user={user} />
        ))
      }
    </div>
  )
}

/**
 * Filter user properties (case-insensitive)
 */
const filterUserByText = (filter?: string) =>
  (user: User) =>
    !filter
    || user.email.toLowerCase().includes(filter.toLowerCase())
    || user.location.toLowerCase().includes(filter.toLowerCase())
    || user.name.toLowerCase().includes(filter.toLowerCase())
    || user.phoneNumber.includes(filter)

/**
 * Sort user by property
 */
const sortUserOnField = (sort?: Sort<User>) =>
  (a: User, b: User) =>
    +!!sort // convert object to boolean, then to number to satisfy array.sort return signature (0, 1, or -1)
    && (sort!.direction === 'asc' // sort will not be undefined here
      ? compareAsc(a[sort!.field], b[sort!.field])
      : compareDesc(a[sort!.field], b[sort!.field]));

/**
 * Helper function to compare in descending order
 *  Note: I'm cheating a bit because all of the properties are of type string; otherwise,
 *    this would need to be generic
 */
const compareDesc = (a: string, b: string) => a > b ? -1 : a < b ? 1 : 0;

/**
 * Helper function to compare in ascending order
 */
const compareAsc = (a: string, b: string) => a > b ? 1 : a < b ? -1 : 0;
