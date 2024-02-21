import { createContext, Dispatch, PropsWithChildren, ReactElement, SetStateAction, useState } from 'react'
import { Task } from '../types'

export const TaskContext = createContext<[Task[], Dispatch<SetStateAction<Task[]>>]>(null as never)

export function TaskProvider(props: PropsWithChildren): ReactElement {
  const [tasks, setTasks] = useState<Task[]>([])

  return (
    <TaskContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </TaskContext.Provider>
  )
}
