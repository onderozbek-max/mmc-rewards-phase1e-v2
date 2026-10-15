import {Card, CardContent, CardHeader, Icon, LockIcon} from '@walmart/ld-kit';

const content = [
  {
    title: 'Community Home modules',
    text: 'Discover new ways to connect, share, and help shape what comes next.',
  },
  {
    title: 'Member opportunities',
    text: 'Share your perspective through opportunities designed for Member\'s Mark members.',
  },
];

interface WhatsNewProps {
  unlocked: boolean;
}

export default function WhatsNew({unlocked}: WhatsNewProps) {
  return (
    <section className="whats-new" aria-labelledby="whats-new-title">
      <div className="section-heading-row">
        <h2 id="whats-new-title">What's new</h2>
        {!unlocked && <span className="section-heading-row__status">Locked</span>}
      </div>
      <div className="whats-new__grid">
        {content.map((item) => (
          <div key={item.title} className={!unlocked ? 'whats-new__card whats-new__card--locked' : 'whats-new__card'}>
            <Card size="small">
              <CardHeader
                title={item.title}
                headingLevel="h3"
                leadingIcon={unlocked ? <Icon name="Spark" decorative /> : <LockIcon decorative />}
              />
              <CardContent>
                {unlocked ? (
                  <p>{item.text}</p>
                ) : (
                  <p className="locked-copy">Unlock after 250 points to see what's new</p>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
