import { ReactElement } from 'react'
import { Task } from '../types'
import { classNames } from '../helper.ts'
import useTask from '../hooks/task.ts'

type Props = {
  task: Task
}

export default function TaskCard(props: Props): ReactElement {
  const { toggleCompleteTask, removeTask } = useTask()

  return (
    <div className={classNames(
      'flex items-center justify-between border border-gray-200 rounded-md shadow py-2 px-3 cursor-pointer',
      props.task.isComplete ? 'line-through' : ''
    )}>
      <button onClick={() => toggleCompleteTask(props.task.uid)}>{props.task.content}</button>
      <div>
        <button
          onClick={() => removeTask(props.task.uid)}
          className="flex items-center justify-center w-6 h-6 bg-red-400 hover:bg-red-500 text-white rounded-md"
        >
          <span className="i-radix-icons:cross-2 w-1em h-1em"></span>
        </button>
      </div>
    </div>
  )
}
