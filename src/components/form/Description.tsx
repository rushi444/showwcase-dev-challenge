import React, { useState, FC } from 'react';
import styled from 'styled-components';

import { FormInput, Button } from '../../shared/styles';

interface IProps {
  bullets: string[];
  setBullets: (arg0: string[]) => void;
}

const Description: FC<IProps> = ({ bullets, setBullets }) => {
  const [text, setText] = useState<string>('');

  const addBullet = (e: React.MouseEvent) => {
    e.preventDefault();
    if (text === '') return;
    setBullets([...bullets, text]);
    setText('');
  };
  return (
    <div style={{ marginTop: '3%' }}>
      Description
      <BulletsList>
        {bullets.map((bullet) => (
          <li>» {bullet}</li>
        ))}
      </BulletsList>
      <div style={{ display: 'flex' }}>
        <FormInput
          style={{ width: '80%', height: '2rem', fontSize: '0.9rem' }}
          type='text'
          placeholder='Add a bullet here...'
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
        <Button
          onClick={addBullet}
          style={{ width: '20%', boxShadow: 'initial' }}>
          Add
        </Button>
      </div>
    </div>
  );
};

const areEqual = (prevProps: IProps, nextProps: IProps) => {
  return prevProps.bullets === nextProps.bullets;
};

export const DescriptionMemo = React.memo(Description, areEqual);

const BulletsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    font-size: 0.9rem;
  }
`;
