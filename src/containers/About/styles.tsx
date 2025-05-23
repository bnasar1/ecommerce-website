import { colors } from "../../utils/colors";
import { Card, Typography } from "antd";
import styled from "styled-components";

const { Paragraph, Text } = Typography;
const { GOLD, midNightBlue, OxfordBlue, white, desertSand } = colors;

export const ContentWrapper = styled(Card)`
  max-width: 1000px;
  margin: auto;
  padding: 40px;
  background: ${midNightBlue};
  border-radius: 16px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
`;

export const StyledParagraph = styled(Paragraph)`
  color: ${white};
  font-size: 1rem;
  line-height: 1.8;
`;

export const Highlight = styled(Text)`
  color: ${desertSand};
  font-weight: bold;
`;

export const CEOCard = styled(Card)`
  && {
    background: ${OxfordBlue};
    border: 1px solid #444;
    padding: 20px;
    box-shadow: 0 0 20px rgba(201, 165, 126, 0.1);

    .ant-card-body {
      display: flex;
      gap: 24px;
      padding: 0; /* Remove default padding */
      align-items: center;
    }

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
    }

    p {
      margin: 4px 0;
      color: ${white};
    }

    a {
      color: ${GOLD};
      font-weight: 500;
      text-decoration: underline;
    }
  }
`;
