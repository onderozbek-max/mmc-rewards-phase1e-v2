import {Icon, LockIcon, Tag} from '@walmart/ld-kit';

interface TimelineNodeProps {
  threshold: string;
  title: string;
  unlocked: boolean;
  expandable?: boolean;
  expanded?: boolean;
  onToggle?: () => void;
}

export default function TimelineNode({threshold, title, unlocked, expandable, expanded, onToggle}: TimelineNodeProps) {
  const content = (
    <>
      <span className={`timeline-node__dot${unlocked ? ' timeline-node__dot--unlocked' : ''}`}>
        {unlocked ? <Icon name="Check" decorative /> : <LockIcon decorative />}
      </span>
      <span className="timeline-node__copy">
        <span className="timeline-node__threshold">{threshold}</span>
        <span className="timeline-node__title">{title}</span>
      </span>
      {unlocked && <Tag color="positive" size="small" variant="secondary">Unlocked</Tag>}
      {expandable && unlocked && <Icon name={expanded ? 'ChevronUp' : 'ChevronDown'} decorative />}
    </>
  );

  if (expandable && unlocked) {
    return (
      <button className="timeline-node timeline-node--button" type="button" onClick={onToggle} aria-expanded={expanded}>
        {content}
      </button>
    );
  }

  return <div className="timeline-node">{content}</div>;
}
