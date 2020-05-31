import React, { useState, FC } from 'react';
import { Button } from '../shared/styles';
import styled from 'styled-components';
import { SchoolDropdownMemo } from './form/SchoolDropdown';
import { DegreeInfoMemo } from './form/DegreeInfo';
import { DateSelectMemo} from './form/DateSelect';
import { DescriptionMemo } from './form/Description';
import Modal from 'react-modal';
import { DateObject, DegreeInfoObject } from '../shared/types';

export const AddEducation: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [school, setSchool] = useState<string>('');
  const [dates, setDates] = useState<DateObject>({
    monthStart: '',
    yearStart: '',
    monthEnd: '',
    yearEnd: '',
  });
  const [studyInfo, setStudyInfo] = useState<DegreeInfoObject>({
    degree: '',
    fieldOfStudy: '',
    GPA: '',
  });
  const [bullets, setBullets] = useState<string[]>([]);
  return (
    <AddEducationContainer>
      <Button onClick={() => setIsModalOpen(true)}>Add Education</Button>
      <Modal
        appElement={document.querySelector('.App') as any}
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={customStyles}
        contentLabel='Add Education'>
        <AddEducationForm>
          <SchoolDropdownMemo school={school} setSchool={setSchool} />
          <DegreeInfoMemo studyInfo={studyInfo} setStudyInfo={setStudyInfo} />
          <DateSelectMemo dates={dates} setDates={setDates}/>
          <DescriptionMemo bullets={bullets} setBullets={setBullets}/>
        </AddEducationForm>
        <div style={{display: 'flex', alignItems: 'center', marginTop: '5%'}}>
          <SubmitButton>Submit</SubmitButton>
        </div>
      </Modal>
    </AddEducationContainer>
  );
};

const AddEducationContainer = styled.div`
  margin-bottom: 1%;
  display: flex;
  align-content: center;
  button {
    height: 2.5rem;
    width: 8rem;
    margin: 0 auto;
  }
`;

AddEducationContainer.displayName = 'AddEducationContainer';

const AddEducationForm = styled.form`
  min-height: 50vh;
  width: 30vw;
  max-width: 370px;
`;

const SubmitButton = styled(Button)`
  background-color: #646df6;
  margin: 0 auto;
  color: white;
  :hover {
    background-color: white;
    color: #646df6;
  }
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
