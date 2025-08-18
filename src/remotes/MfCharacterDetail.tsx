import Loader from "@components/Loader";
import { lazy, Suspense } from "react";

const RemoteCharacterDetailApp = lazy(() =>
  import("mfCharacterDetail/MfCharacterDetail").then((module) => ({
    default: module.default,
  }))
);

const MfCharacterDetail: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RemoteCharacterDetailApp />
    </Suspense>
  );
};

export default MfCharacterDetail;
