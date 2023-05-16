import { Card } from 'antd';
import MenuItemGroup from './components/Navbar';
import { useLocation } from 'react-router-dom';
import All from './pages/All';
import Subscribed from './pages/Subscribed';

const App = () => {
  const location = useLocation(); // 获取当前路由信息
  return (
    <Card>
      <MenuItemGroup />
      <div>
        {(location.pathname === '/setup/tag/subscribed' || location.pathname === '/setup/tag') && (
          <Subscribed />
        )}
        {location.pathname === '/setup/tag/all' && <All />}
      </div>
    </Card>
  );
};

export default App;
