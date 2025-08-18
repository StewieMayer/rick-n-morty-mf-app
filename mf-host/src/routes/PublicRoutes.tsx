import MfCharacterDetail from "@remotes/MfCharacterDetail";
import MfCharacters from "@remotes/MfCharacters";
import { Route, Routes } from "react-router-dom";

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MfCharacters />} />
      <Route path="character/:id/*" element={<MfCharacterDetail />} />
    </Routes>
  );
};

export default PublicRoutes;
