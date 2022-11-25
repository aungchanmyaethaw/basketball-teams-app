import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import usePlayer from "../hooks/usePlayer";
import Loading from "./Loading";
const Player = () => {
  const { name } = useParams();
  const { response: player, loading } = usePlayer(name);
  if (loading)
    return (
      <div className="panel">
        <Loading />
      </div>
    );
  if (!player) return <Navigate to={`/players`} />;

  const {
    name: playerName,
    position,
    teamId,
    number,
    avatar,
    rpg,
    spg,
    apg,
    ppg,
    id,
  } = player;

  return (
    <article className="panel" style={{ marginTop: "80px" }}>
      <img src={avatar} alt={`${playerName}'s avatar`} />
      <h1 className="medium-header">{playerName}</h1>
      <h3 className="header">#{number}</h3>
      <div className="row">
        <ul className="info-list" style={{ marginRight: 80 }}>
          <li>
            Team
            <div>
              <Link to={`/${teamId}`}>
                {teamId[0].toUpperCase() + teamId.slice(1)}
              </Link>
            </div>
          </li>
          <li>
            Positon <div>{position}</div>
          </li>
          <li>
            PPG <div>{ppg}</div>
          </li>
        </ul>
        <ul className="info-list">
          <li>
            APG <div>{apg}</div>
          </li>
          <li>
            SPG <div>{spg}</div>
          </li>
          <li>
            RPG <div>{rpg}</div>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Player;
