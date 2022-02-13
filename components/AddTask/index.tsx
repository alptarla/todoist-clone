import { useFormik } from 'formik'
import { nanoid } from 'nanoid'
import { useEffect, useRef } from 'react'
import { Plus } from 'react-feather'
import { BeatLoader } from 'react-spinners'
import * as Yup from 'yup'
import { DATE_LIST, PROJECT_LIST } from '../../constants'
import useTasks from '../../hooks/useTasks'
import { Input, Select } from '../FormElements'
import Overlay from '../Overlay'
interface IProps {
  setShowAddTask: (show: boolean) => void
}

function AddTask({ setShowAddTask }: IProps) {
  const { createTask, isLoading, setFilters } = useTasks()

  const modelRef = useRef<HTMLDivElement>(null)

  // ** Detect outside click. If user click to outside, close this model
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (modelRef.current?.contains(e.target as Node)) return
      setShowAddTask(false)
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [setShowAddTask])

  const form = useFormik({
    initialValues: {
      task: '',
      date: '',
      project: ''
    },
    validationSchema: Yup.object({
      task: Yup.string().required('Task is required!'),
      date: Yup.string().required('Date is required!'),
      project: Yup.string().required('Project is required!')
    }),
    async onSubmit(values) {
      await createTask({ id: nanoid(), ...values })
      // ** init filters by newly created task
      setFilters({ date: values.date, project: values.project })
      setShowAddTask(false)
    }
  })

  const projectOptions = PROJECT_LIST.map((project) => ({
    ...project,
    value: project.value.name
  }))

  const renderButtonContent = () =>
    isLoading ? (
      <BeatLoader color="#ffff" size="6px" />
    ) : (
      <>
        <Plus />
        <span>Add task</span>
      </>
    )

  return (
    <Overlay>
      <div className="w-1/5 rounded bg-white p-5 text-black" ref={modelRef}>
        <header className="mb-3 flex items-center justify-between">
          <h4>Quick Add Task</h4>
          <button
            type="button"
            className="text-2xl"
            onClick={() => setShowAddTask(false)}
            data-testid="closeModal"
          >
            x
          </button>
        </header>
        <form onSubmit={form.handleSubmit}>
          <Input
            name="task"
            id="task"
            value={form.values.task}
            onChange={form.handleChange}
            placeholder="Enter task title..."
            label="Task"
            className="mb-3"
            error={form.errors.task}
          />
          <Select
            name="project"
            id="project_list"
            className="mb-3"
            label="Project"
            options={projectOptions}
            placeholder="Select project..."
            onChange={form.handleChange}
            error={form.errors.project}
          />
          <Select
            id="date_list"
            name="date"
            className="mb-3"
            label="Date"
            placeholder="Select date..."
            options={DATE_LIST}
            onChange={form.handleChange}
            error={form.errors.date}
          />
          <button
            disabled={!form.isValid}
            type="submit"
            className="flex items-center rounded bg-red-500  px-2 py-1 text-white disabled:opacity-50"
          >
            {renderButtonContent()}
          </button>
        </form>
      </div>
    </Overlay>
  )
}

export default AddTask
