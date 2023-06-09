import { styled } from 'styled-components';
import Image from 'next/image';
import { useCallback } from 'react';
import { calculateContrastColor } from 'utils';

export interface ICatalogItem {
  id: string;
  title: string;
  image: string;
  background: string;
  onPreorder?: (id: string) => void;
  onSelectOnStore?: (id: string) => void;
}

const CatalogItem: React.FC<ICatalogItem> = ({
  id,
  title,
  image,
  background,
  onPreorder,
  onSelectOnStore,
}) => {
  const onHandlePreorder = useCallback(() => {
    onPreorder?.(id);
  }, [id]);

  const onSelectedOnStore = useCallback(() => {
    onSelectOnStore?.(id);
  }, [id]);

  return (
    <Wrapper id={id} background={background}>
      <Image src={image} alt={`Cover of ${title}`} width={420} height={531} />
      <Title>{title}</Title>
      <PreorderCTA onClick={onHandlePreorder} background={background}>PRE-ORDER HERE</PreorderCTA>
      <SelectStoresText>
        or in <CTALink onClick={onSelectedOnStore} background={background}>selected stores</CTALink>
      </SelectStoresText>
    </Wrapper>
  );
};

export default CatalogItem;

const Wrapper = styled.div<{ background?: string }>`
  width: 98.9vw;
  height: 100vh;
  background: ${({ background }) => background || 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  scroll-snap-align: start;
  transition: background-color 500ms ease-in;
`;

const Title = styled.h1`
  color: #251d20;
  font-size: 18px;
  font-weight: bold;
  line-height: 25px;
  margin-bottom: 18px;
`;

const CTALink = styled.span<{background: string}>`
  color: ${({ background }) =>calculateContrastColor(background)};
  transition: color 500ms easy-out 100ms;
`;

const PreorderCTA = styled(CTALink)`
  margin-bottom: 18px;
`;

const SelectStoresText = styled.p`
  margin-bottom: 18px;
`;
