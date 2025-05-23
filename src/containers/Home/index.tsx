import { Row, Col, Typography } from "antd";
import { GemCard, GemInfo, mockData, SectionHeader } from "../../utils/helpers";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  CarOutlined,
  CheckCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import {
  BenefitCard,
  HeroContent,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
  Section,
  ShopNowButton,
  ShowMoreButton,
  SinceText,
  StyledIcon,
  StyledText,
} from "./styles";

const { Title, Paragraph } = Typography;

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 },
};

const HomePage = () => {
  const navigate = useNavigate();
  const handleCardClick = (gemName: string) => {
    navigate(`/shop/${gemName.toLowerCase()}`);
  };

  return (
    <>
      <motion.div {...fadeInUp}>
        <HeroSection>
          <HeroContent>
            <HeroTitle>GEMS VALLEY</HeroTitle>
            <HeroSubtitle>Find the perfect stone, </HeroSubtitle>
            <HeroSubtitle>
              loose gemstones of all colors and shapes.
            </HeroSubtitle>
            <ShopNowButton onClick={() => navigate("/shop")}>Shop Now</ShopNowButton>
          </HeroContent>
        </HeroSection>
      </motion.div>

      <Section>
        <SectionHeader level={2}>Featured Gems</SectionHeader>
        <Row gutter={[24, 24]} justify="center">
          {mockData.slice(0, 4).map(({ name, icon, variations }, idx) => {
            const firstVariation = variations[0];
            return (
              <Col key={idx} xs={24} sm={12} md={6}>
                <GemCard
                  hoverable
                  cover={<img src={icon} alt={name} />}
                  onClick={() => handleCardClick(name)}
                />
                <GemInfo>
                  <h2>{name}</h2>
                </GemInfo>
              </Col>
            );
          })}
        </Row>
        <ShowMoreButton onClick={() => navigate("/shop")}>
          Show More
        </ShowMoreButton>
      </Section>

      <motion.div {...fadeInUp}>
        <Section>
          <SectionHeader>GEMS VALLEY INTRODUCTION</SectionHeader>
          <Paragraph
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              textAlign: "center",
              color: "white",
              fontSize: "15px",
            }}
          >
            Discover the beauty and rarity of our carefully curated selection of
            exquisite loose gemstones. Each gemstone is handpicked for its
            quality and brilliance, perfect for your unique jewelry.
          </Paragraph>
          <SinceText>Since 2016</SinceText>
        </Section>
      </motion.div>

      <motion.div {...fadeInUp}>
        <Section>
          <SectionHeader level={2}>Why Shop With Us</SectionHeader>
          <Row gutter={[24, 24]} justify="center">
            <Col xs={24} sm={12} md={8}>
              <BenefitCard>
                <StyledIcon as={CarOutlined} />
                <Title level={4}>Free Shipping</Title>
                <StyledText>
                  Worldwide FedEx/UPS shipping with tracking included.
                </StyledText>
              </BenefitCard>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <BenefitCard>
                <StyledIcon as={CheckCircleOutlined} />
                <Title level={4}>Certified Quality</Title>
                <StyledText>
                  All stones are 100% natural and lab-certified gemstones.
                </StyledText>
              </BenefitCard>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <BenefitCard>
                <StyledIcon as={SyncOutlined} />
                <Title level={4}>Easy Returns</Title>
                <StyledText>
                  14-day return policy with responsive support team.
                </StyledText>
              </BenefitCard>
            </Col>
          </Row>
        </Section>
      </motion.div>
    </>
  );
};

export default HomePage;
