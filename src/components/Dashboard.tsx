import React, { FC, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { IInitialState } from '../redux/reducer';

interface StateProps {
  userName: string;
}

export const Dashboard: FC = () => {
  const { userName } = useSelector<IInitialState, StateProps>(
    (state: IInitialState) => {
      return {
        userName: state.userName,
      };
    },
    shallowEqual,
  );
  console.log('Why so');
  console.log(userName);
  return <div>{userName}</div>;
};
