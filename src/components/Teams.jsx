import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import useTeamNames from "../hooks/useTeamNames";
import Loading from "./Loading";
const Teams = () => {
  const { response: teams, loading } = useTeamNames();
  if (loading) return <Loading />;
  return (
    <section className="two-column">
      <Sidebar title="Teams" lists={teams} />
      <Outlet />
    </section>
  );
};

export default Teams;
