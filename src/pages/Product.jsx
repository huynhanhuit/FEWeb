import styled from "styled-components";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
  /* border: 1px solid #dfe4e8; */
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
  color: #413c3c;
`;
const MenuTitle = styled.div`
  justify-content: flex-start;
  display: flex;
  margin-top: 5px;
`;
const TitleName = styled.h2`
  font-weight: 10;
  font-size: 15px;
  margin-right: 10px;
  color: dimgray;
`;
const DescShip = styled.p`
  color: #313030;
  margin: 20px 0px;
`;
const Price = styled.h1`
  margin-top: 30px;
  font-weight: 100;
  font-size: 35px;
  color: dimgray;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterSizeName = styled.span`
  padding: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
const FilterSize = styled.div`
  margin-top: 10px;
  width: 400px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const AddContainer = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;
const DescDetail = styled.div`
  margin-top: 50px;
`;
const Description = styled.h3`
  margin-top: 30px;
  font-weight: 10;
  font-size: 15px;
  color: #898989;
`;
const QuickProduct = styled.div`
  max-width: 575px;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Image1 = styled.img`
  margin: 0px 3px;
  width: 20%;
  display: flex;
  cursor: pointer;
  border: 1px solid #dfe4e8;
  &:hover {
    border: 1px solid #575a5c;
  }
`;
const Arrow = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 50%;
  border: 1px solid gray;
  &:hover {
    background-color: #596068;
    color: white;
  }
`;
const ImageQuick = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const Product = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://bizweb.dktcdn.net/thumb/large/100/335/381/products/amaf-club-de-nuit-intense-limited-edition-01.png" />
          <QuickProduct>
            <Arrow>
              <ArrowLeftOutlined />
            </Arrow>
            <ImageQuick>
              <Image1 src="https://bizweb.dktcdn.net/thumb/large/100/335/381/products/amaf-club-de-nuit-intense-limited-edition-01.png" />
              <Image1 src="https://bizweb.dktcdn.net/thumb/large/100/335/381/products/download-9.jpg" />
              <Image1 src="https://bizweb.dktcdn.net/thumb/large/100/335/381/products/armaf-club-de-nuit-intense-a-collectors-pride-l.jpg" />
              <Image1 src="https://bizweb.dktcdn.net/thumb/large/100/335/381/products/club-de-nuit-intense-limited-01.png" />
            </ImageQuick>
            <Arrow>
              <ArrowRightOutlined />
            </Arrow>
          </QuickProduct>
        </ImgContainer>

        <InfoContainer>
          <Title>
            Armaf Club De Nuit Intense Limited Luxury Edition Men New
          </Title>
          <MenuTitle>
            <TitleName>H??ng: Armaf </TitleName>
            <TitleName> | </TitleName>
            <TitleName> T??nh tr???ng: C??n h??ng</TitleName>
          </MenuTitle>
          <Price>1.750.000??</Price>
          <DescShip>
            Mi???n ph?? v???n chuy???n cho h??a ????n gi?? tr??? tr??n 750.000VN??
          </DescShip>
          <FilterContainer>
            <Filter>
              <FilterTitle>Dung t??ch:</FilterTitle>
              <FilterSize>
                <FilterSizeName>250ML</FilterSizeName>
                <FilterSizeName>100ML</FilterSizeName>
                <FilterSizeName>M???U D??NG TH??? 10ML</FilterSizeName>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
          <DescDetail>
            <Title style={{ color: "black", fontSize: 18, fontWeight: "550" }}>
              M?? t???
            </Title>
            <Description>
              N?????c Hoa Nam Armaf Club De Nuit Intense For Men Parfume Limited
              EDP 105ml l?? chai n?????c hoa nam cao c???p m???t m??i h????ng ?????n t??? Armaf.
              V???i phi??n b???n ?????c bi???t gi???i h???n Club De Nuit Intense Man Limited
              Edition EDP n??y c???m gi??c chua c???a m??i chanh cam khi l???n ?????u x???t
              kh??ng c??n n???a m?? th??y v??o ???? l?? nhi???u h????ng d???a h??n t???o n??n m??i
              h????ng ???????c m???m m???i h??n. V??? thi???t k??? h???p c???a b???n N?????c Hoa Armaf
              Club De Nuit Intense For Men Parfume Limited 105ml c??ng ?????c bi???t
              ?????p v?? sang tr???ng h??n v???i thi???t k??? n?? vi???n. B??n trong l?? h???p c???ng
              ph??? nhung sang tr???ng v?? c?? k??m th?? c???m ??n ?????c bi???t t??? nh?? s???n
              xu???t.
            </Description>
          </DescDetail>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
