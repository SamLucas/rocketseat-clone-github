import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHanding,
  RepoIcon,
  Tab,
  ContainerError,
  Loading,
} from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandowCalendar from "../../components/RandowCalendar";

import { APIUser, APIRepo } from "../../@types";

interface Data {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

const Profile: React.FC = () => {
  const { username = "samLucas" } = useParams();

  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      fetch(`http://api.github.com/users/${username}`),
      fetch(`http://api.github.com/users/${username}/repos`),
    ]).then(async (response) => {
      const [userResponse, repoResponse] = response;

      if (userResponse.status === 404) {
        setData({ error: "User not found." });
        return;
      }

      const user = await userResponse.json();
      const repos = await repoResponse.json();

      const shuffledRepos = repos.sort(() => 0.5 - Math.random());
      const slicedRepos = shuffledRepos.slice(0, 6);

      setData({
        user,
        repos: slicedRepos,
      });
    });
  }, [username]);

  if (data?.error) {
    return (
      <ContainerError>
        <h1>{data.error}</h1>
      </ContainerError>
    );
  }

  if (!data?.user || !data?.repos) {
    return (
      <Loading>
        <h1>Loading...</h1>
      </Loading>
    );
  }

  const TabContent = () => {
    return (
      <div className="content">
        <RepoIcon />
        <span className="label">Repositories</span>
        <span className="number">{data?.user?.public_repos}</span>
      </div>
    );
  };

  return (
    <Container>
      <Tab className="descktop">
        <div className="wraper">
          <span className="offset"></span>
          <TabContent />
        </div>
        <span className="line" />
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            data={{
              username: data.user.login,
              name: data.user.name,
              avatarUrl: data.user.avatar_url,
              followers: data.user.followers,
              following: data.user.following,
              company: data.user.company,
              location: data.user.location,
              email: data.user.email,
              blog: data.user.blog,
            }}
          />
        </LeftSide>
        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>

          <Repos>
            <h2>Random Repos</h2>
            <div>
              {data.repos.map((item) => (
                <RepoCard
                  key={item.name}
                  data={{
                    username: item.owner.login,
                    reponame: item.name,
                    description: item.description,
                    language: item.language,
                    stars: item.stargazers_count,
                    forks: item.forks,
                  }}
                />
              ))}
            </div>
          </Repos>

          <CalendarHanding>
            Random Calendar (do not represent actual data)
          </CalendarHanding>
          <RandowCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
