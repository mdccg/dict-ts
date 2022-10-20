import styled from 'styled-components';

export const Container = styled.div`
  margin: 64px 32px 0;
`;

export const SearchArea = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const SearchBar = styled.input`
  width: 256px;
  height: 48px;
  box-sizing: border-box;
  outline: none;
  padding: 0 8px 0;
  font-size: 112.5%;
  border: 1px solid var(--city-lights);
  color: var(--dracula-orchid);
  font-family: 'Open Sans';
`;

export const SearchButton = styled.button`
  margin-left: 8px;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 2px;
  background-color: var(--dracula-orchid);
  cursor: pointer;
`;

export const MagnifyingGlassSolid = styled.img`
  width: 16px;
  height: 16px;
  filter: invert(1);
`;

export const SpanNotFoundMessage = styled.span`
  justify-content: center;
  align-self: center;
  display: flex;
  font-family: 'Open Sans';
  margin-top: 32px;
  font-size: 125%;
  color: var(--dracula-orchid);
`;