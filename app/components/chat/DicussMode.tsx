import { classNames } from '~/utils/classNames';
import { IconButton } from '~/components/ui';

export function DiscussMode() {
  return (
    <div>
      <IconButton
        title="Discuss"
        className={classNames(
          'transition-all flex items-center gap-1 bg-grower-ai-elements-item-backgroundAccent text-grower-ai-elements-item-contentAccent',
        )}
      >
        <div className={`i-ph:chats text-xl`} />
      </IconButton>
    </div>
  );
}
