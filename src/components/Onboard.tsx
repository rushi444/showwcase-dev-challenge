import React, { FC, useState } from 'react';

export const Onboard: FC = () => {
  const [name, setName] = useState<string>('');

  return (
    <div>
      <h2>Hi, what's your name?</h2>
      <input
        type='text'
        name='name'
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <button>next</button>
    </div>
  );
};
