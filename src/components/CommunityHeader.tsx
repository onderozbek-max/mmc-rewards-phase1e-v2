import {Container, Icon, IconButton} from '@walmart/ld-kit';
import {ChevronLeftIcon} from '@walmart/ld-kit';
import type {NavName, PageName} from '../types';
import {routeTo} from '../utils/points';

interface CommunityHeaderProps {
  points: number;
  nav: NavName;
  onNavigate: (url: string) => void;
}

export default function CommunityHeader({points, nav, onNavigate}: CommunityHeaderProps) {
  return (
    <header className="community-header" aria-label="Member's Mark Community header">
      <Container>
        <div className="community-header__inner">
          <IconButton
            a11yLabel="Go to Community Home"
            size="medium"
            variant="ghost"
            onClick={() => onNavigate(routeTo('home', points, nav))}
          >
            <ChevronLeftIcon decorative />
          </IconButton>
          <div className="community-header__brand" aria-label="Member's Mark Community">
            <span className="community-header__brand-name">Member's Mark</span>
            <span className="community-header__brand-section">Community</span>
          </div>
          <IconButton
            a11yLabel="Open profile"
            size="medium"
            variant="ghost"
            onClick={() => onNavigate(routeTo('profile', points, nav))}
          >
            <Icon name="User" decorative />
          </IconButton>
        </div>
      </Container>
    </header>
  );
}
