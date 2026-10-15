import {Button, Card, CardContent, CardHeader} from '@walmart/ld-kit';
import OpportunityCard from './OpportunityCard';

interface BenefitDetailProps {
  kind: 'basic' | 'premium';
  onBrowse: () => void;
}

const details = {
  basic: {
    title: 'Basic in-home use tests',
    description: 'Basic in-home use tests let you try new Member\'s Mark products before they launch and share your feedback.',
    opportunities: [
      ['Household Essentials Trial', 'Try a household essential and share what worked for your routine.'],
      ['Pantry Snack Sampler', 'Taste a selection of pantry snacks and tell us what you think.'],
    ],
    note: 'Opportunities are offered based on fit and availability — not every eligible member receives every opportunity.',
  },
  premium: {
    title: 'Premium in-home use tests',
    description: 'Premium in-home use tests give you exclusive early access to our highest-tier product trials.',
    opportunities: [
      ['Premium Appliance Trial', 'Explore an example premium appliance experience and share your feedback.'],
      ["Member's Mark Signature Collection Preview", 'Preview an example Signature Collection product concept.'],
    ],
    note: 'Premium opportunities are limited and offered based on fit and availability.',
  },
} as const;

export default function BenefitDetail({kind, onBrowse}: BenefitDetailProps) {
  const detail = details[kind];

  return (
    <div className="benefit-detail">
      <Card size="small">
        <CardHeader title={detail.title} headingLevel="h3" />
        <CardContent>
          <p>{detail.description}</p>
          <div className="opportunity-grid">
            {detail.opportunities.map(([title, description]) => (
              <OpportunityCard key={title} title={title} description={description} />
            ))}
          </div>
          <p className="benefit-detail__note">{detail.note}</p>
          <Button size="medium" variant="primary" onClick={onBrowse}>Browse opportunities</Button>
        </CardContent>
      </Card>
    </div>
  );
}
