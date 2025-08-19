import Layout from '@components/layout/Layout';
import { BrowserRouter } from 'react-router-dom';
//import PublicRoutes from '@routes/PublicRoutes';

const App: React.FC = () => {
  
  console.log({env: process.env})

  return (
    <BrowserRouter>
      <Layout>
        Holis
        {/* <PublicRoutes /> */}
      </Layout>
    </BrowserRouter>
  );
};

export default App;
