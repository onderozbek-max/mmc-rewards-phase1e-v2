import {Container, LinkButton, Page} from '@walmart/ld-kit';
import BottomNavigation from '../components/BottomNavigation';
import CommunityHeader from '../components/CommunityHeader';
import DevPanel from '../components/DevPanel';
import type {RouteState} from '../types';
import {routeTo} from '../utils/points';

interface ProfilePageProps extends RouteState {
  onNavigate: (url: string) => void;
}

export default function ProfilePage({points, nav, onNavigate}: ProfilePageProps) {
  const benefits = [
    {threshold: 250, text: 'Additional Community Home modules'},
    {threshold: 1000, text: 'Basic in-home use test eligibility'},
    {threshold: 3000, text: 'Premium in-home use test eligibility'},
  ].filter((benefit) => points >= benefit.threshold);

  return (
    <Page title="Member profile" titleVisuallyHidden>
      <div className="app-shell">
        <CommunityHeader points={points} nav={nav} onNavigate={onNavigate} />
        <Container>
          <div className="page-content profile-page">
            <section className="profile-hero" aria-labelledby="profile-title">
              <p className="eyebrow">Member profile</p>
              <h2 id="profile-title">Your Community membership</h2>
              <div className="profile-points">
                <span className="profile-points__value">{points.toLocaleString()}</span>
                <span className="profile-points__label">lifetime points</span>
              </div>
            </section>

            <section className="benefits-unlocked" aria-labelledby="benefits-title">
              <div className="section-heading-row">
                <h2 id="benefits-title">Benefits Unlocked</h2>
                <span className="benefits-unlocked__count">{benefits.length} of 3</span>
              </div>
              {benefits.length === 0 ? (
                <div className="empty-benefits">
                  <p>No benefits unlocked yet — reach 250 points to unlock your first benefit.</p>
                </div>
              ) : (
                <ul className="benefits-list">
                  {benefits.map((benefit) => (
                    <li key={benefit.threshold}>
                      <span>{benefit.threshold.toLocaleString()} points — {benefit.text}</span>
                      <span className="benefits-list__status">Unlocked</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <LinkButton
              href={routeTo('pass', points, nav)}
              size="medium"
              trailing="→"
              onClick={(event) => {
                event.preventDefault();
                onNavigate(routeTo('pass', points, nav));
              }}
            >
              View your Foundation Pass
            </LinkButton>

            <DevPanel />
          </div>
        </Container>
        <BottomNavigation page="profile" points={points} nav={nav} onNavigate={onNavigate} />
      </div>
    </Page>
  );
}
