import { colors } from "../../../../utils/colors";
import { Tag } from "antd";
import styled from "styled-components";

const { charcoalBlue, GOLD, midNightBlue, white } = colors;

export const Section = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const ImageCard = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  height: 100%; /* Match height with info card */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Fill space without stretching */
  }
`;

export const InfoCard = styled.div`
  background: ${midNightBlue};
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  height: 100%; /* Ensure it can be matched */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const GemTitle = styled.h2`
  color: ${GOLD};
  font-family: "Playfair Display", serif;
  margin-bottom: 10px;
`;

export const PriceTag = styled(Tag)`
  background-color: ${GOLD};
  color: ${white};
  border: none;
  padding: 4px 12px;
  font-weight: bold;
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #444;

  span:first-child {
    color: ${GOLD};
    font-weight: 500;
  }

  span:last-child {
    color: ${white};
  }
`;

export const WhatsAppButton = styled.a`
  display: block;
  margin: 20px auto 0;
  padding: 12px 24px;
  background-color: ${GOLD};
  color: ${charcoalBlue};
  text-align: center;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s ease;
  max-width: 300px;

  &:hover {
    background: ${white};
    color: ${charcoalBlue};
  }
`;
