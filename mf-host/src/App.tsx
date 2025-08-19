import Layout from '@components/layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from '@routes/PublicRoutes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <PublicRoutes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
