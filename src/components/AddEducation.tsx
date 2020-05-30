import React, { useState, FC } from 'react';
import { Button } from '../shared/styles';
import styled from 'styled-components';
import { SchoolDropdown } from './form/SchoolDropdown';
import { DegreeInfo } from './form/DegreeInfo';
import { DateSelect } from './form/DateSelect';
import Modal from 'react-modal';

export const AddEducation: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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
          <SchoolDropdown />
          <DegreeInfo />
          <DateSelect />
        </AddEducationForm>
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
  height: 70vh;
  width: 30vw;
  max-width: 370px;
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
