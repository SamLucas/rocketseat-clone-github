import styled, { css } from "styled-components";
import { RiBookMarkLine } from "react-icons/ri";

export const Container = styled.div`
  --horizontaPadding: 16px;
  --verticalPadding: 24px;
  padding: var(--verticalPadding) var(--horizontaPadding);
  overflow: hidden;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 1280px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftSide = styled.div`
  padding: 0 var(--horizontaPadding);
  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const RightSide = styled.div`
  padding: 0 var(--horizontaPadding);
  @media (min-width: 768px) {
    width: 75%;
  }
`;

export const Repos = styled.div`
  margin-top: var(--verticalPadding);

  > h2 {
    font-size: 16px;
    font-weight: normal;
  }

  > div {
    margin-top: 8px;

    display: grid;
    grid-gap: 16px;

    grid-template-columns: 1fr;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-auto-columns: minmax(min-content, max-content);
    }
  }
`;

export const CalendarHanding = styled.span`
  font-size: 16px;
  margin: 36px 0 9px;
  display: inline-flex;
`;

export const RepoIcon = styled(RiBookMarkLine)`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

export const Tab = styled.div`
  background: var(--primary);

  .content {
    display: flex;
    align-items: center;
    width: min-content;

    padding: 14px 16px;

    border-bottom: 2px solid var(--orange);

    .label {
      font-size: 14px;
      padding: 0 7px;
      font-weight: 600;
    }

    .number {
      font-size: 12px;
      background: var(--ticker);
      padding: 2px 6px;
      border-radius: 24px;
    }
  }

  .line {
    display: flex;
    width: 200vw;
    border-bottom: 1px solid var(--border);
    margin-left: -50vw;
  }

  &.mobile {
    margin-top: var(--verticalPadding);

    .content {
      margin: 0 auto;
    }

    @media (min-width: 768px) {
      display: none;
    }
  }

  &.descktop {
    display: none;

    @media (min-width: 768px) {
      display: unset;

      .wraper {
        display: flex;
        margin: 0 auto;
        max-width: 1280px;
      }

      .offset {
        width: 25%;
        margin-right: var(--horizontaPadding);
      }
    }
  }
`;

const containerAux = css`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 1280px;
  height: calc(100vh - 20vh);

  justify-content: center;
  align-items: center;
`;

export const ContainerError = styled.div`
  ${containerAux}
`;

export const Loading = styled.div`
  ${containerAux}
`;
