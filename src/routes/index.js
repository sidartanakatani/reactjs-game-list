import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorFallback from "../components/ErrorBoundary";

import Loading from "../components/Loading";

const Home = React.lazy(() => import("../pages/Home/Home"));
const AddGame = React.lazy(() => import("../pages/AddGame"));
const Profile = React.lazy(() => import("../pages/Profile"));

const routes = () => {
  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <React.Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-game" element={<AddGame />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </React.Suspense>
      </ErrorBoundary>
    </Router>
  );
};

export default routes;
