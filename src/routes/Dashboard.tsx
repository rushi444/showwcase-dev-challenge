import React, { FC } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import styled from 'styled-components'

import { IInitialState, EducationObject } from '../shared/types'
import { EducationTitleList } from '../components/EducationTitleList'
import { EducationList } from '../components/EducationList'
import { AddEducation } from '../components/AddEducation'

interface StateProps {
  userName: string
  educationList: EducationObject[]
}

export const Dashboard: FC = () => {
  const { userName, educationList } = useSelector<IInitialState, StateProps>(
    (state: IInitialState) => {
      return {
        userName: state.userName,
        educationList: state.educationList,
      }
    },
    shallowEqual,
  )

  // const titleList = educationList.map((education) => education.school)

  return (
    <DashboardContainer>
      <h2>
        Welcome to <span style={{ color: '#646df6' }}>{userName}'s </span>
        Education Page
      </h2>
      <AddEducation />
      <EducationContainer>
        <EducationTitleList />
        <EducationList educationList={educationList} />
      </EducationContainer>
    </DashboardContainer>
  )
}

// const DashboardMemo = React.memo(Dashboard, areEqual)

const EducationContainer = styled.div`
  border: 1px solid red;
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
  border: 2px solid purple;
  height: 100vh;
  width: 90vw;
  h2 {
    align-self: center;
  }
`
