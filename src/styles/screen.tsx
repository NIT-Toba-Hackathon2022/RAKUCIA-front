import { Button } from '@mui/material';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { FC } from 'react';
import './style.css';

const Screen: FC = () => {
  const title = <h1 className="title">CRACIA</h1>;
  const text1 = <h2>作るものを選択してください</h2>;
  const text2 = <h2>材料リスト</h2>;

  return (
    <div>
      {title}
      <hr className="line" />
    </div>
  );
};

export default Screen;
