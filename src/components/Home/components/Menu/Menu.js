import React, { useState } from 'react';

import './Menu.css';
import Card from '../../../Shared/UI/Card/Card';
import MenuList from '../MenuList/MenuList';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Menu = (props) => {
  const [clickId, setClickId] = useState('');
  return (
    <Card className="menu-card">
      {props.menu.map((m) => {
        return (
          <div key={m._id}>
            <div
              className="menu-item"
              onClick={() => {
                if (clickId === m._id) {
                  return setClickId('');
                }
                setClickId(m._id);
              }}
            >
              <h3 className="menu-heading">{m.name}</h3>
              <KeyboardArrowDownIcon />
            </div>
            {clickId === m._id && <MenuList meals={m.meals} id={m._id} />}
          </div>
        );
      })}
    </Card>
  );
};

export default Menu;
