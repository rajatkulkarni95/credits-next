import styled from "styled-components";

interface NavbarProps {
  active?: boolean;
}

const Navlink = styled.a<NavbarProps>`
  margin: 0 ${(props) => props.theme.sizing.four};
  color: ${(props) =>
    props.active
      ? props.theme.colors.text.active
      : props.theme.colors.text.secondary};
  border-radius: 4px;
  background: ${(props) =>
    props.active ? props.theme.colors.layout.foreground : "none"};
  cursor: pointer;
  padding: ${(props) => props.theme.sizing.two};
`;

export default Navlink;
