import React, { useState } from 'react';
import styled from 'styled-components';

import { Months, Years } from '../../shared/constants';

export const DateSelect = () => {
  const [dates, setDates] = useState({
    monthStart: '',
    yearStart: '',
    monthEnd: '',
    yearEnd: '',
  });

  const handleChange = (e: any) => {
    setDates({ ...dates, [e.target.name]: e.target.value });
  };
  console.log(dates);
  return (
    <DateSelectContainer>
      <SelectContainer>
        Start Date:
        <div>
          <select
            name='monthStart'
            onChange={handleChange}
            value={dates.monthStart}>
            <option></option>
            {Months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
          <select
            name='yearStart'
            onChange={handleChange}
            value={dates.yearStart}>
            <option></option>
            {Years.map((year, index) => {
              if (year <= new Date().getFullYear()) {
                return (
                  <option key={index} value={year}>
                    {year}
                  </option>
                );
              }
            })}
          </select>
        </div>
      </SelectContainer>
      <SelectContainer>
        End Date(or Expected):
        <div>
          <select
            name='monthEnd'
            onChange={handleChange}
            value={dates.monthEnd}>
            <option></option>
            {Months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
          <select name='yearEnd' onChange={handleChange} value={dates.yearEnd}>
            <option></option>
            {Years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </SelectContainer>
    </DateSelectContainer>
  );
};

const DateSelectContainer = styled.div``;

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  select {
    color: #646df6;
    border: none;
    border-bottom: 1px solid #646df6;
    margin-right: 5px;
  }
`;
