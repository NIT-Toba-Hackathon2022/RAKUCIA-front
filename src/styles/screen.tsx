import { Button } from '@mui/material';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { FC } from 'react';
import './style.css';

const Screen: FC = () => {
  const title = <h1 className="title">CRACIA</h1>;
  const text1 = <p className="text">作るものを選択してください</p>;
  const text2 = <p className="text">材料リスト</p>;

  return (
    <div>
      {title}
      {text1}
      <hr className="line" />
      {text2}
      <hr className="line" />
    </div>
  );
};

export default Screen;
