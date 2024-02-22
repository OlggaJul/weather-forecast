import { ISelectOptions } from '@/app/shared/interfaces'

export const sort_options: ISelectOptions[] = [
  { value: 'Earliest to latest', key: 'asc' },
  { value: 'Latest to earliest', key: 'desc' },
  { value: 'Recently created', key: 'created_time' },
]
