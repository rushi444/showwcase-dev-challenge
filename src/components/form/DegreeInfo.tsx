import React, { useState } from 'react';
import styled from 'styled-components';
import { FormInput } from '../../shared/styles';

export const DegreeInfo = () => {
  const [studyInfo, setStudyInfo] = useState<IDegreeInfoState>({
    degree: '',
    fieldOfStudy: '',
    GPA: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setStudyInfo({ ...studyInfo, [e.target.name]: e.target.value });

  console.log(studyInfo);
  return (
    <DegreeInfoContainer>
      <label>
        Degree:
        <FormInput
          type='text'
          name='degree'
          value={studyInfo.degree}
          onChange={handleChange}
        />
      </label>
      <label>
        Field of Study:
        <FormInput
          type='text'
          name='fieldOfStudy'
          value={studyInfo.fieldOfStudy}
          onChange={handleChange}
        />
      </label>
      <label>
        GPA: 
        <FormInput
          type='number'
          name='GPA'
          value={studyInfo.GPA}
          onChange={handleChange}
        />
      </label>
    </DegreeInfoContainer>
  );
};

const DegreeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface IDegreeInfoState {
  degree: string;
  fieldOfStudy: string;
  GPA: string;
}
