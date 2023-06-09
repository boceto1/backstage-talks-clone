import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import CatalogItem, { ICatalogItem } from '../CatalogItem';
import useTrackActiveSection from '../../../hooks/useTrackActiveSection';
import { getClientURL } from '../../utils';
interface ICatalog {
  items: Omit<ICatalogItem, 'isActive'>[];
}

const Catalog: React.FC<ICatalog> = ({ items }) => {
  const wrapperRef = React.useRef(null);
  const [sectionId, setSectionId] = useState(items[0].id);

  const activeSectionId = useTrackActiveSection(wrapperRef);
  const clientURL = getClientURL()?.split('#')[1];

  useEffect(() => {
    setSectionId(() => activeSectionId || clientURL || sectionId);
  }, [activeSectionId, clientURL]);

  const currentBackgroundColor = items.find(
    (item) => item.id === sectionId
  )?.background;

  return (
    <Wrapper ref={wrapperRef}>
      {items.map(({ id, title, image }) => (
        <CatalogItem
          key={id}
          id={id}
          title={title}
          background={currentBackgroundColor}
          image={image}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Catalog;
