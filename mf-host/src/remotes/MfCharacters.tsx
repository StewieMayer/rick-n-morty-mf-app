import { lazy, Suspense } from "react";
import Loader from "@components/Loader"

const RemoteCharactersApp = lazy(() =>
  import("mfCharacters/MfCharacters").then((module) => ({
    default: module.default,
  }))
);

const MfCharacters = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RemoteCharactersApp />
    </Suspense>
  );
};

export default MfCharacters;
