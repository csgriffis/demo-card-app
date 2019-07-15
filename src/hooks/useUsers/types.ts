/**
 * Enum of all actions that can be performed by the user reducer [useUsers hook]
 */
export enum UserActions {
  FETCH_USERS = 'FETCH_USERS',
  START_FETCH = 'START_FETCH',
  UPDATE_USER = 'UPDATE_USER'
}

/**
 * Define the shape of the User object
 */
export interface User {
  /**
   * Unique ID for this user
   */
  id: string;
  /**
   * Name of this user
   */
  name: string;
  /**
   * Email of this user
   */
  email: string;
  /**
   * Phone Number for this user
   */
  phoneNumber: string;
  /**
   * City, State for this user
   */
  location: string;
  /**
   * Location of user image
   */
  image: string;
}

/**
 * Define the State returned from the reducer
 */
export interface UserState {
  /**
   * List of Users
   */
  users: User[];
  /**
   * Are we actively fetching?
   */
  isLoading: boolean;
}

/**
 * Define the Action passed to the dispatch function of the reducer
 */
export interface UserAction {
  /**
   * The payload may either be a User (update) or User array (fetching)
   */
  payload?: User | User[];
  /**
   * The action being performed
   */
  type: UserActions;
}
