import { Card } from 'antd';
import MenuItemGroup from '@/pages/Setup/components/ShieldManage/components/Navbar';
import { useLocation } from 'react-router-dom';
import Author from '@/pages/Setup/components/ShieldManage/pages/Author';
import IM from '@/pages/Setup/components/ShieldManage/pages/IM';
import Tag from '@/pages/Setup/components/ShieldManage/pages/Tag';
const App = () => {
  const location = useLocation(); // 获取当前路由信息
  return (
    <Card>
      <MenuItemGroup />
      <div>
        {(location.pathname === '/setup/shield/tag' || location.pathname === '/setup/shield') && (
          <Tag />
        )}
        {location.pathname === '/setup/shield/im' && <IM />}
        {location.pathname === '/setup/shield/author' && <Author />}
      </div>
    </Card>
  );
};

export default App;
