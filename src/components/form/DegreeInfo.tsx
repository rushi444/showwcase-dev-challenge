import React, { FC } from 'react'
import styled from 'styled-components'
import { FormInput } from '../../shared/styles'
import { DegreeInfoObject } from '../../shared/types'

interface IProps {
  studyInfo: DegreeInfoObject
  setStudyInfo: (arg0: DegreeInfoObject) => void
}

const DegreeInfo: FC<IProps> = ({ studyInfo, setStudyInfo }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setStudyInfo({ ...studyInfo, [e.target.name]: e.target.value })

  return (
    <DegreeInfoContainer>
      <label>
        Degree:
        <FormInput
          type="text"
          name="degree"
          placeholder="Ex. Master's"
          value={studyInfo.degree}
          onChange={handleChange}
        />
      </label>
      <label>
        Field of Study:
        <FormInput
          type="text"
          name="fieldOfStudy"
          placeholder="Ex. Economics"
          value={studyInfo.fieldOfStudy}
          onChange={handleChange}
        />
      </label>
      <label>
        GPA:
        <FormInput
          type="number"
          placeholder="3.0"
          step="0.1"
          min="0"
          max="4"
          name="GPA"
          value={studyInfo.GPA}
          onChange={handleChange}
        />
      </label>
    </DegreeInfoContainer>
  )
}

const areEqual = (prevProps: IProps, nextProps: IProps) => {
  return prevProps.studyInfo === nextProps.studyInfo
}

export const DegreeInfoMemo = React.memo(DegreeInfo, areEqual)

const DegreeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

DegreeInfoContainer.displayName = 'DegreeInfo'
