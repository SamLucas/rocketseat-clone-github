import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  TopSide,
  RepoIcon,
  BotSide,
  StarIcon,
  ForkIcon,
} from "./styles";

interface dataCard {
  reponame: string;
  username: string;
  description?: string;
  stars: number;
  language?: string;
  forks: number;
}

interface Props {
  data: dataCard;
}

const RepoCard: React.FC<Props> = ({ data }) => {
  const { reponame, username, description, stars, language, forks } = data;

  const languageClass =
    language === "JavaScript" || language === "TypeScript"
      ? language.toLowerCase()
      : "other";

  return (
    <Container>
      <TopSide>
        <header>
          <RepoIcon />
          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
        </header>
        <p>{description}</p>
      </TopSide>
      <BotSide>
        <ul>
          <li>
            <div className={`language ${languageClass}`} />
            <span>{language}</span>
          </li>
          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </BotSide>
    </Container>
  );
};

export default RepoCard;
