import React from 'react';
import { styled } from 'styled-components';
import CatalogItem, { ICatalogItem } from '../CatalogItem';
import useScrollSpy from '../../../hooks/useScrollSpy';

interface ICatalog {
  items: ICatalogItem[];
}

const Catalog: React.FC<ICatalog> = ({ items }) => {
  const wrapperRef = React.useRef(null);

  const activeSection = useScrollSpy(wrapperRef);

  console.log(activeSection);

  return (
    <Wrapper ref={wrapperRef}>
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

const Wrapper = styled.div``;

export default Catalog;
