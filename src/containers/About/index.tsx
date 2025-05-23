import { Tooltip } from "antd";
import { CEOCard, ContentWrapper, Highlight, StyledParagraph } from "./styles";
import {
  SectionHeader,
  PageWrapper,
  getWhatsAppLink,
  defaultWhatsApp,
} from "../../utils/helpers";

const AboutUs = () => {
  const whatsappURL = getWhatsAppLink(
    defaultWhatsApp.phone,
    defaultWhatsApp.message
  );

  return (
    <PageWrapper>
      <ContentWrapper>
        <SectionHeader level={2}>About Us</SectionHeader>

        <StyledParagraph>
          Welcome to our <Highlight>Fine Stone Shop</Highlight>! We have been in
          the gemstone business since <Highlight>2008</Highlight>. We specialize
          in exquisite <Highlight>Colored Gemstones</Highlight> including
          Tourmaline, Aquamarine, Kunzite, Topaz, Sphene, Garnet, Quartz, and
          Peridot.
        </StyledParagraph>

        <StyledParagraph>
          Our gems originate from <Highlight>Pakistan & Afghanistan</Highlight>,
          renowned for their unique and high-quality stones. We collaborate
          directly with miners, ensuring the{" "}
          <Highlight>best quality gemstones at competitive prices</Highlight> to
          help our customers grow their businesses.
        </StyledParagraph>

        <StyledParagraph>
          If you are searching for{" "}
          <Highlight>top-quality colored gemstones</Highlight>, you are in the
          right place! Our stones are <Highlight>100% natural</Highlight>,
          precisely cut, polished, and meet the{" "}
          <Highlight>highest industry standards</Highlight> with exceptional
          symmetry.
        </StyledParagraph>

        <StyledParagraph>
          Each gemstone is showcased with{" "}
          <Highlight>magnified, high-resolution images</Highlight> so you can
          inspect every detail. All{" "}
          <Highlight>treatments are fully disclosed</Highlight> for complete
          transparency.
        </StyledParagraph>

        <CEOCard>
          <img src="/images/avatar.png" alt="CEO" />
          <div>
            <p>
              <strong>CEO:</strong> Hamza Gull
            </p>
            <p>
              <strong>Contact & WhatsApp:</strong>{" "}
              <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
                <Tooltip title="Click to contact on Whatsapp">
                  <Highlight>+66 618987192</Highlight>
                </Tooltip>
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:finestonespk@gmail.com">finestonespk@gmail.com</a>
            </p>
            <p>
              You can also find us on <Highlight>Instagram</Highlight> &{" "}
              <Highlight>Facebook</Highlight>. Links are available at the bottom
              of the page.
            </p>
          </div>
        </CEOCard>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default AboutUs;
