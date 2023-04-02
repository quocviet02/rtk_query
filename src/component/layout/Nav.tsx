import React, { useState } from 'react';
import { Image } from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  DiffOutlined,
  UsergroupDeleteOutlined,
  UsergroupAddOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Sản phẩm', '1', <PieChartOutlined />,[
    getItem('Thêm sản phẩm','addProduct',<DiffOutlined />)
  ]),
  getItem('Danh mục', '2', <DesktopOutlined />,[
    getItem('Thêm danh mục','addCate',<DiffOutlined />)
  ]),
  getItem('User', 'sub1', <UsergroupAddOutlined />, [
    getItem('Justin bia hơi', '3',<UserOutlined />),
    getItem('Alexander rau muống', '4',<UserOutlined />),
   
  ]),
 
];

const Nav: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <Image
        className='rounded-[50%] w-[50px]'
        src="https://i.pinimg.com/564x/ac/d4/bd/acd4bd57d7fb7b63b90bf740ece2242d.jpg"
      />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
    </Sider>
  );
};

export default Nav;