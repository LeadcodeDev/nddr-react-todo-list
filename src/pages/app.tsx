import { ReactElement } from 'react'
import TaskContainer from '../components/task_container.tsx'
import TaskForm from '../components/task_form.tsx'
import useTask from '../hooks/task.ts'

export default function App(): ReactElement {
  const { tasks } = useTask()
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-xl mx-auto">
        <h1 className="text-4xl text-medium">
          Activité : Todolist
          <span className="ml-2 bg-blue text-white rounded-md px-2 py-1 text-xs">
            {tasks.length} tâches
          </span>
        </h1>

        <TaskContainer className="mt-5" />
        <TaskForm />
      </div>
    </div>
  )
}
