import { useParams } from "react-router-dom";
import { Row, Col } from "antd";
import {
  mockData,
  PageWrapper,
  SectionHeader,
} from "../../../../utils/helpers";
import {
  GemTitle,
  ImageCard,
  InfoCard,
  PriceTag,
  Section,
  TableRow,
  WhatsAppButton,
} from "./styles";

const ProductDetails = () => {
  const { productName, gemId } = useParams<{ productName: any; gemId: any }>();

  const selectedProduct = mockData.find(
    (item) => item.name.toLowerCase() === productName?.toLowerCase()
  );

  if (!selectedProduct) {
    return (
      <PageWrapper>
        <SectionHeader>Product Not Found</SectionHeader>
      </PageWrapper>
    );
  }

  const selectedVariation = selectedProduct.variations.find(
    (variation) => variation.id === parseInt(gemId)
  );

  if (!selectedVariation) {
    return (
      <PageWrapper>
        <SectionHeader>Variation Not Found</SectionHeader>
      </PageWrapper>
    );
  }

  const handleWhatsAppOrder = () => {
    const phoneNumber = 923339109311;
    const message = `Hello, I'm interested in this gemstone: \n\nName: ${
      selectedVariation.name
    }\nColor: ${selectedVariation.color}\nWeight: ${
      selectedVariation.weight
    }\nPrice: $${selectedVariation.price.toFixed(2)}\n\nProduct Link: ${
      window.location.href
    }`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <PageWrapper>
      <Section>
        <SectionHeader>{selectedVariation.name} Details</SectionHeader>
        <Row gutter={[32, 32]} align="stretch">
          <Col xs={24} md={10}>
            <ImageCard>
              <img
                src={selectedVariation.images[0]}
                alt={selectedVariation.name}
              />
            </ImageCard>
          </Col>
          <Col xs={24} md={14}>
            <InfoCard>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <GemTitle>
                  {selectedVariation.name} – {selectedVariation.color}
                </GemTitle>
                <PriceTag>${selectedVariation.price.toFixed(2)}</PriceTag>
              </div>
              <div>
                <TableRow>
                  <span>Type</span>
                  <span>{selectedVariation.type}</span>
                </TableRow>
                <TableRow>
                  <span>Color</span>
                  <span>{selectedVariation.color}</span>
                </TableRow>
                <TableRow>
                  <span>Weight</span>
                  <span>{selectedVariation.weight}</span>
                </TableRow>
                <TableRow>
                  <span>Shape</span>
                  <span>{selectedVariation.shape}</span>
                </TableRow>
                <TableRow>
                  <span>Clarity</span>
                  <span>{selectedVariation.clarity}</span>
                </TableRow>
                <TableRow>
                  <span>Stock</span>
                  <span>
                    {selectedVariation.stock > 0
                      ? selectedVariation.stock
                      : "Out of Stock"}
                  </span>
                </TableRow>
                <TableRow>
                  <span>Certifications</span>
                  <span>{selectedVariation.certifications || "None"}</span>
                </TableRow>
                <TableRow>
                  <span>Description</span>
                  <span>{selectedVariation.description}</span>
                </TableRow>
              </div>
              <WhatsAppButton onClick={handleWhatsAppOrder}>
                Contact on WhatsApp to place order
              </WhatsAppButton>
            </InfoCard>
          </Col>
        </Row>
      </Section>
    </PageWrapper>
  );
};

export default ProductDetails;
