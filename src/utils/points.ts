import type {RouteState, PageName, NavName} from '../types';

export type ProgressStage = 'below250' | 'community' | 'basic' | 'premium';

export interface ProgressDetails {
  value: number;
  label: string;
  preview: string;
  stage: ProgressStage;
}

export const normalizePoints = (value: string | null): number => {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? Math.floor(parsed) : 0;
};

export const getProgressDetails = (points: number): ProgressDetails => {
  if (points < 250) {
    return {
      value: (points / 250) * 100,
      label: `${points} / 250 pts`,
      preview: 'At 250 points, you\'ll unlock additional Community Home modules.',
      stage: 'below250',
    };
  }

  if (points < 1000) {
    return {
      value: ((points - 250) / 750) * 100,
      label: `${points.toLocaleString()} / 1,000 pts`,
      preview: 'Next up at 1,000 points: Basic in-home use test eligibility.',
      stage: 'community',
    };
  }

  if (points < 3000) {
    return {
      value: ((points - 1000) / 2000) * 100,
      label: `${points.toLocaleString()} / 3,000 pts`,
      preview: "You've unlocked Basic in-home use test eligibility! Next up at 3,000 points: Premium in-home use test eligibility.",
      stage: 'basic',
    };
  }

  return {
    value: 100,
    label: '3,000+ pts · All Foundation milestones reached',
    preview: "You've unlocked every Foundation benefit — thanks for being one of our most active members.",
    stage: 'premium',
  };
};

export const parseRoute = (): RouteState => {
  const params = new URLSearchParams(window.location.search);
  const pageParam = params.get('page');
  const navParam = params.get('nav');
  const page: PageName = pageParam === 'pass' || pageParam === 'profile' ? pageParam : 'home';
  const nav: NavName = navParam === 'secondary' ? 'secondary' : 'prime';

  return {page, points: normalizePoints(params.get('points') ?? '140'), nav};
};

export const routeTo = (page: PageName, points: number, nav: NavName): string =>
  `?page=${page}&points=${points}&nav=${nav}`;
