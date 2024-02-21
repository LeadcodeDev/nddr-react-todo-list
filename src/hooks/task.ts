import { useContext } from 'react'
import { TaskContext } from '../contexts/task_context.tsx'
import { Task } from '../types'
import { BASE_URL } from '../constants.ts'


export default function useTask() {
  const [tasks, setTasks] = useContext(TaskContext)

  async function addTask(content: string): Promise<void> {
    const savedTasks = [...tasks]
    const task: Task = {
      uid: crypto.randomUUID(),
      content: content,
      isComplete: false
    }

    setTasks([...tasks, task])

    const response = await fetch(`${BASE_URL}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    })

    if (response.status !== 200) {
      setTasks(savedTasks)
    }
  }

  async function removeTask(uid: string): Promise<void> {
    const savedTasks = [...tasks]
    const copy = [...tasks]

    const index = copy.findIndex((task: Task) => task.uid === uid)
    copy.splice(index, 1)

    setTasks(copy)

    const response = await fetch(`${BASE_URL}/tasks/${uid}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })

    if (response.status !== 200) {
      setTasks(savedTasks)
    }
  }

  async function updateTask(uid: string, content: string): Promise<void> {
    const savedTasks = [...tasks]
    const copy = [...tasks]
    const task = copy.find((task: Task) => task.uid === uid)

    if (task) {
      task.content = content
      setTasks(copy)
    }

    const response = await fetch(`${BASE_URL}/tasks/${uid}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content })
    })

    if (response.status !== 200) {
      setTasks(savedTasks)
    }
  }

  async function toggleCompleteTask(uid: string): Promise<void> {
    const savedTasks = [...tasks]
    const copyTask = [...tasks]
    const task = copyTask.find((task: Task) => task.uid === uid)

    if (!task) {
      return
    }

    task.isComplete = !task.isComplete
    setTasks(copyTask)

    const response = await fetch(`${BASE_URL}/tasks/${uid}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isComplete: task.isComplete})
    })

    if (response.status !== 200) {
      setTasks(savedTasks)
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
