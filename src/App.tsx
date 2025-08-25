import { Provider } from "react-redux";
import { store } from "./app/store";
import "@/styles/index.css";
import PublicRoutes from "./routes/PublicRoutes";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PublicRoutes />
    </Provider>
  );
};

export default App;
