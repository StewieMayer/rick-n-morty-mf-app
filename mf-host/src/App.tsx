import Layout from "@components/layout/Layout";
import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "@routes/PublicRoutes";

const App: React.FC = () => {

  alert(process.env.MF_CHARACTER)

  return (
    <BrowserRouter>
      <Layout>
        <PublicRoutes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
