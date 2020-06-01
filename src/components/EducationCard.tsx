import React, { FC } from 'react'

import { EducationObject } from '../shared/types'
import styled from 'styled-components'

interface IProps {
  data: EducationObject
}

export const EducationCard: FC<IProps> = ({ data }) => {
  return (
    <EducationCardContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>{data.school}</p>
        <p>
          {data.dates.monthStart}, {data.dates.yearStart} - {data.dates.monthEnd},{' '}
          {data.dates.yearEnd}
        </p>
      </div>

      <div>
        <p style={{ margin: '0' }}>
          {data.studyInfo.degree}, {data.studyInfo.fieldOfStudy}
        </p>
        <p style={{ marginTop: '0', fontSize: '.8rem' }}>GPA: {data.studyInfo.GPA}</p>
      </div>

      <BulletList>
        {data.bullets.map((bullet, index) => (
          <li key={index}>
            <span>» </span>
            {bullet}
          </li>
        ))}
      </BulletList>
    </EducationCardContainer>
  )
}

const EducationCardContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 0 1rem 2rem 1rem;
  box-shadow: -0.31px 1.98px 5px 0px rgba(153, 153, 151, 0.6);
  margin-bottom: 1rem;
  margin-right: 1rem;
`
EducationCardContainer.displayName = 'EducationCardContainer'

const BulletList = styled.ul`
  margin-top: 0;
  list-style-type: none;
  padding-inline-start: 10px;
  span {
    color: #646df6;
  }
`
