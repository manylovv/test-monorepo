import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

type TaskProps = {
  title: string;
  description: string;
  id: string;
  reward: number;
  disabled: boolean;
};

export const Task = ({
  disabled,
  title,
  description,
  id,
  reward,
}: TaskProps) => {
  return (
    <Link
      to={`/task/${id}`}
      className={cn(
        'from-main-gradient-1 to-main-gradient-2 h-20 rounded-[20px] bg-gradient-to-br p-0.5 shadow-md shadow-[#17171779]',
        disabled && 'from-white/5 to-white/5 opacity-50 shadow-transparent',
      )}
    >
      <div
        className={cn(
          'h-[76px] rounded-[18px] bg-[#2D324D] p-[16px]',
          disabled && 'bg-transparent',
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium">{title}</p>
            <p className="text-sm text-white/50">{description}</p>
          </div>

          <p className="text-lg font-medium">{reward} Ø</p>
        </div>
      </div>
    </Link>
  );
};
