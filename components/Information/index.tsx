import React from 'react';
import Image from 'next/image';
import { styled } from 'styled-components';

const Container = styled.div`
  position: absolute;
  z-index: 2;
`;

const Logo = styled.div`
  padding-top: 20px;
  position: fixed;
  left: 15px;
  top: 0;
`;

const DescriptionWrapper = styled.section`
  padding-bottom: 20px;
  position: fixed;
  left: 15px;
  bottom: 0;
  width: 25%;
`;

const Email = styled.p`
  padding-top: 20px;
  position: fixed;
  right: 15px;
  top: 0;
`;

const CatalogMenu = styled.div`
  padding-bottom: 20px;
  position: fixed;
  right: 15px;
  bottom: 0;
  width: 25%;
`;

const Information: React.FC = () => {
  return (
    <Container>
      <Logo>
        <Image
          src="/logo.png"
          alt="Backstage Tals Logo"
          width={260}
          height={29}
        />
      </Logo>
      <Email>info@backstagetalks.com</Email>
      <DescriptionWrapper>
        <p>
          Backstage Talks is a magazine of casual, but in depth dialogues on
          design and business. Our decisions shape and influence this complex
          world—to have a chance to make the right ones, we need to talk.
        </p>
        {/* Here is a link here */}
        <p>© 2023 Published by Büro Milk</p>
        {/* Here is a link here */}
        <p>Privacy Policy</p>
      </DescriptionWrapper>
      <CatalogMenu>
      <ul>
          <li><a href='#issue-7'>Issue # 7</a></li>
          <li><a href='#issue-6'>Issue # 6</a></li>
          <li><a href='#issue-5'>Issue # 5</a></li>
          <li><a href='#issue-4'>Issue # 4</a></li>
          <li><a href='#issue-3'>Issue # 3</a></li>
          <li><a href='#issue-2'>Issue # 2</a></li>
          <li><a href='#issue-1'>Issue # 1</a></li>
        </ul>
      </CatalogMenu>
    </Container>
  );
};

export default Information;
