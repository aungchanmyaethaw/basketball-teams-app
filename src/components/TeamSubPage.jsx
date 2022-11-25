import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import TeamLogo from "./TeamLogo";
import useTeam from "../hooks/useTeam";
import Loading from "./Loading";
const TeamSubPage = () => {
  const { teamId } = useParams();
  const { response: team, loading } = useTeam(teamId);
  if (loading)
    return (
      <div className="panel">
        <Loading />
      </div>
    );
  if (!team) return <Navigate to={`/teams`} />;
  return (
    <div style={{ width: "100%", marginTop: "5em" }}>
      <TeamLogo id={team.id} className="center" />
      <ul className="info-list row">
        <li>
          <h3 className="header">Est.</h3>
          <div>{team.established}</div>
        </li>
        <li>
          <h3 className="header">Manager</h3>
          <div>{team.manager}</div>
        </li>
        <li>
          <h3 className="header">Coach</h3>
          <div>{team.established}</div>
        </li>
        <li>
          <h3 className="header">Record</h3>
          <div>
            {team.wins} - {team.losses}
          </div>
        </li>
      </ul>
      <Link
        className="btn-main center"
        to={`/${teamId}`}
        style={{ textTransform: "capitalize" }}
      >
        Go to {teamId}'s page
      </Link>
    </div>
  );
};

export default TeamSubPage;
