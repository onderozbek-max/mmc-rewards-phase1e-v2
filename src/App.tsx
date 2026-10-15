import * as React from 'react';
import {A11yAnnouncementProvider, A11yDevAssertions} from '@walmart/ld-kit';
import {useInitializeTheming} from '@walmart/ld-kit/theming';
import {useInitializeStore} from '@walmart/ld-kit/store';
import '@walmart/ld-kit/styles.css';
import HomePage from './pages/HomePage';
import PassPage from './pages/PassPage';
import ProfilePage from './pages/ProfilePage';
import {parseRoute} from './utils/points';
import type {RouteState} from './types';

export default function App() {
  useInitializeTheming("Member's Mark", ["Member's Mark"] as const);
  useInitializeStore();
  const [route, setRoute] = React.useState<RouteState>(() => parseRoute());

  React.useEffect(() => {
    const handlePopState = () => setRoute(parseRoute());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = React.useCallback((url: string) => {
    window.history.pushState({}, '', url);
    setRoute(parseRoute());
    window.scrollTo({top: 0, behavior: 'auto'});
  }, []);

  return (
    <A11yAnnouncementProvider>
      <A11yDevAssertions />
      {route.page === 'pass' && <PassPage {...route} onNavigate={navigate} />}
      {route.page === 'profile' && <ProfilePage {...route} onNavigate={navigate} />}
      {route.page === 'home' && <HomePage {...route} onNavigate={navigate} />}
    </A11yAnnouncementProvider>
  );
}
