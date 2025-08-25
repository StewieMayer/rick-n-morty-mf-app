import MfCharacters from '@remotes/MfCharacters';
import { Route, Routes, Navigate } from 'react-router-dom';

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<MfCharacters />} />
    </Routes>
  );
};

export default PublicRoutes;
