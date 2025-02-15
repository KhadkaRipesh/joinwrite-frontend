import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
const NotesSideBar = () => {
  return (
    <div>
      <Sidebar>
        <Menu>
          <MenuItem>My Notes</MenuItem>
          <MenuItem>My History</MenuItem>
          <MenuItem>My Profile</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default NotesSideBar;
