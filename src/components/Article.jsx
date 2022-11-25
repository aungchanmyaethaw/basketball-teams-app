import React from "react";
import { useParams, Navigate } from "react-router-dom";
import useArticle from "../hooks/useArticle";
import Loading from "./Loading";
const Article = () => {
  const { articleId, teamId } = useParams();
  const { response: article, loading } = useArticle({ teamId, articleId });

  if (loading)
    return (
      <div className="panel">
        <Loading />
      </div>
    );

  if (!article) return <Navigate to={`/${teamId}/articles`} />;

  return (
    <div className="article">
      <h2 className="text-center">{article.title}</h2>
      <h3 className="article-date">
        {new Date(article.date).toLocaleString()}
      </h3>

      <p>{article.body}</p>
    </div>
  );
};

export default Article;
