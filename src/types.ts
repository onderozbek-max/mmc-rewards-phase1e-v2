export type PageName = 'home' | 'pass' | 'profile';
export type NavName = 'prime' | 'secondary';

export interface RouteState {
  page: PageName;
  points: number;
  nav: NavName;
}
