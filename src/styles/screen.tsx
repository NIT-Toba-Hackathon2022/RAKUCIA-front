import * as React from 'react';
import { FC } from 'react';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import './style.css';

const Choosemenu = () => {
  return (
    <div>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="とんかつ" />
        <FormControlLabel control={<Checkbox />} label="スープ" />
      </FormGroup>
    </div>
  );
};
const Screen: FC = () => {
  const title = <h1 className="title">CRACIA</h1>;
  const text1 = <p className="text">作るものを選択してください</p>;
  const text2 = <p className="text">材料リスト</p>;

  return (
    <div>
      {title}
      {text1}
      <hr className="line" />
      <Choosemenu />
      {text2}
      <hr className="line" />
    </div>
  );
};

export default Screen;
