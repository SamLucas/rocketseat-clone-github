import React from "react";

import {
  Container,
  BreadCrum,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GitHubIcon,
} from "./styles";

import { Link } from "react-router-dom";

const Repo: React.FC = () => {
  return (
    <Container>
      <BreadCrum>
        <RepoIcon />
        <Link className="username" to={"/samLucas"}>
          SamLucas
        </Link>

        <span>/</span>

        <Link className="reponame" to={"/samLucas/rocketseat-clone-github"}>
          rocketseat-clone-github
        </Link>
      </BreadCrum>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi suscipit
        recusandae eaque iusto eos officia aperiam laboriosam aliquam deleniti
        officiis? Eaque neque eveniet ducimus ipsa cupiditate officia.
        Architecto, corporis deleniti!
      </p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>starts</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={"http://github.com/samLucas/rocketseat-clone-github"}>
        <GitHubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
