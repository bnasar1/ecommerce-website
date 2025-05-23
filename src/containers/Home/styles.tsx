<<<<<<< HEAD
import { colors } from "../../utils/colors";
import { Button, Card, Layout, Typography } from "antd";
import styled from "styled-components";

const { Text, Title, Paragraph } = Typography;
const { Content } = Layout;
const { white, midNightBlue, charcoalBlue, GOLD } = colors;

export const HeroSection = styled(Content)`
  position: relative;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url("/images/hero_background.png") center/cover no-repeat;
    z-index: 0;
    transform: scale(1.1);
    transition: transform 5s ease;
  }

  &:hover::before {
    transform: scale(1);
  }
`;

export const HeroContent = styled(Text)`
  z-index: 1;
`;

export const HeroTitle = styled(Title)`
  && {
    font-size: 3rem;
    font-family: "Playfair Display", serif;
    font-weight: bold;
    color: ${white};
    margin: 0;
  }
`;

export const HeroSubtitle = styled(Paragraph)`
  font-size: 1.2rem;
  margin: 6px;
  line-height: 0.5;
  font-family: "Open Sans", sans-serif;
  color: ${white};
`;

export const ShopNowButton = styled(Button)`
  background-color: ${charcoalBlue} !important;
  color: ${white} !important;
  padding: 12px 24px !important;
  border: none;
  font-size: 1.1rem;
  border-radius: 6px;
  &:hover,
  &:focus {
    background-color: #876a48 !important;
    color: ${charcoalBlue} !important;
  }
`;

export const Section = styled.section`
  padding: 60px 20px;
`;

export const ShowMoreButton = styled(Button)`
  background-color: ${GOLD};
  font-size: 1rem;
  border: 2px solid ${white};
  margin-top: 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${GOLD} !important;
    color: ${white} !important;
  }
`;

export const SinceText = styled(Text)`
  font-size: 1rem;
  color: #888;
  text-align: center;
  margin-top: 10px;
  font-style: italic;
  letter-spacing: 0.5px;
  display: block;
`;

export const BenefitCard = styled(Card)`
  background: ${midNightBlue};
  padding: 20px;
  border: 1px solid ${GOLD};
  box-shadow: 0 0 20px rgba(201, 165, 126, 0.2); /* gives soft glow */
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 25px rgba(201, 165, 126, 0.4);
  }

  h4.ant-typography {
    color: ${GOLD};
  }
`;

export const StyledIcon = styled.span`
  font-size: 2rem;
  margin-bottom: 15px;
  color: white;
`;

export const StyledText = styled(Text)`
  color: ${white};
`;
=======
import { colors } from "../../utils/colors";
import { Button, Card, Layout, Typography } from "antd";
import styled from "styled-components";

const { Text, Title, Paragraph } = Typography;
const { Content } = Layout;
const { white, midNightBlue, charcoalBlue, GOLD } = colors;

export const HeroSection = styled(Content)`
  position: relative;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url("/images/hero_background.png") center/cover no-repeat;
    z-index: 0;
    transform: scale(1.1);
    transition: transform 5s ease;
  }

  &:hover::before {
    transform: scale(1);
  }
`;

export const HeroContent = styled(Text)`
  z-index: 1;
`;

export const HeroTitle = styled(Title)`
  && {
    font-size: 3rem;
    font-family: "Playfair Display", serif;
    font-weight: bold;
    color: ${white};
    margin: 0;
  }
`;

export const HeroSubtitle = styled(Paragraph)`
  font-size: 1.2rem;
  margin: 6px;
  line-height: 0.5;
  font-family: "Open Sans", sans-serif;
  color: ${white};
`;

export const ShopNowButton = styled(Button)`
  background-color: ${charcoalBlue} !important;
  color: ${white} !important;
  padding: 12px 24px !important;
  border: none;
  font-size: 1.1rem;
  border-radius: 6px;
  &:hover,
  &:focus {
    background-color: #876a48 !important;
    color: ${charcoalBlue} !important;
  }
`;

export const Section = styled.section`
  padding: 60px 20px;
`;

export const ShowMoreButton = styled(Button)`
  background-color: ${GOLD};
  font-size: 1rem;
  border: 2px solid ${white};
  margin-top: 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${GOLD} !important;
    color: ${white} !important;
  }
`;

export const SinceText = styled(Text)`
  font-size: 1rem;
  color: #888;
  text-align: center;
  margin-top: 10px;
  font-style: italic;
  letter-spacing: 0.5px;
  display: block;
`;

export const BenefitCard = styled(Card)`
  background: ${midNightBlue};
  padding: 20px;
  border: 1px solid ${GOLD};
  box-shadow: 0 0 20px rgba(201, 165, 126, 0.2); /* gives soft glow */
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 25px rgba(201, 165, 126, 0.4);
  }

  h4.ant-typography {
    color: ${GOLD};
  }
`;

export const StyledIcon = styled.span`
  font-size: 2rem;
  margin-bottom: 15px;
  color: white;
`;

export const StyledText = styled(Text)`
  color: ${white};
`;
>>>>>>> 194b4436d8ac3dfa1e5d02a46142ce498007e666
