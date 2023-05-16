import { Menu } from 'antd';
import { Link } from 'umi';

const { Item } = Menu;

const MenuItemGroup = () => {
  return (
    <Menu mode="horizontal">
      <Item key="author">
        <Link to="/setup/shield/author">屏蔽作者</Link>
      </Item>
      <Item key="im">
        <Link to="/setup/shield/im">屏蔽私信用户</Link>
      </Item>
      <Item key="tag">
        <Link to="/setup/shield/tag">屏蔽标签</Link>
      </Item>
    </Menu>
  );
};

export default MenuItemGroup;
