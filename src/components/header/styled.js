import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: ${(props) => 'url(' + props.bgUrl + ')'};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 50rem;
`;

export const Title = styled.h1`
  font-size: 90px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  position: absolute;
  top: calc(50% - 120px);
  left: calc(50% - 161px);
  color: #373737;
`;
