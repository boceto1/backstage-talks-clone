import React from 'react';
import { styled } from 'styled-components';
import CatalogItem, { ICatalogItem } from '../CatalogItem';

interface ICatalog {
  items: ICatalogItem[];
}

const Catalog: React.FC<ICatalog> = ({ items }) => {
  return (
    <Wrapper>
      {items.map(({ id, title, background, image }) => (
        <CatalogItem
          key={id}
          id={id}
          title={title}
          background={background}
          image={image}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  transition: all 700ms ease 0s;
  transform: translate3d(0px, 0px, 0px);
`;

export default Catalog;
