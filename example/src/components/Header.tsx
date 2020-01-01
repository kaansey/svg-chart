import React from 'react';
import styled from 'styled-components';
import logo from '../assets/statistics.svg';

const HeaderWrapper = styled.div`
  width: 100%;
  padding: 8px;
  border-bottom: 1px solid #edf2f7;
`;

const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 840px;
  margin: auto;
  height: 35px;
`;

const TitleDiv = styled.div`
  font-size: 16px;
`;

const LinkDiv = styled.div`
  color: #718096;
`;

const LinkA = styled.a`
  margin: 0 10px;
`;

const LogoImg = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Header: React.SFC = () => {
  return (
    <HeaderWrapper>
      <ContentDiv>
        <TitleDiv>
          <LogoImg src={logo} />
          SVG Charts React
        </TitleDiv>
        <LinkDiv>
          <LinkA href="https://github.com/kaansey/svg-charts-react">Github</LinkA>
          <LinkA href="https://www.npmjs.com/package/svg-charts-react">Npm</LinkA>
        </LinkDiv>
      </ContentDiv>
    </HeaderWrapper>
  );
};

export default React.memo(Header);