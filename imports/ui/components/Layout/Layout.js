import React from 'react';
import HeaderBar from '../HeaderBar/';
//import MiniLunchInvites from '../MiniLunchInvites/MiniLunchInvites';

<<<<<<< HEAD
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
=======
const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="appContent">
            {children}
        </div>
    <footer className="appFooter">
      <p>© 2017 Lunch Buddies</p>
    </footer>
    </div>
);
>>>>>>> f93f251b42a987685258df9f1c541c47785df445

export default Layout;