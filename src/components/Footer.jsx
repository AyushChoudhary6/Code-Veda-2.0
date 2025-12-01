import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <FooterWrapper>
      <StarField mouseX={mousePosition.x} mouseY={mousePosition.y} />
      <MandalaOverlay />
      
      <FooterContent>
        <LogoSection>
          <Logo>
            <h2>Code<span>Veda</span></h2>
            <Tagline>Where Ancient Wisdom Meets Modern Technology</Tagline>
            <SanskritMotto>
              <div className="sanskrit">प्राचीनज्ञानं नवीनतन्त्रम्</div>
              <div className="translation">"Ancient Wisdom, Modern Technology"</div>
            </SanskritMotto>
          </Logo>
        </LogoSection>

        <LinksContainer>
          <LinkColumn>
            <ColumnTitle>Navigation</ColumnTitle>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/why-code-veda">Why CodeVeda</FooterLink>
            <FooterLink href="/problem-statements">Problem Statements</FooterLink>
            <FooterLink href="/schedule">Schedule</FooterLink>
            <FooterLink href="/prizes">Prizes</FooterLink>
            <FooterLink href="/sponsors">Sponsors</FooterLink>
            <FooterLink href="/team">Team</FooterLink>
          </LinkColumn>

          <LinkColumn>
            <ColumnTitle>Resources</ColumnTitle>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">Code of Conduct</FooterLink>
            <FooterLink href="#">Guidelines</FooterLink>
            <FooterLink href="#">Terms & Conditions</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
          </LinkColumn>

          <LinkColumn>
            <ColumnTitle>Contact</ColumnTitle>
            <ContactInfo>
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <a href="mailto:geekroomadgips@gmail.com">geekroomadgips@gmail.com</a>
            </ContactInfo>
            <ContactInfo>
              <span className="whatsapp-icon">💬</span>
              <a href="https://chat.whatsapp.com/EwGPnsZl0bc1UnjkxojT1Q?mode=hqrt1">WhatsApp Community</a>
            </ContactInfo>
          </LinkColumn>
        </LinksContainer>
      </FooterContent>

      <Divider />

      <BottomSection>
        <SocialIcons>
          <SocialIcon href="https://x.com/GeekRoomADGIPS" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/code_veda" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </SocialIcon>
          <SocialIcon href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </SocialIcon>
          <SocialIcon href="#" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </SocialIcon>
          <SocialIcon href="mailto:geekroomadgips@gmail.com" aria-label="Email">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </SocialIcon>
        </SocialIcons>

        <Copyright>
          © {new Date().getFullYear()} CodeVeda. All rights reserved.
        </Copyright>

        <Attribution>
          Made with <span className="heart">❤️</span> by the CodeVeda Team
        </Attribution>
      </BottomSection>
    </FooterWrapper>
  );
};

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const twinkle = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const glow = keyframes`
  0%, 100% { text-shadow: 0 0 10px rgba(255, 193, 7, 0.5); }
  50% { text-shadow: 0 0 20px rgba(255, 193, 7, 0.8), 0 0 30px rgba(255, 193, 7, 0.6); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const FooterWrapper = styled.footer`
  position: relative;
  background: linear-gradient(135deg, #140724ff 0%, #0f0622 50%, #1a0b2e 100%);
  color: #ffffff;
  padding: 4rem 2rem 2rem;
  overflow: hidden;
  border-top: 2px solid rgba(255, 193, 7, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      #ffc107 20%, 
      #ff9800 40%, 
      #ffc107 60%, 
      #ff9800 80%, 
      transparent 100%
    );
    animation: ${twinkle} 3s ease-in-out infinite;
  }
`;

const StarField = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(2px 2px at 20% 30%, white, transparent),
    radial-gradient(2px 2px at 60% 70%, white, transparent),
    radial-gradient(1px 1px at 50% 50%, white, transparent),
    radial-gradient(1px 1px at 80% 10%, white, transparent),
    radial-gradient(2px 2px at 90% 60%, white, transparent),
    radial-gradient(1px 1px at 33% 80%, white, transparent),
    radial-gradient(1px 1px at 15% 90%, white, transparent),
    radial-gradient(2px 2px at 70% 20%, white, transparent);
  background-size: 200% 200%;
  animation: ${twinkle} 4s ease-in-out infinite;
  opacity: 0.5;
  transform: translate(${props => props.mouseX * 10}px, ${props => props.mouseY * 10}px);
  transition: transform 0.3s ease-out;
`;

const MandalaOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, transparent 30%, rgba(255, 193, 7, 0.05) 50%, transparent 70%);
  border-radius: 50%;
  animation: ${rotate} 60s linear infinite;
  pointer-events: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }

  &::before {
    width: 400px;
    height: 400px;
    border: 2px solid rgba(255, 193, 7, 0.1);
    animation: ${rotate} 40s linear infinite reverse;
  }

  &::after {
    width: 200px;
    height: 200px;
    border: 2px solid rgba(255, 152, 0, 0.1);
    animation: ${rotate} 30s linear infinite;
  }
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  gap: 4rem;
  margin-bottom: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const LogoSection = styled.div`
  animation: ${float} 3s ease-in-out infinite;
`;

const Logo = styled.div`
  h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #ffffff;
    letter-spacing: 2px;

    span {
      color: #ffc107;
      animation: ${glow} 2s ease-in-out infinite;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2.5rem;
    }
  }
`;

const Tagline = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
  font-style: italic;
  max-width: 350px;
  line-height: 1.6;
`;

const SanskritMotto = styled.div`
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: rgba(255, 193, 7, 0.05);
  border-left: 3px solid #ffc107;
  border-radius: 0 8px 8px 0;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 193, 7, 0.1);
    transform: translateX(5px);
  }

  .sanskrit {
    font-size: 1.3rem;
    color: #ffc107;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  .translation {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    font-style: italic;
  }
`;

const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnTitle = styled.h3`
  font-size: 1.3rem;
  color: #ffc107;
  margin-bottom: 1.5rem;
  font-weight: 600;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #ffc107, transparent);
  }
`;

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 0;
  text-decoration: none;
  display: inline-block;
  width: fit-content;

  &::before {
    content: '→';
    position: absolute;
    left: -20px;
    opacity: 0;
    transition: all 0.3s ease;
    color: #ffc107;
  }

  &:hover {
    color: #ffc107;
    padding-left: 20px;
    transform: translateX(5px);

    &::before {
      opacity: 1;
      left: 0;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.8rem;
  font-size: 1rem;

  .icon {
    width: 20px;
    height: 20px;
    color: #ffc107;
  }

  .whatsapp-icon {
    font-size: 1.2rem;
  }

  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ffc107;
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(255, 193, 7, 0.3) 20%, 
    rgba(255, 193, 7, 0.5) 50%, 
    rgba(255, 193, 7, 0.3) 80%, 
    transparent 100%
  );
  margin: 2rem auto;
  max-width: 1400px;
`;

const BottomSection = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const SocialIcon = styled.a`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 193, 7, 0.1);
  border: 2px solid rgba(255, 193, 7, 0.3);
  border-radius: 50%;
  color: #ffc107;
  font-size: 1.3rem;
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  overflow: hidden;

  svg {
    width: 24px;
    height: 24px;
    position: relative;
    z-index: 2;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 193, 7, 0.2);
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
  }

  &:hover {
    border-color: #ffc107;
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 25px rgba(255, 193, 7, 0.3);

    &::before {
      width: 100%;
      height: 100%;
    }
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.95rem;
  text-align: center;
`;

const Attribution = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.95rem;
  text-align: center;

  .heart {
    color: #ff4444;
    animation: ${pulse} 1s ease-in-out infinite;
    display: inline-block;
  }
`;

export default Footer;
