import React from 'react';
import s from './Layout.module.css'

const Layout = (props) => {
  return (
    <div className={s.layoutWrapper}>
      <div className={s.layoutWindow}>
        { props.children }
      </div>
    </div>
  );
}

export default Layout;
