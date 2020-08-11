import React from "react";

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHanding,
  RepoIcon,
  Tab,
} from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandowCalendar from "../../components/RandowCalendar";

const Profile: React.FC = () => {
  const TabContent = () => {
    return (
      <div className="content">
        <RepoIcon />
        <span className="label">Repositories</span>
        <span className="number">6</span>
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
              username: "samLucas",
              name: "Samuel Lucas",
              avatarUrl: "http://github.com/samlucas.png",
              followers: 887,
              following: 7,
              company: "RocketSeat",
              location: "Guaxupé, Brasil",
              email: "samuellucas0603@gmail.com",
              blog: undefined,
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
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  data={{
                    username: "samLucas",
                    reponame: "rocketseat-clone-github",
                    description:
                      n % 3
                        ? "Challenger clone website github."
                        : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto iure dolor reprehenderit. Numquam accusamus et at dicta esse quibusdam doloribus deserunt adipisci, illum, autem molestiae repellendus veniam, vel earum repellat!",
                    language:
                      n % 3 ? "JavaScript" : n % 2 ? "TypeScript" : "c++",
                    stars: 4,
                    forks: 3,
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
