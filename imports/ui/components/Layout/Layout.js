//import MiniLunchInvites from '../MiniLunchInvites/MiniLunchInvites';
import React from 'react';

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

export default Layout;