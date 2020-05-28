import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Button } from '../shared';

export const Onboard: FC = () => {
  const history = useHistory();
  const [name, setName] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push('/dashboard');
  };

  return (
    <OnboardContainer>
      <h1>
        Hi there! Welcome to your education{' '}
        <span style={{ color: '#646df6' }}>Showwcase</span>
      </h1>
      <NameForm onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          value={name}
          placeholder='Type your name and click "Enter" below to begin!'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <Button
          onClick={(e: React.MouseEvent<HTMLElement>) =>
            handleSubmit(e as any)
          }>
          Enter
        </Button>
      </NameForm>
    </OnboardContainer>
  );
};

const OnboardContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10%;
  background-image: url('https://i.pinimg.com/originals/69/0c/f6/690cf657788ea89a9ecabc258a0388f1.jpg');
`;

const NameForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    min-width: 500px;
    width: 40%;
    height: 2rem;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #646df6;
    font-size: 1.3rem;
    :focus {
      outline: none;
    }
  }
  button {
    margin-top: 1%;
  }
`;
