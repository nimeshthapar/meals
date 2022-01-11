import React from 'react';

import Button from '../Button/Button';
import './MenuForm.css';

const MenuForm = React.forwardRef((props, ref) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <div className="menu-form__div">
          <input
            type="number"
            step="1"
            max="5"
            min="1"
            defaultValue={props.default || '1'}
            ref={ref}
          />
          {!props.cart && <Button title="Add" type="submit" />}
        </div>
      </form>
    </div>
  );
});

export default MenuForm;
