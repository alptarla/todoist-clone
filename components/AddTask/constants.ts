import moment from 'moment'

export const projectList = [
  {
    value: 'project-1',
    label: 'project-1'
  },
  {
    value: 'project-2',
    label: 'project-2'
  },
  {
    value: 'project-3',
    label: 'project-3'
  }
]

export const dateList = [
  {
    value: moment().format('DD/MM/YYYY'),
    label: 'Today'
  },
  {
    value: moment().add(1, 'day').format('DD/MM/YYYY'),
    label: 'Tomorrow'
  },
  {
    value: moment().add(7, 'day').format('DD/MM/YYYY'),
    label: 'Next week'
  }
]
