import React from 'react'
import { FooterContainer, FooterLink, FooterLinkContainer, FooterLinkItem, FooterLinkTitle, FooterLinkWrap, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinkWrap>
                        <FooterLinkItem>
                            <FooterLinkTitle>
                                About Us
                            </FooterLinkTitle>
                            <FooterLink to='/'>
                                How it works
                            </FooterLink>
                            <FooterLink to='/'>
                                Testimonials
                            </FooterLink>
                            <FooterLink to='/'>
                                Careers
                            </FooterLink>
                            <FooterLink to='/'>
                                Investors
                            </FooterLink>
                            <FooterLink to='/'>
                                Terms of Service
                            </FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>
                                Videos
                            </FooterLinkTitle>
                            <FooterLink to='/'>
                                Submit Video
                            </FooterLink>
                            <FooterLink to='/'>
                                Ambassadors
                            </FooterLink>
                            <FooterLink to='/'>
                                Agency
                            </FooterLink>
                            <FooterLink to='/'>
                                Influencer
                            </FooterLink>
                        </FooterLinkItem>
                    </FooterLinkWrap>
                    <FooterLinkWrap>
                        <FooterLinkItem>
                            <FooterLinkTitle>
                                Contact Us
                            </FooterLinkTitle>
                            <FooterLink to='/'>
                                Contact
                            </FooterLink>
                            <FooterLink to='/'>
                                Support
                            </FooterLink>
                            <FooterLink to='/'>
                                Careers
                            </FooterLink>
                            <FooterLink to='/'>
                                Destinations
                            </FooterLink>
                            <FooterLink to='/'>
                                Sponsorship
                            </FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>
                                Social Media
                            </FooterLinkTitle>
                            <FooterLink to='/'>
                                Instagram
                            </FooterLink>
                            <FooterLink to='/'>
                                Facebook
                            </FooterLink>
                            <FooterLink to='/'>
                                Youtube
                            </FooterLink>
                            <FooterLink to='/'>
                                Twitter
                            </FooterLink>
                        </FooterLinkItem>
                    </FooterLinkWrap>
                </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            dolla
                        </SocialLogo>
                        <WebsiteRights>dolla © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blanc' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blanc' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blanc' aria-label='Youtube'>
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blanc' aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blanc' aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
