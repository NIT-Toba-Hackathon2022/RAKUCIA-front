import * as React from 'react';
import { FC, useState, useEffect } from 'react';
import liff from '@line/liff';

import Checkbox from '@mui/material/Checkbox';

import gql from 'graphql-tag';
import client from '../utils/apollo';
import './style.css';

//userが選択した料理をAPIから受け取り、リストで表示するコンポーネント
const Choosemenu = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    liff.ready.then(() => {
      liff
        .init({ liffId: process.env.REACT_APP_LIFF_ID as string })
        .then(() => {
          liff.getProfile().then((profile) => {
            client
              .query({
                query: gql`
                query {
                  createList(user_id: ${profile.userId}) {
                    id
                    user_id
                    recipe_title
                    recipe_url
                    image_url
                    recipe_material
                    recipe_indication
                    recipe_cost
                    add_to_list
                    leave_flag
                  }
                }
              `,
              })
              .then((result) => console.log(result));
          });
        });
    });
  });
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
