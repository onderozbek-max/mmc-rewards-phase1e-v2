import {CardInteractive, CardInteractiveContent, CardInteractiveHeader, Icon, ProgressIndicator} from '@walmart/ld-kit';
import {getProgressDetails} from '../utils/points';

interface ProgressModuleProps {
  points: number;
  onOpenPass: () => void;
}

export default function ProgressModule({points, onOpenPass}: ProgressModuleProps) {
  const progress = getProgressDetails(points);

  return (
    <CardInteractive
      actionMode="single"
      onClick={onOpenPass}
      size="large"
      variant="outlined"
      UNSAFE_className="progress-module"
    >
      <CardInteractiveHeader
        title="Your Foundation Pass"
        description="Tap to see your milestone journey"
        trailingIcon="ChevronRight"
      />
      <CardInteractiveContent>
        <ProgressIndicator
          label="Lifetime points"
          value={progress.value}
          max={100}
          valueLabel={progress.label}
          variant={progress.stage === 'premium' ? 'success' : 'info'}
        />
      </CardInteractiveContent>
    </CardInteractive>
  );
}
