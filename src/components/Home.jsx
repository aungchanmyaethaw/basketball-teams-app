import React from "react";
import { Link } from "react-router-dom";
import useTeamNames from "../hooks/useTeamNames";
import Loading from "./Loading";
import TeamLogo from "./TeamLogo";
const Home = () => {
  const { response: teams, loading } = useTeamNames();

  return (
    <div>
      <h1 className="large-header">Basketball Teams</h1>
      <h2 className="medium-header">Select A Team</h2>
      {loading ? (
        <Loading />
      ) : (
        <ul className="home-grid">
          {teams.map((team) => (
            <Link key={team} to={`/${team}`}>
              <TeamLogo id={team} width="160px" />
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
