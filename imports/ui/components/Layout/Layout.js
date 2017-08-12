import React from 'react';
import HeaderBar from '../HeaderBar/';
import MyInvites from '../../containers/MyInvites/';

const Layout = ({children}) => {
  return (
    <div className="app-wrapper">
      <div className="app-header">
        <HeaderBar />
      </div>
      <MyInvites />
      <div className="app-content">
          {children}
      </div>
      <footer className="app-footer">
        <p>© 2017 Lunch Buddies</p>
      </footer>
    </div>
  )
}

export default Layout;