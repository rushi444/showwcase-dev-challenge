import React, { useState, FC } from 'react'
import { Button } from '../shared/styles'
import styled from 'styled-components'
import { SchoolDropdownMemo } from './form/SchoolDropdown'
import { DegreeInfoMemo } from './form/DegreeInfo'
import { DateSelectMemo } from './form/DateSelect'
import { DescriptionMemo } from './form/Description'
import Modal from 'react-modal'
import { DateObject, DegreeInfoObject } from '../shared/types'
import { useDispatch } from 'react-redux'
import { validateForm } from '../components/form/formValidation'
import { addNewEducation } from '../redux/actions'

export const AddEducation: FC = () => {
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [school, setSchool] = useState<string>('')
  const [dates, setDates] = useState<DateObject>({
    monthStart: '',
    yearStart: '',
    monthEnd: '',
    yearEnd: '',
  })
  const [studyInfo, setStudyInfo] = useState<DegreeInfoObject>({
    degree: '',
    fieldOfStudy: '',
    GPA: '',
  })
  const [bullets, setBullets] = useState<string[]>([])
  const [errors, setErrors] = useState({
    school: false,
    dates: false,
    studyInfo: false,
    bullets: false,
  })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const educationInfo = {
      school,
      studyInfo,
      dates,
      bullets,
    }
    setErrors({ ...validateForm(school, studyInfo, dates, bullets, errors) })
    if (!errors.school && !errors.studyInfo && !errors.dates && !errors.bullets) {
      dispatch(addNewEducation(educationInfo))
      setIsModalOpen(false)
    }
  }

  return (
    <AddEducationContainer>
      <Button onClick={() => setIsModalOpen(true)}>Add Education</Button>
      <Modal
        appElement={document.querySelector('.App') as any}
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={customStyles}
        contentLabel="Add Education"
      >
        <AddEducationForm onSubmit={handleSubmit}>
          <SchoolDropdownMemo school={school} setSchool={setSchool} />
          {errors.school && <ErrorMessage>*School Required</ErrorMessage>}
          <DegreeInfoMemo studyInfo={studyInfo} setStudyInfo={setStudyInfo} />
          {errors.studyInfo && <ErrorMessage>*School Info Required</ErrorMessage>}
          <DateSelectMemo dates={dates} setDates={setDates} />
          {errors.dates && <ErrorMessage>*Dates Required</ErrorMessage>}
          <DescriptionMemo bullets={bullets} setBullets={setBullets} />
          {errors.bullets && <ErrorMessage>*Description Required</ErrorMessage>}
        </AddEducationForm>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '5%' }}>
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </div>
      </Modal>
    </AddEducationContainer>
  )
}

const AddEducationContainer = styled.div`
  margin-bottom: 1%;
  display: flex;
  align-content: center;
  button {
    height: 2.5rem;
    width: 8rem;
    margin: 0 auto;
  }
`

AddEducationContainer.displayName = 'AddEducationContainer'

const AddEducationForm = styled.form`
  min-height: 50vh;
  width: 30vw;
  max-width: 370px;
`

const SubmitButton = styled(Button)`
  background-color: #646df6;
  margin: 0 auto;
  color: white;
  :hover {
    background-color: white;
    color: #646df6;
  }
`

const ErrorMessage = styled.p`
  padding: 0;
  margin: 0;
  font-size: 0.6rem;
  color: red;
`

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}
