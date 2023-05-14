import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  theme?: 'light' | 'dark',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    theme,
  } as MenuItem;
}

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState('1');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  const items: MenuItem[] = [
    getItem('个人资料', '1'),
    getItem('账号设置', '2'),
    getItem('消息设置', '3'),
    getItem('简历管理', '4'),
    getItem('屏蔽管理', '5'),
    getItem('标签管理', '6'),
  ];

  return (
    <>
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        openKeys={['sub1']}
        selectedKeys={[current]}
        mode="vertical"
        items={items}
        getPopupContainer={(node) => node.parentNode as HTMLElement}
      />
    </>
  );
};

export default Navbar;
