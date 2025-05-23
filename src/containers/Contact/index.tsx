import React from "react";
import styled from "styled-components";
import { Form, Input, Button, Typography, message } from "antd";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { ContactContainer, StyledForm, SendButton, SubText } from "./styles";
import { PageWrapper, SectionHeader } from "../../utils/helpers";

const Contact: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    emailjs
      .send(
        "service_hmpp34r",
        "template_bii2r45",
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        "SBFofcHdtrWc_f5us"
      )
      .then(() => {
        message.success("Message sent successfully!");
        form.resetFields();
      })
      .catch(() => {
        message.error("Failed to send message. Please try again.");
      });
  };

  return (
    <PageWrapper>
      <motion.div
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ContactContainer>
          <SectionHeader level={2}>Contact Us</SectionHeader>
          <SubText>We'd love to hear from you! Send us a message.</SubText>
          <StyledForm form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              name="name"
              label="Your Name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="John Doe" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Your Email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input type="email" placeholder="john@example.com" />
            </Form.Item>
            <Form.Item
              name="message"
              label="Your Message"
              rules={[{ required: true, message: "Please enter a message" }]}
            >
              <Input.TextArea rows={4} placeholder="How can we help you?" />
            </Form.Item>
            <SendButton type="primary" htmlType="submit">
              Send Message
            </SendButton>
          </StyledForm>
        </ContactContainer>
      </motion.div>
    </PageWrapper>
  );
};

export default Contact;
