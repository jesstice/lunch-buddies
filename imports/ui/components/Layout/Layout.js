import React from 'react';
import HeaderBar from '../HeaderBar/';
//import MiniLunchInvites from '../MiniLunchInvites/MiniLunchInvites';

<<<<<<< HEAD
=======

>>>>>>> Start to create redux actions
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