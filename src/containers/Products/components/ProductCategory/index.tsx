import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Row, Col, Card, Typography } from "antd";
import {
  GemCard,
  GemInfo,
  mockData,
  PageWrapper,
  SectionHeader,
} from "../../../../utils/helpers";

const ProductCategory: React.FC = () => {
  const { productName } = useParams<{ productName: string }>();
  const navigate = useNavigate();

  const selectedProduct = mockData.find(
    (item) => item.name.toLowerCase() === productName?.toLowerCase()
  );

  if (!selectedProduct) {
    return (
      <PageWrapper>
        <SectionHeader level={2}>Product Not Found</SectionHeader>
      </PageWrapper>
    );
  }

  const handleCardClick = (id: number) => {
    navigate(`/shop/${productName}/${id}`);
  };

  return (
    <>
      <PageWrapper>
        <SectionHeader>{productName?.toUpperCase()} Variations</SectionHeader>
        <Row gutter={[24, 32]} justify="center">
          {selectedProduct.variations.map(({ id, images, color, weight }) => (
            <Col xs={24} sm={12} md={8} lg={6} key={id}>
              <GemCard
                hoverable
                cover={<img src={images[0]} alt={`${color} ${productName}`} />}
                onClick={() => handleCardClick(id)}
              />
              <GemInfo>
                <h2>{`${color} - ${weight}`}</h2>
                <p>{`Explore ${color} ${selectedProduct.name}`}</p>
              </GemInfo>
            </Col>
          ))}
        </Row>
      </PageWrapper>
    </>
  );
};

export default ProductCategory;
