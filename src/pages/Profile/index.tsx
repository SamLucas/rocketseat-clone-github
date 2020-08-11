import React from "react";

import { Container, Main, LeftSide, RightSide, Repos } from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";

const Profile: React.FC = () => {
  return (
    <Container>
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
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
