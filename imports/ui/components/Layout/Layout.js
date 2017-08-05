import MiniLunchInvites from '../MiniLunchInvites/MiniLunchInvites';

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