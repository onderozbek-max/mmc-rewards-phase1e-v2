import {Card, CardContent, CardHeader, Tag} from '@walmart/ld-kit';

interface OpportunityCardProps {
  title: string;
  description: string;
}

export default function OpportunityCard({title, description}: OpportunityCardProps) {
  return (
    <div className="opportunity-card">
      <Card size="small">
        <CardHeader title={title} headingLevel="h4" />
        <CardContent>
          <Tag color="neutral" size="small" variant="secondary">Example opportunity — illustrative only, not a confirmed offer</Tag>
          <p>{description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
