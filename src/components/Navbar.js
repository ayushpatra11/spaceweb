import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {animateScroll as scroll} from 'react-scroll';
import { NavHashLink } from 'react-router-hash-link';

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: transparent;
    height: 80px;
    
`;

const RightContainer = styled.div`
    align-content: end;
    display: flex;
`;

const NavbarBrand = styled.h1`
    cursor: pointer;
    color: white;
    margin: 20px;
    font-size: 2.5rem;
    align-content: start;
    @media screen and (max-width: 1024px){
        font-size: 2rem;
        align-content: center;
    }
`;

const NavbarIcon = styled.div`
    cursor: pointer;
    display: none;
    font-size: 2rem;
    padding: 20px;
    @media screen and (max-width: 1024px){
        display: block;
        color: white;
    }
`;

const NavLinks = styled(NavHashLink)`
    text-decoration: none;
    display:block;
    font-size: 1.8rem;
    color: white;
    padding: 10px;
    margin: 10px;
    @media screen and (max-width: 1024px){
        fonr-size: 1.6rem;
        text-align: center;
        color: black;
    }

`;



const NavlinkContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media screen and (max-width: 1024px){
        background: white;
        opacity: 0.8;
        display: flex;
        flex-direction: column;
        width: 60%;
        height: 70vh;
        position: absolute;
        top: ${props => props.open? "88px": "-150%"};
        right: 8px;
        transition: all 0.5s ease;
    }
`;


function Navbar() {
    const [open, setOpen]= useState(false);

    const handleNavbar = ()=>{
        setOpen(false);
    }

    window.addEventListener('scroll', handleNavbar);


    const toggleHome= () =>{
        scroll.scrollToTop();
      }
      
      const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
      }

    return (
        <div>
            <NavbarContainer>
                <NavbarBrand onClick={()=>{
                    toggleHome();
                    handleNavbar();
                }}>
                    SpaceWeb
                </NavbarBrand>
                <RightContainer>
                    <NavlinkContainer open={open}>
                        <NavLinks to='/#landing' className='nav-links' 
                        smooth scroll={el => scrollWithOffset(el)} 
                        >
                        One
                        </NavLinks>
                        <NavLinks to='/#landing' className='nav-links' 
                        smooth scroll={el => scrollWithOffset(el)}
                        >
                            Two
                        </NavLinks>
                        <NavLinks to='/#landing' className='nav-links' 
                        smooth scroll={el => scrollWithOffset(el)}
                        >
                            Three
                        </NavLinks>
                        <NavLinks to='/#landing' className='nav-links' 
                        smooth scroll={el => scrollWithOffset(el)}
                        >
                            Four
                        </NavLinks>
                    </NavlinkContainer>
                    
                </RightContainer>
                <NavbarIcon onClick={()=>{
                    setOpen(!open);
                }}>
                {open?
                    <i class="fas fa-times"></i>
                : 
                <i class="fas fa-chevron-circle-down"></i>
                }
                </NavbarIcon>
            </NavbarContainer>
        </div>
    )
}


export default Navbar
