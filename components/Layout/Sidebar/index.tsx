import { Calendar } from 'react-feather'
import { DATE_LIST, PROJECT_LIST } from '../../../constants'
import useTasks from '../../../hooks/useTasks'
import SidebarButton from '../../FormElements/Buttons/SidebarButton'

function Sidebar() {
  const { setFilters, filters } = useTasks()

  const updateFilters = (fieldName: 'project' | 'date', value: string) => () => {
    setFilters({ ...filters, [fieldName]: value })
  }

  const dateListItems = DATE_LIST.map((date, index) => (
    <li key={index}>
      <SidebarButton
        title={date.label}
        isActive={filters.date === date.value}
        icon={<Calendar />}
        onClick={updateFilters('date', date.value)}
      />
    </li>
  ))

  const projectListItems = PROJECT_LIST.map(({ value }, index) => (
    <li key={index}>
      <SidebarButton
        title={value.name}
        isActive={filters.project === value.name}
        icon={<div>{value.emoji}</div>}
        onClick={updateFilters('project', value.name)}
      />
    </li>
  ))

  return (
    <div className="h-full w-full py-5">
      <ul className="ml-auto w-3/4 space-y-2">
        {dateListItems}
        <li className="ml-3">
          <details open>
            <summary className="cursor-pointer font-bold">Projects</summary>
            <ul className="mt-3 border-t pt-3">{projectListItems}</ul>
          </details>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
