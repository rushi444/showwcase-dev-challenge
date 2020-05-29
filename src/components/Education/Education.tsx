import React from 'react';

import { EducationTitleList } from './EducationTitleList';
import { EducationList } from './EducationList';
import styled from 'styled-components';

export const Education = () => {
  return (
    <EducationContainer>
      <EducationTitleList />
      <EducationList />
    </EducationContainer>
  );
};

const EducationContainer = styled.div`
  border: 1px solid red;
  height: 70%;
  display: flex;
  justify-content: space-around;
`;

EducationContainer.displayName = 'Education';
