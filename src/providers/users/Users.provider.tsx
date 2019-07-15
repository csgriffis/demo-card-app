import React, { useEffect, ReactNode } from 'react';
import { useUsers, UserActions } from '../../hooks';
import { UserContextProvider } from './Users.context';
import { userService } from '../../services';

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [state, dispatch] = useUsers();

  /**
   * Fetch users on first load
   */
  useEffect(() => {
    // Make sure we start the loading spinner
    dispatch({ type: UserActions.START_FETCH });

    // Let's get some users
    userService.fetchUsers()
      .then(users => dispatch({ type: UserActions.FETCH_USERS, payload: users }))
      // simple error handling, make more robust
      .catch(console.log);
  }, [dispatch]);

  /**
   * Wrap all the children with the context; set to the useUsers reducer hook
   */
  return <UserContextProvider value={[state, dispatch]}>{children}</UserContextProvider>
}
