import styled from "styled-components";

interface SidebarProps {
  title: string;
  children?: React.ReactNode;
}

const Container = styled.div`
  height: 429px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  padding: 40px 30px;
  box-shadow: 0px 4px 50px 0px rgba(255, 255, 255, 0.1);
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
