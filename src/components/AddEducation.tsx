import React, { useState, FC } from 'react';
import { Button } from '../shared/styles';
import Modal from 'react-modal';
import styled from 'styled-components';
import { SchoolDropdown } from './form/SchoolDropdown';

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

          <h1>hi</h1>
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
