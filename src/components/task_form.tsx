import { ChangeEvent, FormEvent, ReactElement, useState } from 'react'
import useTask from '../hooks/task.ts'

export default function TaskForm(): ReactElement {
  const [newTask, setNewTask] = useState('')
  const { addTask } = useTask()

  function handleAddTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (newTask.length) {
      addTask(newTask)
      setNewTask('')
    }
  }

  return (
    <form onSubmit={handleAddTask} className="flex justify-between gap-x-5 py-5">
      <input
        type="text"
        className="border border-gray-200 rounded-md px-3 py-2 w-full shadow"
        placeholder="Nouvelle tâche"
        value={newTask}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue text-white font-medium px-3 py-1.5 focus:outline-none rounded-md"
      >
        Ajouter
      </button>
    </form>
  )
}
