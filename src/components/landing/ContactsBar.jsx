import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';


const ContactsBarSection = styled.section`
    padding: 5vh 3vw;
    background: #222640;
    color: white;
    img {
      max-height: 64px;
      margin-right: 8px;
    }
    a {
      &:hover {
         color: #fd7e14!important;
      }
    }
    .social-bar {
        img {
          max-height: 45px;
        }
    }
`;

const FooterLinksBar = styled.nav`
    a {
       font-size: 13px;
       color: #eee;
       margin-right: 8px;
       margin-bottom: 5px;
       &:hover {
         color: #fd7e14;
         text-decoration: none;
       }
    }
`

const LandingContactsBar = () => {

    return <ContactsBarSection>
        <div className="row mx-0">
            <Fade up>
                <div className="col-md-4 p-2 d-flex align-items-center justify-content-md-center">
                    <img alt="email" src={require('../../assets/images/icons/email.png')} />
                    <div>
                        <div>FOR GENERAL ENQUIRES</div>
                        <a href="mailto:inctfj@am.amrita.edu" target="_blank" className="h5 mb-0 plain-link">inctfj@am.amrita.edu</a>
                    </div>
                </div>
            </Fade>
            <Fade down>
                <div className="col-md-4 p-2 d-flex align-items-center justify-content-md-center">
                    <img alt="discord" src={require('../../assets/images/logos/discord.png')} />
                    <div>
                        <div>JOIN DISCORD COMMUNITY</div>
                        <a href="https://discord.gg/rqF3ZkeTrY" rel="noopener noreferrer" target="_blank" className="h5 mb-0 plain-link">discord.gg/rqF3ZkeTrY</a>
                    </div>
                </div>
            </Fade>
            <Fade up>
                <div className="col-md-4 p-2 mb-2 d-flex align-items-center justify-content-md-center">
                    {/*<img src={require('../../assets/images/icons/telephone.png')} />*/}
                    {/*<div>*/}
                    {/*    <div>ANYTHING ELSE? RING US UP.</div>*/}
                    {/*    <h5>0476 280 4525</h5>*/}
                    {/*</div>*/}
                </div>
            </Fade>
            <div className="col-md-8 text-center text-md-left h-100 d-flex align-items-center pt-4 px-2">
                <div>
                    <div>&copy; Amrita InCTF 2016-2021. All Rights Reserved.</div>
                    <FooterLinksBar>
                        <a href="/branding">Brand Kit</a>
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/rules">Rules</a>
                    </FooterLinksBar>
                </div>
            </div>
            <div className="social-bar col-md-4 d-flex align-items-center justify-content-md-end justify-content-center p-2">
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/juniorinctf/"><img alt="instagram" src={require('../../assets/images/icons/instagram.png')} /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/InCTFj"><img alt="facebook" src={require('../../assets/images/icons/facebook.png')} /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/InCTFj/"><img alt="twitter" src={require('../../assets/images/icons/twitter.png')} /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/InCTFj"><img alt="youtube" src={require('../../assets/images/icons/play_button.png')} /></a>
            </div>
        </div>
    </ContactsBarSection>

};

export default LandingContactsBar;
