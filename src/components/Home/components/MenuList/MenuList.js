import React from 'react';

import MenuItem from '../MenuItem/MenuItem';

const MenuList = (props) => {
  return (
    <div>
      {props.meals.map((m) => {
        return (
          <MenuItem
            key={m._id}
            id={m._id}
            name={m.name}
            price={m.price}
            description={m.description}
          />
        );
      })}
    </div>
  );
};

export default MenuList;
