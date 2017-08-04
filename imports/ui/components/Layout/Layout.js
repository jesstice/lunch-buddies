import React from 'react';
import HeaderBar from '../HeaderBar/';
//import MiniLunchInvites from '../MiniLunchInvites/MiniLunchInvites';

const Layout = ({children}) => {
  return (
    <div className="app-wrapper">
      <div className="app-header">
        <HeaderBar />
      </div>
      <div className="app-content">
          {children}
      </div>
    </div>
  )
}

export default Layout;