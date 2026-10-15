import {Button, Card, CardContent, CardHeader} from '@walmart/ld-kit';

const scenarios = [
  {label: 'Below 250', url: '?page=home&points=140'},
  {label: '250 unlocked only', url: '?page=home&points=500'},
  {label: 'Basic unlocked', url: '?page=home&points=1500'},
  {label: 'Both unlocked', url: '?page=home&points=3500'},
  {label: 'Full Benefits Unlocked list', url: '?page=profile&points=3500'},
] as const;

export default function DevPanel() {
  return (
    <div className="dev-panel">
      <Card size="small">
        <CardHeader title="Dev panel" headingLevel="h2" />
        <CardContent>
          <p>Preview the five Foundation Pass states.</p>
          <div className="dev-panel__actions">
            {scenarios.map((scenario) => (
              <Button
                key={scenario.url}
                size="small"
                variant="secondary"
                onClick={() => {
                  window.location.href = scenario.url;
                }}
              >
                {scenario.label}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
