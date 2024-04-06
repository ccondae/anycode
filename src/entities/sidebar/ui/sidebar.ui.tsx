import styled from "styled-components";

interface SidebarProps {
  title: string;
  children?: React.ReactNode;
}

const Container = styled.div`
  min-width: 168px;
  height: 429px;
  border-radius: 30px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  padding: 40px 30px;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontSize.subtitle2};
  font-weight: 600;
`;

export const Sidebar = ({ title, children }: SidebarProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};
