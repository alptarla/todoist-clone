import moment from 'moment'

export const ERROR_MESSAGE_TIMEOUT = 2000
export const DEFAULT_ERROR_MESSAGE = 'Something went wrong!'
export const PROJECT_LIST = [
  {
    value: {
      id: '1',
      name: 'THE OFFICE',
      emoji: '👋'
    },
    label: 'THE OFFICE'
  },
  {
    value: {
      id: '2',
      name: 'DAILY',
      emoji: '🐱'
    },
    label: 'DAILY'
  },
  {
    value: {
      id: '3',
      name: 'FUTURE',
      emoji: '🎯'
    },
    label: 'FUTURE'
  },
  {
    value: {
      id: '4',
      name: 'WORDS',
      emoji: '👾'
    },
    label: 'WORDS'
  },
  {
    value: {
      id: '5',
      name: 'MUSIC',
      emoji: '🎧'
    },
    label: 'MUSIC'
  }
]
export const DATE_LIST = [
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
