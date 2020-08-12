import React, { useState } from "react";

import { Container, SearchForm, GitHubLogo } from "./styles";
import { useNavigate } from "react-router-dom";

import { ThemeName } from "../../styles/theme";

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const toggleTheme = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
  };

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate(`/${search.toLowerCase().trim()}`);
  }

  return (
    <Container>
      <GitHubLogo onClick={toggleTheme} />
      <SearchForm onSubmit={handleSubmit}>
        <input
          placeholder="Enter Username or Repo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchForm>
    </Container>
  );
};

export default Header;
