/**
 * Define a generic sort interface
 */
export interface Sort<T> {
  field: keyof T,
  direction: 'asc' | 'desc'
}
