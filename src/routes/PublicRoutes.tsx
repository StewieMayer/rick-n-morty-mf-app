import CharacterDetail from "@/pages/character-detail/CharacterDetail";
import Characters from "@/pages/characters/Characters";
import { Route, Routes } from "react-router-dom";

const PublicRoutes: React.FC = () => {
  return <Routes>
    <Route path="/" element={<Characters />} />
    <Route path="/:id" element={<CharacterDetail />} />"
  </Routes>;
};

export default PublicRoutes;