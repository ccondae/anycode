import styled from "styled-components";

import { SearchInputProps } from "../model/search-input.type";

const Input = styled.input`
  width: 100%;
  max-width: 630px;
  height: 37px;
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 10px;
  background-color: transparent;
  padding-left: 20px;
  font-size: ${(props) => props.theme.fontSize.body1};
  &::placeholder {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return <Input placeholder="Search" value={value} onChange={onChange} />;
};
