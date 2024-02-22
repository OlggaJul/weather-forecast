'use client'

import moment, { Moment } from 'moment/moment'
import { uid } from 'uid'

import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { ButtonComponent, DatePicker, SelectComponent } from '@/app/shared/components'
import { cities } from '@/app/shared/constants'
import { ITourInfo } from '@/app/shared/interfaces'
import { useGlobalStore, useModalStore } from '@/app/shared/stores/zustand'

import styles from './new-trip-form.module.scss'

//interface
interface INewTripForm {}

//component
export const NewTripFormComponent: FC<Readonly<INewTripForm>> = () => {
  const { handleSubmit, control, setError } = useForm()
  const handleChangeModalStore = useModalStore((state) => state.handleChangeModalStore)
  const handleChangeGlobalStore = useGlobalStore((state) => state.handleChangeGlobalStore)
  const tours = useGlobalStore((state) => state.tours)

  const checkDateValidity = (startDate: Moment, endDate: Moment) => {
    if (startDate.diff(moment(), 'hours') > 360) {
      setError('start_date', {
        message: 'Please choose a date from the upcoming 15 days',
      })
      return false
    }

    if (endDate.diff(moment(), 'hours') > 360) {
      setError('end_date', {
        message: 'Please choose a date from the upcoming 15 days',
      })
      return false
    }

    if (startDate.isAfter(endDate)) {
      setError('end_date', {
        message:
          'Hmm, it looks like your trip might end before it starts! Double-check your dates to ensure the event duration is correct.',
      })
      return false
    }

    return true
  }
  const submitForm = (formValues: any) => {
    if (checkDateValidity(formValues.start_date, formValues.end_date)) {
      const newTrip: ITourInfo = {
        city: {
          name: formValues.city.value,
        },
        id: uid(),
        start_date: formValues.start_date,
        end_date: formValues.end_date,
      }

      handleChangeGlobalStore({ tours: [newTrip, ...tours], selectedTourId: newTrip.id })
      handleChangeModalStore({ modalComponent: null })
    }
  }

  //return
  return (
    <form className={styles.new_trip_form} onSubmit={handleSubmit(submitForm)}>
      <div className={styles.new_trip_form__inputs}>
        <Controller
          control={control}
          name={'city'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <SelectComponent
              value={value}
              onChange={onChange}
              errorMessage={error?.message}
              label={'Please, select a city'}
              placeholder={'Select a city'}
              options={cities}
            />
          )}
          rules={{
            required: 'This field is required',
          }}
        />

        <Controller
          control={control}
          name={'start_date'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <DatePicker
              value={value}
              onChange={onChange}
              label={'Select start date'}
              placeholder={'Select start date'}
              errorMessage={error?.message}
            />
          )}
          rules={{
            required: 'This field is required',
          }}
        />

        <Controller
          control={control}
          name={'end_date'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <DatePicker
              value={value}
              onChange={onChange}
              label={'Select end date'}
              placeholder={'Select end date'}
              errorMessage={error?.message}
            />
          )}
          rules={{
            required: 'This field is required',
          }}
        />
      </div>

      <div className={styles.new_trip_form__buttons}>
        <ButtonComponent
          onClick={() => {
            handleChangeModalStore({ modalComponent: null })
          }}
        >
          Cancel
        </ButtonComponent>

        <ButtonComponent type={'submit'} variant={'filled'}>
          Create
        </ButtonComponent>
      </div>
    </form>
  )
}
export default NewTripFormComponent
