import { HTMLAttributes, ReactElement } from 'react'
import TaskCard from './task_card.tsx'
import useTask from '../hooks/task.ts'
import { Task } from '../types'
import { classNames } from '../helper.ts'

type Props = HTMLAttributes<HTMLDivElement>

export default function TaskContainer(props: Props): ReactElement {
  const { tasks } = useTask()

  return (
    <div className={classNames(
      'flex flex-col gap-y-2 bg-white border border-gray-200 rounded-lg min-h-96 p-5 shadow-md overflow-y-auto',
      props.className
    )}>
      {tasks.map((task: Task) => (
        <TaskCard key={task.uid} task={task} />
      ))}
    </div>
  )
}
