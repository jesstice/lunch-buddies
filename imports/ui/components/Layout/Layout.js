import React from 'react';
import HeaderBar from '../HeaderBar/';
import './styles.css';
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
      <footer className="app-footer">
        <p>© 2017 Lunch Buddies</p>
      </footer>
    </div>
  )
}

export default Layout;