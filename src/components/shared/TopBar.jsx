import React, {useState, useEffect, useRef} from 'react';
import styled from "@emotion/styled";
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Fade from 'react-reveal/Fade';
import Modal from "react-modal";

import SideBar from "./SideBar";
import {setUserInfo, useAuthState} from "../../states";

const TopbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 6000;
  box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.35);
  background: linear-gradient(to right, #263238, #212121);
  border-bottom: 2px solid #FF6F00;
  nav {
       a {
          font-size: 17px;
          color: #AAA;
          padding: 8px 12px;
          text-decoration: none!important;
          &:hover {
            color: #fd7e14;
          }
       }
    }
  .logo{
    max-height: 56px;
  }
  img {
    max-height: 32px;
    max-width: 100%;
  }
  button {
      border: none;
      padding: 0.5rem;
      border-radius: 5px;
      background: none;
      &:hover, &:focus {
        background: #E65100!important;
        outline: none!important;
      }
  }
  padding: 0.35rem;
`;


const TopbarInfoCard = styled.div`
    color: white;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    h5 {
        font-size: 18px;
        margin: 0;
        color: #fd7e14;
    }
    button {
      margin-left: 8px;
      display: block;
      background: #F13F17;
      text-decoration: none!important;
      color: white!important;
      padding: 1rem;
      font-weight: 600;
      text-transform: uppercase;
      border-radius: 10px;
    }
`;

const CloseButton = styled.button`
   background: none!important; top: 1rem; right: 1rem; position: absolute; padding: 0!important;
   img { width: 32px; }
`;

const TopBar = ({ darkenOnSidebar = false, UTMSource = null }) => {

    const [showMenu, setShowMenu] = useState(false);
    const [showRegCard, setShowRegCard] = useState(false);
    const [hasLoaded, setLoaded] = useState(false);
    const [isLoggedIn] = useAuthState('isLoggedIn');

    useEffect(() => { setLoaded(true); }, []);

    const topbarRef = useRef()

    const onLogOut = () => {
        setUserInfo(null);
    };

    const onOpen = () => {
        const targetElement = document.querySelector(".app");
        disableBodyScroll(targetElement);
        setShowMenu(true);
    };

    const onClose = () => {
        setShowMenu(false);
        clearAllBodyScrollLocks();
    };
    //
    // const [scroll, setScroll] = useState(0)
    // const scrollListener = (e) => {
    //     const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    //     const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //
    //     const scrolled = winScroll / height;
    //     setScroll(scrolled);
    // }
    //
    // useEffect(() => {
    //     window.addEventListener('scroll', scrollListener)
    // }, [])

    return <div>
        <TopbarContainer ref={topbarRef}>
            <div className="topbar-container">
                <div className="container px-0">
                    <div className="row w-100 mx-0">
                        <div className="col-4 col-md-3 col-lg-2 text-md-center d-flex align-items-center justify-content-md-end justify-content-center px-2">
                            <a href="/">
                                <img className="logo" src={require('../../assets/images/logos/inctf_light.png')} alt="InCTFj" />
                            </a>
                        </div>
                        <div className="col-md-9 col-lg-10 px-1 d-none d-md-flex align-items-center">
                            <div className="row mx-0 w-100">
                                <div className="col-md-6 d-flex align-items-center px-1">
                                    <nav>
                                        <Fade delay={0}>
                                            <a href="/about">About</a>
                                        </Fade>
                                        <Fade delay={200}>
                                            <a href="/stats">Stats & Rankings</a>
                                        </Fade>
                                        <Fade delay={750}>
                                            <a href="/faq">FAQ</a>
                                        </Fade>
                                    </nav>
                                </div>
                                <div className="col-md-6 d-flex justify-content-end text-right px-1">
                                    <TopbarInfoCard>
                                        <div className="mr-2">
                                            <div>India's First & Only CTF Hacking Contest</div>
                                            <h5>Exclusively for School Students</h5>
                                        </div>
                                        <button onClick={() => setShowRegCard(true)}>Register</button>
                                    </TopbarInfoCard>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 d-flex d-md-none align-items-center justify-content-end px-1">
                            <button onClick={onOpen}>
                                <img alt="menu" src={require('../../assets/images/icons/hamburger.png')} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </TopbarContainer>
        <Modal
            isOpen={showRegCard}
            onRequestClose={() => { clearAllBodyScrollLocks(); setShowRegCard(false); }}
            style={{
                overlay: {
                    zIndex: 9000, background: 'rgba(0,0,0,0.8)',
                    height: '100vh',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                },
                content: {
                    position: 'unset', top: 0, left: 0, right: 0, padding: '15px',
                    border: 'none', background: 'none',  width: '500px', maxWidth: '100vw'
                }
            }}
        >
            <CloseButton
                className="px-4 border-0 rounded"
                onClick={() => { clearAllBodyScrollLocks(); setShowRegCard(false)}}
            >
                <img alt="close" src={require('../../assets/images/icons/close.png')} />
            </CloseButton>
            {showRegCard &&
            <div style={{ background: '#101219' }} className="d-flex p-2 align-items-center justify-content-center">
                <iframe
                    className="border-0"
                    style={{ width: '500px', maxWidth: '100vw', height: '180px', overflow: 'auto' }}
                    src={`https://app.traboda.com/contest/inctfj-21-lr/reg-frame${UTMSource ? `?utm_source=${UTMSource}` : ''}`}
                />
            </div>}
        </Modal>
        {showMenu && <SideBar darkenOnSidebar={darkenOnSidebar} onClose={onClose} isLoggedIn={hasLoaded && isLoggedIn} onLogOut={onLogOut} />}
        <div style={{ height: topbarRef ? topbarRef?.current?.clientHeight : '72px'}} />
    </div>

};

export default TopBar;