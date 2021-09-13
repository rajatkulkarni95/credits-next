import styled from "styled-components";
import Link from "next/link";
import Navlink from "./NavLink";
import { useRouter } from "next/dist/client/router";
import { font } from "../theme/theme";

const Navbar: React.FC = () => {
  const router = useRouter();

  const isActive = (path: string): boolean => {
    return router.pathname === path;
  };

  return (
    <Wrapper>
      <Logo>Credits</Logo>
      <div>
        <Link href="/movies">
          <Navlink active={isActive("/movies")}>Movies</Navlink>
        </Link>
        <Link href="/tv">
          <Navlink active={isActive("/tv")}>TV</Navlink>
        </Link>
        <Link href="/favorites">
          <Navlink active={isActive("/favorites")}>Favorites</Navlink>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.sizing.seven};
`;

const Logo = styled.h1`
  margin: 0;
  font-size: ${font.sizes.lg};
`;

export default Navbar;
