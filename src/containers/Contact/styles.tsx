import { colors } from "../../utils/colors";
import { Button, Card, Form, Typography } from "antd";
import styled from "styled-components";

const { Paragraph } = Typography;
const { charcoalBlue, GOLD, midNightBlue, OxfordBlue, white } = colors;

export const Wrapper = styled.div`
  padding: 60px;
`;

export const ContactContainer = styled(Card)`
  background-color: ${midNightBlue};
  padding: 40px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border: 1px solid ${GOLD};
`;

export const SubText = styled(Paragraph)`
  text-align: center;
  color: ${white};
`;

export const StyledForm = styled(Form)`
  .ant-form-item-label > label {
    color: ${GOLD};
  }

  .ant-input,
  .ant-input-textarea {
    background-color: ${OxfordBlue};
    color: ${white};
    border: 1px solid #444;

    &::placeholder {
      color: ${white};
      opacity: 0.2;
    }
  }

  .ant-input:hover {
    border-color: ${GOLD};
  }
`;

export const SendButton = styled(Button)`
  background-color: ${GOLD};
  color: ${charcoalBlue};
  font-weight: bold;
  width: 100%;
  height: 45px;
  margin-top: 10px;
  border: none;

  &:hover {
    background-color: ${white} !important;
    color: ${charcoalBlue} !important;
  }
`;
