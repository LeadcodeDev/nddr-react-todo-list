import { useContext } from 'react'
import { TaskContext } from '../contexts/task_context.tsx'
import { Task } from '../types'

export default function useTask() {
  const [tasks, setTasks] = useContext(TaskContext)

  function addTask(content: string) {
    const task = {
      uid: crypto.randomUUID(),
      content: content,
      isComplete: false
    }

    setTasks([...tasks, task])
  }

  function removeTask(uid: string) {
    const copy = [...tasks]
    const index = copy.findIndex((task: Task) => task.uid === uid)

    copy.splice(index, 1)
    setTasks(copy)
  }

  function updateTask(uid: string, content: string) {
    const copy = [...tasks]
    const task = copy.find((task: Task) => task.uid === uid)

    if (task) {
      task.content = content
      setTasks(copy)
    }
  }

  function toggleCompleteTask(uid: string) {
    const copyTask = [...tasks]
    const task = copyTask.find((task: Task) => task.uid === uid)

    if (task) {
      task.isComplete = !task.isComplete
      setTasks(copyTask)
    }
  }

  return {
    tasks,
    addTask,
    updateTask,
    removeTask,
    toggleCompleteTask,
  }
}
