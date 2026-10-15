import {Container, Page} from '@walmart/ld-kit';
import BottomNavigation from '../components/BottomNavigation';
import CommunityHeader from '../components/CommunityHeader';
import DevPanel from '../components/DevPanel';
import ProgressModule from '../components/ProgressModule';
import WhatsNew from '../components/WhatsNew';
import type {RouteState} from '../types';
import {getProgressDetails, routeTo} from '../utils/points';

interface HomePageProps extends RouteState {
  onNavigate: (url: string) => void;
}

export default function HomePage({points, nav, onNavigate}: HomePageProps) {
  const progress = getProgressDetails(points);

  return (
    <Page title="Member's Mark Community Home" titleVisuallyHidden>
      <div className="app-shell">
        <CommunityHeader points={points} nav={nav} onNavigate={onNavigate} />
        <Container>
          <div className="page-content home-page">
            <section className="intro-section" aria-labelledby="home-intro-title">
              <p className="eyebrow">Member's Mark Community</p>
              <h2 id="home-intro-title">Help shape what comes next</h2>
              <p>Share your perspective and discover what your membership can unlock.</p>
            </section>

            <section aria-label="Foundation Pass progress">
              <ProgressModule points={points} onOpenPass={() => onNavigate(routeTo('pass', points, nav))} />
              <p className="progress-preview">{progress.preview}</p>
            </section>

            <WhatsNew unlocked={points >= 250} />

            <section className="feed-placeholder" aria-labelledby="community-feed-title">
              <h2 id="community-feed-title">Community feed</h2>
              <div className="feed-placeholder__surface">
                <p>Member conversations and updates will appear here.</p>
                <span>Feed preview</span>
              </div>
            </section>

            <DevPanel />
          </div>
        </Container>
        <BottomNavigation page="home" points={points} nav={nav} onNavigate={onNavigate} />
      </div>
    </Page>
  );
}
