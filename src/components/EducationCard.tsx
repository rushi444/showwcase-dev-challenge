import React, { FC } from 'react'

import { EducationObject } from '../shared/types'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { deleteEducation } from '../redux/actions'
import trashIcon from '../assets/trash.png'

interface IProps {
  data: EducationObject
  id: string
}

export const EducationCard: FC<IProps> = ({ id, data }) => {
  const dispatch = useDispatch()
  return (
    <EducationCardContainer id={`${id}`}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p style={{fontSize: '1.3rem', marginBottom: '10px'}}>{data.school}</p>
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
      <div style={{ textAlign: 'right' }}>
        <img
          onClick={() => dispatch(deleteEducation(data.id))}
          style={{ height: '20px', width: '20px' }}
          src={trashIcon}
          alt="delete button"
        />
      </div>
    </EducationCardContainer>
  )
}

const EducationCardContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 0 1rem 1rem 1rem;
  box-shadow: -0.31px 1.98px 5px 0px rgba(153, 153, 151, 0.6);
  margin-bottom: 1rem;
  margin-right: 1rem;
  :last-child {
    margin-bottom: 50%;
  }
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
