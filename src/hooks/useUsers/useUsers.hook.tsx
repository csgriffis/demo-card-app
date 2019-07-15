import { useReducer } from 'react';
import { UserState, UserActions, UserAction, User } from './types';

export function useUsers() {
  return useReducer(
    (state: UserState, action: UserAction): UserState => {
      switch (action.type) {
        /**
         * Fetching users, so just overwrite the users prop with the fetch users
         */
        case UserActions.FETCH_USERS:
          return { ...state, users: action.payload as User[], isLoading: false };
        /**
         * Iterate through the list of users and overwrite the user with the matching id
         */
        case UserActions.UPDATE_USER:
          return {
            ...state,
            users: state.users.map(user => user.id === (action.payload as User).id ? (action.payload as User) : user)
          };
        /**
         * Track when fetching starts so we may show a spinner
         */
        case UserActions.START_FETCH:
          return { ...state, isLoading: true };
        default:
          return state;
      }
    },
    // define the initial state
    {
      users: [],
      isLoading: false
    }
  )
}
