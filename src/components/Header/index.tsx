import React from "react";

import { Container, SearchForm, GitHubLogo } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <GitHubLogo />
      <SearchForm>
        <input placeholder="Enter Username or Repo..." />
      </SearchForm>
    </Container>
  );
};

export default Header;
