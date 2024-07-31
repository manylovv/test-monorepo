import useSWR from 'swr';

import { Task } from '@/components/home/task';
import { getUser } from '@/data/sdk';
import useSWRMutation from 'swr/mutation';

export function HomePage() {
  const { data, isLoading } = useSWR('getUser', getUser);

  console.log('data', data);

  const updateBalance = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('balance updated');

    const newBalance = data ? data.balance + 100 : 0;

    return {
      ...data,
      balance: newBalance,
    };
  };

  const { trigger: mutate, isMutating } = useSWRMutation(
    'getUser',
    updateBalance,
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Error</div>;
  }

  const handleIncBalance = () => {
    mutate(null, {
      populateCache: true,
    });
  };

  return (
    <div className="flex flex-col gap-4 overflow-scroll p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={data.avatar} className="size-7 rounded-full" />
          <p className="font-medium">{data.name}</p>
        </div>

        <p className="text-lg font-medium">{data.balance} Ø</p>
      </div>

      <h1 className="text-2xl font-semibold">Your Tasks</h1>

      <div className="flex flex-1 flex-col gap-3.5 overflow-scroll">
        {[...data.tasks, ...data.tasks].map((task, i) => (
          <Task
            key={task.id + i}
            title={task.title}
            description={task.description}
            id={task.id}
            reward={task.reward}
            disabled={task.disabled}
          />
        ))}
      </div>
    </div>
  );
}
