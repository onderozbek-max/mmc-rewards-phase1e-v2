import {BottomNav} from '@walmart/ld-kit';
import type {NavName, PageName} from '../types';
import {routeTo} from '../utils/points';

interface BottomNavigationProps {
  page: PageName;
  points: number;
  nav: NavName;
  onNavigate: (url: string) => void;
}

export default function BottomNavigation({page, points, nav, onNavigate}: BottomNavigationProps) {
  const activeTab = page === 'profile' ? 'user' : nav === 'secondary' ? 'heart' : 'shop';

  return (
    <div className="bottom-navigation">
      <BottomNav
        activeTab={activeTab}
        onTabChange={(tab) => {
          if (tab === 'shop') onNavigate(routeTo('home', points, 'prime'));
          if (tab === 'heart') onNavigate(routeTo('pass', points, 'secondary'));
          if (tab === 'user') onNavigate(routeTo('profile', points, nav));
        }}
      />
    </div>
  );
}
