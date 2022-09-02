import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorFallback from "../components/ErrorBoundary";

import Loading from "../components/Loading";

const Home = React.lazy(() => import("../pages/Home"));
const AddGame = React.lazy(() => import("../pages/AddGame"));
const About = React.lazy(() => import("../pages/About"));

const routes = () => {
  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <React.Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-game" element={<AddGame />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </React.Suspense>
      </ErrorBoundary>
    </Router>
  );
};

export default routes;
