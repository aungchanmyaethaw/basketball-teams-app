import React from "react";
import { useLocation, Link, Outlet, useSearchParams } from "react-router-dom";
import usePlayerNames from "../hooks/usePlayerNames";
import Sidebar from "./Sidebar";
import Loading from "./Loading";
const Players = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams(location.search);
  const teamId = searchParams.get("teamId");

  const { response: playerNames, loading } = usePlayerNames(teamId);

  if (loading) return <Loading />;
  return (
    <section className="two-column">
      <Sidebar lists={playerNames} title="Players" />
      <Outlet />
    </section>
  );
};

export default Players;
