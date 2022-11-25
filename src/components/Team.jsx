import React from "react";
import { useParams, Link } from "react-router-dom";
import useTeam from "../hooks/useTeam";
import useTeamsArticles from "../hooks/useTeamsArticles";
import useTeamNames from "../hooks/useTeamNames";
import TeamLogo from "./TeamLogo";
import Loading from "./Loading";
function usefetchTeamData(teamId) {
  const { response: team, loading: firstLoading } = useTeam(teamId);
  const { response: articles, loading: secondLoading } =
    useTeamsArticles(teamId);
  const { response: teamNames, loading: lastLoading } = useTeamNames();

  return {
    team,
    articles,
    teamNames,
    loading: firstLoading || secondLoading || lastLoading,
  };
}

const Team = () => {
  const { teamId } = useParams();
  const { team, articles, teamNames, loading } = usefetchTeamData(teamId);

  if (loading) return <Loading />;

  if (!teamNames.includes(teamId))
    return <p style={{ color: "white" }}>{teamId} does not exist.</p>;

  return (
    <section className="panel">
      <TeamLogo id={teamId} />
      <h1 className="medium-header">{team.name}</h1>
      <Link to={{ pathname: "/players", search: `?teamId=${teamId}` }}>
        View Players
      </Link>

      <h4>Championships</h4>
      <ul className="championships">
        {team.championships.map((year) => (
          <li key={year}>{year}</li>
        ))}
      </ul>

      <ul className="info-list row" style={{ width: "100%" }}>
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

      <h2>Articles</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id} className="article">
            <p className="article-title">
              <Link to={`/${teamId}/articles/${article.id}`}>
                {article.title}
              </Link>
            </p>
            <div className="article-date">
              {new Date(article.date).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Team;
