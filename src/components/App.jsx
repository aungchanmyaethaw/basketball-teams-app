import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Loading from "./Loading";
const Home = React.lazy(() => import("./Home"));
const Players = React.lazy(() => import("./Players"));
const Teams = React.lazy(() => import("./Teams"));
const Team = React.lazy(() => import("./Team"));
const TeamSubPage = React.lazy(() => import("./TeamSubPage"));
const Player = React.lazy(() => import("./Player"));
const Articles = React.lazy(() => import("./Articles"));
const Article = React.lazy(() => import("./Article"));

const App = () => {
  return (
    <Router>
      <div className="top-border" />
      <main className="container">
        <Navbar />
        <React.Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<Players />}>
              <Route
                path=""
                element={<div className="panel header">Select a player</div>}
              />
              <Route path=":name" element={<Player />} />
            </Route>
            <Route path="/teams" element={<Teams />}>
              <Route
                path=""
                element={<div className="panel header">Select a team</div>}
              />
              <Route path=":teamId" element={<TeamSubPage />} />
            </Route>
            <Route path="/:teamId" element={<Team />} />
            <Route path="/:teamId/articles" element={<Articles />}>
              <Route
                path=""
                element={<div className="panel header">Select an article</div>}
              />
              <Route path=":articleId" element={<Article />} />
            </Route>
          </Routes>
        </React.Suspense>
      </main>
    </Router>
  );
};

export default App;
