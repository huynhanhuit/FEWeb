import styled from "styled-components";
import { Badge } from "@material-ui/core";
import {
  SearchOutlined,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
const Container = styled.header`
  background-color: black;
`;
const NavbarContainer = styled.div`
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0px 70px;
`;
const Logo = styled.div`
  /* background-color: yellow; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-right: 0px;
`;
const Image = styled.img`
  max-width: 70%;
  height: auto;
`;
const Nav = styled.nav`
  display: flex;
  /* background-color: green; */
  flex: 3;
  margin-left: -30px;
`;
const Item = styled.ul`
  list-style: none;
  /* background-color: green; */
`;
const Name = styled.li`
  color: white;
  /* background-color: red; */
  padding: 12px 12px;
  border-radius: 10px;
  font-size: 13px;
  /* background-color: rgb(255, 255, 255); */
  text-align: center;
`;
const NavbarRight = styled.div`
  margin-right: -20px;
  flex: 1;
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* background-color: red; */
`;
const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;
const Navbar = () => {
  return (
    <Container>
      <NavbarContainer>
        <Logo>
          <Image src="https://bizweb.dktcdn.net/100/335/381/themes/762562/assets/logo.png?1655104839710" />
        </Logo>
        <Nav>
          <Item>
            <Name style={{ backgroundColor: "white", color: "black" }}>
              <span>TRANG CHỦ</span>
            </Name>
          </Item>
          <Item>
            <Name>
              <span>GIỚI THIỆU</span>
            </Name>
          </Item>
          <Item>
            <Name>
              <span>SẢN PHẨM</span>
            </Name>
          </Item>
          <Item>
            <Name>
              <span>REVIEW</span>
            </Name>
          </Item>
          <Item>
            <Name>
              <span>LIÊN HỆ</span>
            </Name>
          </Item>
        </Nav>
        <NavbarRight>
          <MenuItem>
            <SearchOutlined style={{ fontSize: 21 }} />
          </MenuItem>
          <MenuItem>
            <FavoriteBorderOutlined style={{ fontSize: 21 }} />
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={0} color="white">
              <ShoppingCartOutlined style={{ fontSize: 21 }} />
            </Badge>
          </MenuItem>
        </NavbarRight>
      </NavbarContainer>
    </Container>
  );
};

export default Navbar;
