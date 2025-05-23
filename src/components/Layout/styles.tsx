import { Col, Input } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../utils/colors";

const { GOLD, WhatsappGreen, OxfordBlue, white } = colors;
// WhatsApp Floating Button
export const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: transparent;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 14px 16px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  z-index: 1000;
  transition: 0.3s;

  &:hover {
    background-color: ${WhatsappGreen};
    transform: scale(1.1);
  }

  img {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 1768px) {
    padding: 10px 12px;
    font-size: 16px;
    bottom: 15px;
    right: 15px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  a {
    font-size: 24px;
    color: white;
    transition: transform 0.3s ease-in-out;

    &:hover {
      color: ${GOLD};
      transform: scale(1.2);
    }
  }
`;

export const Footer = styled.footer`
  background: ${OxfordBlue};
  color: white;
  padding: 40px 20px;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    display: block;
    height: 2px;
    width: 100%;
    background-color: ${GOLD};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
`;

export const FooterCol = styled(Col)`
  margin-bottom: 20px;
`;

export const HeaderBar = styled.div`
  background-color: ${OxfordBlue};
  color: ${white};
  height: 64px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const NavGroup = styled.div<{ isOpen?: boolean }>`
  display: flex;
  gap: 32px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: ${OxfordBlue};
    position: absolute;
    top: 64px;
    right: 0;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    padding: 16px;
    z-index: 999;

    input {
      width: 100%;
    }
  }
`;

export const MobileMenuToggle = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${white};

  @media (max-width: 768px) {
    display: block;
  }
`;

export const LogoText = styled(Link)`
  font-family: "Playfair Display", serif;
  font-size: 1.8rem;
  color: ${GOLD};
  font-weight: bold;
  text-decoration: none;
`;

export const NavLinkStyled = styled(Link)`
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  color: ${white};
  text-decoration: none;
  position: relative;
  padding-bottom: 3px;
  transition: color 0.3s ease;

  &:hover {
    color: ${GOLD};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${white};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

// export const SearchInput = styled(Input.Search)`
//   && {
//     background-color: transparent;
//     border: 1px solid ${GOLD};
//     border-radius: 4px;
//     width: 220px;

//     .ant-input {
//       background-color: transparent !important;
//       color: white !important;
//       border: none !important;
//       box-shadow: none !important;
//       caret-color: ${GOLD} !important;
//     }

//     .ant-input::placeholder {
//       color: #ccc !important;
//     }

//     .ant-input-search-button {
//       background-color: transparent !important;
//       color: ${GOLD} !important;
//       border: none !important;

//       &:hover {
//         color: #f1c27d !important;
//       }
//     }

//     .ant-input-affix-wrapper {
//       background-color: transparent !important;
//       border: none !important;
//       box-shadow: none !important;
//     }
//   }
// `;
