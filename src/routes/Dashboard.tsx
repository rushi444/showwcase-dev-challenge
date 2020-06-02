import React, { FC } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import styled from 'styled-components'

import { IInitialState, EducationObject } from '../shared/types'
import { EducationTitleList } from '../components/EducationTitleList'
import { EducationList } from '../components/EducationList'
import { AddEducation } from '../components/AddEducation'
import { useHistory } from 'react-router'

interface StateProps {
  userName: string
  educationList: EducationObject[]
}

export const Dashboard: FC = () => {
  const history = useHistory()
  const { userName, educationList } = useSelector<IInitialState, StateProps>(
    (state: IInitialState) => {
      return {
        userName: state.userName,
        educationList: state.educationList,
      }
    },
    shallowEqual,
  )

  if (!userName) history.push('/')

  const schoolList = educationList.map((education) => ({
    school: education.school,
    id: education.id,
  }))

  return (
    <DashboardContainer>
      <h2>
        Welcome to <span style={{ color: '#646df6' }}>{userName}'s </span>
        Education Page
      </h2>
      <AddEducation />
      <EducationContainer>
        <EducationTitleList schoolList={schoolList} />
        <EducationList educationList={educationList} />
      </EducationContainer>
    </DashboardContainer>
  )
}

const EducationContainer = styled.div`
  height: 70%;
  display: flex;
  justify-content: space-around;
`

EducationContainer.displayName = 'Education'

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  height: 100vh;
  width: 90vw;
  h2 {
    align-self: center;
  }
`
