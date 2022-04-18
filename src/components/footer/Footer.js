import React from 'react';
import {
  FaFacebook,

  FaLinkedin,
  FaGithubSquare

} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,

  FooterSubHeading,

  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,

  WebsiteRights,
  SocialIconLink
} from './Footer.elements';

function Footer() {
  return (
    <div>



         <br></br>
        <br></br>
     
    
    <FooterContainer>
      
      <FooterSubscription>
        <FooterSubHeading>
          {/*  <FooterLink to='/contact'> Falls Sie Fragen haben, einfach hier klicken und fragen</FooterLink>  */}
        </FooterSubHeading>


{/*         <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form> */}


      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Über mich</FooterLinkTitle>
            
            {/* <FooterLink to='/sign-up'>How it works</FooterLink> */}

            <FooterLink to='/'>Artur Pfeifer</FooterLink>
            <FooterLink to='/'>Student & Entwickler</FooterLink>
            <FooterLink to='/'>Junior Projektmanager</FooterLink>
            
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Kontakt</FooterLinkTitle>
            <FooterLink to='/'>0177/ 2266949</FooterLink>
            <FooterLink to='/'>artur_pfeifer1@gmx.de</FooterLink>

            <FooterLink to='/'>Sedanstraße 27</FooterLink>
            <FooterLink to='/'>49076 Osnabrück</FooterLink>
    
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
{/*           <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to='/'>Submit Video</FooterLink>
            <FooterLink to='/'>Ambassadors</FooterLink>
            <FooterLink to='/'>Agency</FooterLink>
            <FooterLink to='/'>Influencer</FooterLink>
          </FooterLinkItems> */}
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <SocialIconLink href={
                'https://github.com/hadadadebadada/'
              }
              rel='noopener noreferrer'
              target='_blank' aria-label='Github' 
              >
              <FaGithubSquare />
              Github
            </SocialIconLink>
            <SocialIconLink  href={
                'https://www.linkedin.com/in/artur-pfeifer-8541931b5/'
              }
              rel='noopener noreferrer'
              target='_blank' aria-label='LinkedIn'>
              <FaLinkedin /> 
               LinkedIn
            </SocialIconLink>

            <SocialIconLink  href={
                '//www.facebook.com/FreshVWater'
              }
              rel='noopener noreferrer'
              
              aria-label='Facebook' target='_blank'>
              <FaFacebook />
               Facebook
            </SocialIconLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
{/*           <SocialLogo to='/'>
            <SocialIcon />
            LOGO
          </SocialLogo> */}
          <WebsiteRights>  <FooterLink to='/impressum'>Impressum</FooterLink> <FooterLink to='/'>Datenschutz</FooterLink> © 2022 </WebsiteRights>
{/*           <SocialIcons>
            <SocialIconLink  href={
                '//www.facebook.com/FreshVWater'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Facebook' target='_blank'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href={
                'https://www.instagram.com/pffrartr/?hl=en'
              }
              rel='noopener noreferrer'
             
              target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href={
                'https://github.com/hadadadebadada/'
              }
              rel='noopener noreferrer'
              target='_blank' aria-label='Github' 
              >
              <FaGithubSquare />
            </SocialIconLink>
            <SocialIconLink  href={
                'https://www.linkedin.com/in/artur-pfeifer-8541931b5/'
              }
              rel='noopener noreferrer'
              target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons> */}

        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
    </div>
  );
}

export default Footer;