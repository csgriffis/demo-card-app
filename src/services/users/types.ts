/**
 * Define the response from the API to increase type-safety (and IDE type hints)
 */
export interface UserResponse {
  results: Result[]
}

interface Result {
  name: {
    first: string;
    last: string
  },
  location: {
    city: string;
    state: string;
  },
  email: string;
  id: {
    value: string;
  },
  phone: string,
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  }
}
