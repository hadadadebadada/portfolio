import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color: ${props => props.theme.pageBackground};
  padding: 4rem 0 2rem 0;
  display: flex;
  width:100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: ${props => props.theme.tagLineColor};
`;

export const FooterSubHeading = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
  color: ${props => props.theme.tagLineColor};

  
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
  color: ${props => props.theme.tagLineColor};

`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.tagLineColor};

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
    color: ${props => props.theme.tagLineColor};

  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;
  color: ${props => props.theme.tagLineColor};


  &::placeholder {
    color: ${props => props.theme.tagLineColor};

  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
    color: ${props => props.theme.tagLineColor};

  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.tagLineColor};


  @media screen and (max-width: 820px) {
    padding-top: 32px;
    color: ${props => props.theme.tagLineColor};

  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  color: ${props => props.theme.tagLineColor};


  @media screen and (max-width: 820px) {
    flex-direction: column;
    color: ${props => props.theme.tagLineColor};

  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 290px;
  box-sizing: border-box;
  color: ${props => props.theme.tagLineColor};

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
    color: ${props => props.theme.tagLineColor};

  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
  color: ${props => props.theme.tagLineColor};

`;

export const FooterLink = styled(Link)`
    color: ${props => props.theme.tagLineColor};

  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
    color: ${props => props.theme.tagLineColor};

  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  color: ${props => props.theme.tagLineColor};

`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  color: ${props => props.theme.tagLineColor};


  @media screen and (max-width: 820px) {
    flex-direction: column;
    color: ${props => props.theme.tagLineColor};

  }
`;

export const SocialLogo = styled(Link)`
  color: ${props => props.theme.tagLineColor};

  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
    color: ${props => props.theme.tagLineColor};

  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  color: ${props => props.theme.tagLineColor};

`;

export const SocialIconLink = styled.a`
    color: ${props => props.theme.tagLineColor};

  font-size: 24px;
`;
