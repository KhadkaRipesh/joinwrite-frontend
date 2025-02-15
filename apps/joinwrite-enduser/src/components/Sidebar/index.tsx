import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
const Test = () => {
  return (
    <div>
      <Sidebar collapsed>
        <Menu>
          <MenuItem>Test 1</MenuItem>
          <MenuItem>Test 2</MenuItem>
          <MenuItem>Test 3</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Test;
