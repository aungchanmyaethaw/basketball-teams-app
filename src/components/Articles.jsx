import React from "react";
import { Outlet, useParams } from "react-router-dom";
import useTeamsArticles from "../hooks/useTeamsArticles";
import Loading from "./Loading";
import Sidebar from "./Sidebar";
const Articles = () => {
  const { teamId } = useParams();
  const { response, loading } = useTeamsArticles(teamId);

  if (loading) return <Loading />;

  const articles = response.map((obj) => obj.title);

  return (
    <section className="two-column">
      <Sidebar title="Articles" lists={articles} />
      <Outlet />
    </section>
  );
};

export default Articles;
