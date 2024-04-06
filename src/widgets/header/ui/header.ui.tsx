import { styled } from "styled-components";

import { SearchInput } from "~/features/search-Input/ui/search-input.ui";

import { LoginButton } from "~/entities/login-button";

import { Icon } from "~/shared/icons";

const Wrapper = styled.header`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
`;

const Contents = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 50px;
`;

export const Header = () => {
  return (
    <Wrapper>
      <Contents>
        <Icon.Logo />
        <SearchInput />
        <LoginButton />
      </Contents>
    </Wrapper>
  );
};
