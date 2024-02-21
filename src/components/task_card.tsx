import { ChangeEvent, ReactElement } from 'react'
import { Task } from '../types'
import { classNames } from '../helper.ts'
import useTask from '../hooks/task.ts'

type Props = {
  task: Task
}

export default function TaskCard(props: Props): ReactElement {
  const { toggleCompleteTask, updateTask, removeTask } = useTask()

  return (
    <div className={classNames(
      'flex items-center justify-between border border-gray-200 rounded-md shadow py-2 px-3 cursor-pointer',
      props.task.isComplete ? 'line-through' : ''
    )}>
      <input
        type="text"
        className="w-full border-none focus:outline-none"
        value={props.task.content}
        onChange={(event: ChangeEvent<HTMLInputElement>) => updateTask(props.task.uid, event.target.value)}
      />

      <div className="flex gap-x-1 items-center">
        <button
          onClick={() => toggleCompleteTask(props.task.uid)}
          className="flex items-center justify-center w-6 h-6 bg-blue-400 hover:bg-blue-500 text-white rounded-md"
        >
          {props.task.isComplete ? (
            <div className="i-radix-icons:check-circled w-1em h-1em"></div>
          ) : (
            <div className="i-radix-icons:circle w-1em h-1em"></div>
          )}
        </button>
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
