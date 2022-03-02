import * as React from 'react';
import { FC, useState } from 'react';

import Checkbox from '@mui/material/Checkbox';

import './style.css';

//userが選択した料理をAPIから受け取り、リストで表示するコンポーネント

const Choosemenu = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
      <Checkbox checked={checked} onChange={handleChange} />
    </div>
  );
};

//選択された料理の材料のデータを取得し表示するコンポーネント

//UI構成
const Screen: FC = () => {
  const text1 = <p className="text">作るものを選択してください</p>;
  const text2 = <p className="text">材料リスト</p>;

  return (
    <div>
      {text1}
      <hr className="line" />
      <Choosemenu />
      {text2}
      <hr className="line" />
    </div>
  );
};

export default Screen;
