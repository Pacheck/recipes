import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0rem 2rem;
`;

export const Logo = styled.img``;

export const LinksList = styled.ul`
  display: flex;
`;
export const ListItem = styled.li`
  list-style: none;
  display: grid;
  place-items: center;
  padding: 0.5rem 1rem;
  border: 3px solid transparent;
  font-family: sans-serif;
  color: #333;

  margin: 0rem 1rem;

  :hover {
    border: 3px solid #373737;
    cursor: pointer;
  }

  :active {
    background-color: #333;
    color: #eee;
  }
`;
export const NavigationLink = styled.a``;
