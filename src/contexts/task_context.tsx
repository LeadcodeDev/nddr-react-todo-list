import { createContext, Dispatch, PropsWithChildren, ReactElement, SetStateAction, useEffect, useState } from 'react'
import { Task } from '../types'
import { BASE_URL } from '../constants.ts'

export const TaskContext = createContext<[Task[], Dispatch<SetStateAction<Task[]>>]>(null as never)

export function TaskProvider(props: PropsWithChildren): ReactElement {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    getApiTasks().then(setTasks)
  }, [])

  return (
    <TaskContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </TaskContext.Provider>
  )
}

async function getApiTasks(): Promise<Task[]> {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: 'GET',
  })

  if (response.status === 200) {
    const data = await response.json()

    return data.map((task: Task) => {
      return {
        uid: task.uid,
        content: task.content,
        isComplete: task.isComplete
      }
    })
  }

  return []
}
