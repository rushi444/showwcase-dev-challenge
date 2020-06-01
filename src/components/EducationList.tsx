import React from 'react'
import styled from 'styled-components'
import { useSelector, shallowEqual } from 'react-redux'
import { IInitialState, EducationObject } from '../shared/types'

interface StateProps {
  educationList: EducationObject[]
}

export const EducationList = () => {
  const { educationList } = useSelector<IInitialState, StateProps>((state: IInitialState) => {
    return {
      educationList: state.educationList,
    }
  }, shallowEqual)
  console.log(educationList)
  return <EducationListContainer>info</EducationListContainer>
}

const EducationListContainer = styled.div`
  width: 70%;
`
EducationListContainer.displayName = 'EducationListContainer'
