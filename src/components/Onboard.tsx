import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

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
        <Button onClick={(e: React.MouseEvent<HTMLElement>) => handleSubmit(e as any)}>
          Enter
        </Button>
      </NameForm>
    </OnboardContainer>
  );
};

const OnboardContainer = styled.div`
  border: 2px solid purple;
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

const Button = styled.button`
  background-color: white;
  color: #646df6;
  border: none;
  width: 6rem;
  height: 2rem;
  border-radius: 8px;
  font-weight: bold;
  box-shadow: -0.31px 1.98px 5px 0px rgba(153, 153, 151, 0.6);
  transition: 0.3s;
  :hover {
    color: white;
    background-color: #646df6;
  }
`;
