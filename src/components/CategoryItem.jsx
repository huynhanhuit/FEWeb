import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 1px;
  height: 20vh;
  position: relative;
  min-width: 355px;
  height: 105px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
    </Container>
  );
};

export default CategoryItem;
