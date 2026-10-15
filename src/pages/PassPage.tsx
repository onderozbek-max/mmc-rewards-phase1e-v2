import {Container, Page, ProgressIndicator} from '@walmart/ld-kit';
import {useState} from 'react';
import BenefitDetail from '../components/BenefitDetail';
import BottomNavigation from '../components/BottomNavigation';
import CommunityHeader from '../components/CommunityHeader';
import DevPanel from '../components/DevPanel';
import TimelineNode from '../components/TimelineNode';
import Toast from '../components/Toast';
import WhatsNew from '../components/WhatsNew';
import type {RouteState} from '../types';
import {getProgressDetails} from '../utils/points';

interface PassPageProps extends RouteState {
  onNavigate: (url: string) => void;
}

export default function PassPage({points, nav, onNavigate}: PassPageProps) {
  const progress = getProgressDetails(points);
  const [expanded, setExpanded] = useState<'basic' | 'premium' | null>(null);
  const [showToast, setShowToast] = useState(false);

  const browseOpportunities = () => {
    console.log('Would open opportunity browser');
    setShowToast(true);
  };

  return (
    <Page title="Foundation Pass" titleVisuallyHidden>
      <div className="app-shell">
        <CommunityHeader points={points} nav={nav} onNavigate={onNavigate} />
        <Container>
          <div className="page-content pass-page">
            <section className="pass-hero" aria-labelledby="pass-title">
              <p className="eyebrow">Foundation Pass</p>
              <h2 id="pass-title">Your member journey</h2>
              <div className="pass-points">
                <span className="pass-points__value">{points.toLocaleString()}</span>
                <span className="pass-points__label">lifetime points</span>
              </div>
              <ProgressIndicator
                label="Foundation progress"
                value={progress.value}
                max={100}
                valueLabel={progress.label}
                variant={progress.stage === 'premium' ? 'success' : 'info'}
              />
            </section>

            <section className="timeline-section" aria-labelledby="timeline-title">
              <h2 id="timeline-title">Foundation milestones</h2>
              <div className="timeline">
                <div className="timeline__item">
                  <TimelineNode threshold="Start" title="Join the Member's Mark Community" unlocked />
                </div>
                <div className="timeline__item">
                  <TimelineNode
                    threshold="250 points"
                    title="Additional Community Home modules"
                    unlocked={points >= 250}
                  />
                  <p className="timeline__support-copy">
                    {points >= 250 ? 'Community Home modules are unlocked.' : "At 250 points, you'll unlock additional Community Home modules."}
                  </p>
                  <WhatsNew unlocked={points >= 250} />
                </div>
                <div className="timeline__item">
                  <TimelineNode
                    threshold="1,000 points"
                    title="Basic in-home use test eligibility"
                    unlocked={points >= 1000}
                    expandable
                    expanded={expanded === 'basic'}
                    onToggle={() => setExpanded(expanded === 'basic' ? null : 'basic')}
                  />
                  {points >= 1000 && expanded === 'basic' ? <BenefitDetail kind="basic" onBrowse={browseOpportunities} /> : null}
                  {points < 1000 && <p className="timeline__support-copy">At 1,000 points, you'll unlock Basic in-home use test eligibility.</p>}
                </div>
                <div className="timeline__item">
                  <TimelineNode
                    threshold="3,000 points"
                    title="Premium in-home use test eligibility"
                    unlocked={points >= 3000}
                    expandable
                    expanded={expanded === 'premium'}
                    onToggle={() => setExpanded(expanded === 'premium' ? null : 'premium')}
                  />
                  {points >= 3000 && expanded === 'premium' ? <BenefitDetail kind="premium" onBrowse={browseOpportunities} /> : null}
                  {points < 3000 && <p className="timeline__support-copy">At 3,000 points, you'll unlock Premium in-home use test eligibility.</p>}
                </div>
              </div>
            </section>

            <DevPanel />
          </div>
        </Container>
        <BottomNavigation page="pass" points={points} nav={nav} onNavigate={onNavigate} />
        <Toast open={showToast} message="Would open opportunity browser" onClose={() => setShowToast(false)} />
      </div>
    </Page>
  );
}
