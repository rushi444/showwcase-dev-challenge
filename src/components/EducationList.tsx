import React, { FC } from 'react'
import styled from 'styled-components'
import { EducationObject } from '../shared/types'
import { EducationCard } from './EducationCard'

interface IProps {
  educationList: EducationObject[]
}

export const EducationList: FC<IProps> = ({ educationList }) => {
  console.log(educationList)
  return (
    <EducationListContainer>
      {educationList.map((item, index) => (
        <EducationCard key={index} id={index} data={item} />
      ))}
    </EducationListContainer>
  )
}

const EducationListContainer = styled.div`
  width: 75%;
  height: 100%;
  overflow: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: transparent;
  }

  ::-webkit-scrollbar {
    width: 12px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #646df6;
  }
`
EducationListContainer.displayName = 'EducationListContainer'
