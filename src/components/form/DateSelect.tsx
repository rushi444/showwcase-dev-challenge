import React, { FC } from 'react'
import styled from 'styled-components'

import { Months, Years } from '../../shared/constants'
import { DateObject } from '../../shared/types'

interface IProps {
  dates: DateObject
  setDates: (arg0: DateObject) => void
}

const DateSelect: FC<IProps> = ({ dates, setDates }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDates({ ...dates, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <SelectContainer>
        Start Date:
        <div>
          <select name="monthStart" onChange={handleChange} value={dates.monthStart}>
            <option></option>
            {Months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
          <select
            data-test="yearStart"
            name="yearStart"
            onChange={handleChange}
            value={dates.yearStart}
          >
            <option></option>
            {Years.map(
              (year, index) =>
                year <= new Date().getFullYear() && (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ),
            )}
          </select>
        </div>
      </SelectContainer>
      <SelectContainer>
        End Date(or Expected):
        <div>
          <select
            data-test="monthEnd"
            name="monthEnd"
            onChange={handleChange}
            value={dates.monthEnd}
          >
            <option></option>
            {Months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
          <select data-test="yearEnd" name="yearEnd" onChange={handleChange} value={dates.yearEnd}>
            <option></option>
            {Years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </SelectContainer>
    </div>
  )
}

const areEqual = (prevProps: IProps, nextProps: IProps) => {
  return prevProps.dates === nextProps.dates
}

export const DateSelectMemo = React.memo(DateSelect, areEqual)

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  select {
    color: #646df6;
    border: none;
    border-bottom: 1px solid #646df6;
    margin-right: 5px;
    :focus {
      outline: none;
    }
  }
`

SelectContainer.displayName = 'DateSelect'
