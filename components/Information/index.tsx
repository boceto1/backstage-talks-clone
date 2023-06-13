import React from 'react';
import Image from 'next/image';
import { styled } from 'styled-components';

interface IInformation {
  items: {
    id: string;
    title: string;
  }[];
}

const Information: React.FC<IInformation> = ({ items: issues }) => {
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
        <DescriptionText>
          Backstage Talks is a magazine of casual, but in depth dialogues on
          design and business. Our decisions shape and influence this complex
          world—to have a chance to make the right ones, we need to talk.
        </DescriptionText>
        {/* Here is a link here */}
        <Copyright>
          © 2023 <CopyrightLink href="#">Published by Büro Milk</CopyrightLink>
        </Copyright>
        {/* Here is a link here */}
        <PolicyLink href="#">Privacy Policy</PolicyLink>
      </DescriptionWrapper>
      <CatalogMenu>
        <MenuContainer>
          {issues.map((issue) => (
            <MenuItem key={issue.id}>
              <a href={`#${issue.id}`}>{issue.title}</a>
            </MenuItem>
          ))}
        </MenuContainer>
      </CatalogMenu>
    </Container>
  );
};

export default Information;

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

const DescriptionText = styled.p`
  color: #251d20;
  font-size: 18px;
  font-weight: bold;
  line-height: 25px;
  margin-bottom: 20.21px;
`;

const Copyright = styled.p`
  font-size: 12px;
  font-weight: normal;
  margin-bottom: 40.42px;
`;

const CopyrightLink = styled.a`
  text-decoration: underline;
`;

const PolicyLink = styled.a`
  color: #251d20;
  text-decoration: underline;
  font-size: 18px;
  font-weight: bold;
  line-height: 25px;
`;

const Email = styled.p`
  padding-top: 20px;
  position: fixed;
  right: 15px;
  top: 0;
  color: #251d20;
  font-size: 18px;
  font-weight: bold;
  line-height: 25px;
`;

const CatalogMenu = styled.div`
  padding-bottom: 20px;
  position: fixed;
  right: 15px;
  bottom: 0;
  width: 25%;
`;

const MenuContainer = styled.ul`
  text-align: right;
  z-index: 3;
  list-style: none;
  font-size: 18px;
  line-height: 1.6;
`;

const MenuItem = styled.li`
  font-size: 18px;
  transition: font-size 100ms ease-out;
  &:hover {
    font-size: 22px;
    text-shadow: 5px 5px 13px white;
  }
`;
