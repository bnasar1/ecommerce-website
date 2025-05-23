import { useState } from "react";
import { ProLayout, PageContainer } from "@ant-design/pro-components";
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
import { Row, Typography } from "antd";
import "antd/dist/reset.css";
import {
  Footer,
  FooterCol,
  HeaderBar,
  LogoText,
  MobileMenuToggle,
  NavGroup,
  NavLinkStyled,
  SocialIcons,
  WhatsAppButton,
} from "./styles";
import { colors } from "../../utils/colors";
import { defaultWhatsApp, getWhatsAppLink } from "../../utils/helpers";

const { Title, Text } = Typography;
const { GOLD } = colors;

const whatsappURL = getWhatsAppLink(
  defaultWhatsApp.phone,
  defaultWhatsApp.message
);

const Layout = ({ children }: any) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <ProLayout
        layout="top"
        fixedHeader
        headerRender={() => (
          <HeaderBar>
            <LogoText to="/">GEMS VALLEY</LogoText>
            <MobileMenuToggle
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </MobileMenuToggle>

            <NavGroup isOpen={isMobileMenuOpen}>
              <NavLinkStyled to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </NavLinkStyled>
              <NavLinkStyled
                to="/shop"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gemstones
              </NavLinkStyled>
              <NavLinkStyled
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </NavLinkStyled>
              <NavLinkStyled
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </NavLinkStyled>
            </NavGroup>
          </HeaderBar>
        )}
      >
        <PageContainer
          style={{
            minHeight: "100vh",
          }}
        >
          {children}
        </PageContainer>

        {/* Footer */}
        <Footer>
          <Row gutter={[32, 32]} justify="space-between">
            <FooterCol xs={24} md={6}>
              <Title level={4} style={{ color: `${GOLD}` }}>
                Gems Valley
              </Title>
              <Text style={{ color: "white" }}>
                High quality gemstones shipped to you from Pakistan and
                Afghanistan.
              </Text>
            </FooterCol>
            <FooterCol xs={24} md={6}>
              <Title level={4} style={{ color: `${GOLD}` }}>
                High Quality
              </Title>
              <Text style={{ color: "white" }}>
                Finest loose gemstones, certified natural.
              </Text>
            </FooterCol>
            <FooterCol xs={24} md={6}>
              <Title level={4} style={{ color: `${GOLD}` }}>
                Follow Us
              </Title>
              <SocialIcons>
                <a href="#">
                  <FacebookOutlined />
                </a>
                <a href="#">
                  <InstagramOutlined />
                </a>
              </SocialIcons>
            </FooterCol>
          </Row>
        </Footer>
      </ProLayout>

      <WhatsAppButton href={whatsappURL} target="_blank">
        <img
          style={{ fontSize: "300px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </WhatsAppButton>
    </>
  );
};

export default Layout;
