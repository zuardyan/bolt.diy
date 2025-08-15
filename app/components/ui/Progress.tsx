import * as React from 'react';
import { classNames } from '~/utils/classNames';

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(({ className, value, ...props }, ref) => (
  <div
    ref={ref}
    className={classNames(
      'relative h-2 w-full overflow-hidden rounded-full bg-grower-ai-elements-background',
      className,
    )}
    {...props}
  >
    <div
      className="h-full w-full flex-1 bg-grower-ai-elements-textPrimary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </div>
));
Progress.displayName = 'Progress';

export { Progress };
