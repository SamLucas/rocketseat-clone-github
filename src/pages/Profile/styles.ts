import styled from "styled-components";

export const Container = styled.div`
  --horizontaPadding: 16px;
  --verticalPadding: 24px;
  padding: var(--verticalPadding) var(--horizontaPadding);
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
