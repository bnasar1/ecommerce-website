import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "antd";
import {
  GemCard,
  GemInfo,
  mockData,
  PageWrapper,
  SectionHeader,
} from "../../utils/helpers";

const Products: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleCardClick = (productName: string) => {
    navigate(`/shop/${productName.toLowerCase()}`);
  };

  return (
    <>
      <PageWrapper>
        <SectionHeader>Products</SectionHeader>
        <Row gutter={[24, 32]} justify="center">
          {mockData.map(({ name, icon }) => (
            <Col xs={24} sm={12} md={8} lg={6} key={name}>
              <GemCard
                hoverable
                cover={<img src={icon} alt={name} />}
                onClick={() => handleCardClick(name)}
              />
              <GemInfo>
                <h2>{name}</h2>
                <p>{`Explore ${name} variations`}</p>
              </GemInfo>
            </Col>
          ))}
        </Row>
      </PageWrapper>
    </>
  );
};

export default Products;
