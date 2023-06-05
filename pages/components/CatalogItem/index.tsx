import { styled } from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ef5f8d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-bottom: 18px;
`;

const Link = styled.a`
  color: white;
`;

const PreorderText = styled(Link)`
  margin-bottom: 18px;
`;

const SelectStoresText = styled.p`
  margin-bottom: 18px;
`;

const CatalogItem: React.FC = () => {
  return (
    <Wrapper>
      <Image
        src="/catalog/cover_issue_1.png"
        alt="Cover of Issue 1"
        width={420}
        height={531}
      />
      <Title>Issue #7</Title>
      <PreorderText>PRE-ORDER HERE</PreorderText>
      <SelectStoresText>
        or in <Link>selected stores</Link>
      </SelectStoresText>
    </Wrapper>
  );
};

export default CatalogItem;
