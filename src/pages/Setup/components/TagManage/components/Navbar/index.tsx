import { Menu } from 'antd';
import { Link } from 'umi';

const { Item } = Menu;

const MenuItemGroup = () => {
  return (
    <Menu mode="horizontal">
      <Item key="author">
        <Link to="/setup/tag/subscribed">已关注标签</Link>
      </Item>
      <Item key="im">
        <Link to="/setup/tag/all">全部标签</Link>
      </Item>
    </Menu>
  );
};

export default MenuItemGroup;
