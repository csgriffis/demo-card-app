import { createContext } from 'react';
import { User, UserAction } from '../../hooks';

/**
 * Define the shape of the UserContext; an array to be destructued
 *  We are passing through the reducer return shape
 */
export type UserContext = [
  /**
   * Currently, we only need to store the array of users, and whether we are actively fetching users
   */
  {
    users: User[],
    isLoading: boolean
  },
  /**
   * Reducer dispatch function to update the context state
   */
  React.Dispatch<UserAction>
]

/**
 * The `createContext` function expects default values set for the context.
 *  The state and dispatch function gets overwritten when the useUser hook is invoked
 */
export const UserContext = createContext<UserContext>([{ users: [], isLoading: false}, (action: UserAction) => void 0]);

// Export the Provider and Consumer to use elsewhere
export const UserContextProvider = UserContext.Provider;
export const UserContextConsumer = UserContext.Consumer;
