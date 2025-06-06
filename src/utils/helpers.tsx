import { Card, Typography } from "antd";
import styled from "styled-components";
import { colors } from "./colors";

const { Title, Text } = Typography;
const { GOLD, white } = colors;

export const defaultWhatsApp = {
  phone: "",
  message: "Hello, I am interested in your gemstones!",
};

export const PageWrapper = styled.div`
  padding: 60px 20px;
  min-height: 100vh;
`;

export const GemCard = styled(Card)`
  border-radius: 16px;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.3); /* stronger glow on hover */
  }

  .ant-card-body {
    display: none;
  }

  img {
    height: 220px;
    object-fit: cover;
  }
`;

export const GemInfo = styled(Text)`
  margin-top: 10px;
  text-align: center;

  h2 {
    font-family: "Playfair Display", serif;
    color: ${GOLD};
    font-size: 1.1rem;
    margin-bottom: 4px;
  }

  p {
    color: ${white};
    font-size: 0.95rem;
    margin: 0;
  }
`;

export const SectionHeader = styled(Title)`
  font-family: "Playfair Display", serif;
  text-align: center;
  color: ${GOLD} !important;
`;

export const getWhatsAppLink = (
  phoneNumber: string,
  message: string
): string => {
  const encodedMessage = encodeURIComponent(message);
  const cleanNumber = phoneNumber.replace(/[^\d]/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
};

export const mockData = [
  {
    name: "Tourmaline",
    icon: "/ecommerce-website/images/Tourmaline.png",
    variations: [
      {
        id: 1,
        name: "Tourmaline",
        type: "Semi-Precious",
        color: "Watermelon",
        weight: "2.3 carat",
        shape: "Oval",
        clarity: "VS1",
        price: 850.0,
        description:
          "A vibrant watermelon tourmaline with stunning color transitions.",
        sold: false,
        stock: 10,
        certifications: "GIA Certified",
        images: [
          "https://example.com/images/tourmaline1.jpg",
          "https://example.com/images/tourmaline1-side.jpg",
        ],
      },
      {
        id: 2,
        name: "Tourmaline",
        type: "Semi-Precious",
        color: "Green",
        weight: "1.8 carat",
        shape: "Round",
        clarity: "VVS2",
        price: 600.0,
        description: "A rare green tourmaline with exceptional brilliance.",
        sold: true,
        stock: 5,
        certifications: "IGI Certified",
        images: [
          "https://example.com/images/tourmaline2.jpg",
          "https://example.com/images/tourmaline2-side.jpg",
        ],
      },
      {
        id: 3,
        name: "Tourmaline",
        type: "Semi-Precious",
        color: "Pink",
        weight: "3.0 carat",
        shape: "Pear",
        clarity: "VS2",
        price: 950.0,
        description: "A beautiful pink tourmaline with a soft shimmer.",
        sold: false,
        stock: 8,
        certifications: null,
        images: [
          "https://example.com/images/tourmaline3.jpg",
          "https://example.com/images/tourmaline3-side.jpg",
        ],
      },
      {
        id: 4,
        name: "Tourmaline",
        type: "Semi-Precious",
        color: "Blue",
        weight: "2.5 carat",
        shape: "Cushion",
        clarity: "VS1",
        price: 1100.0,
        description: "A vibrant blue tourmaline, perfect for elegant settings.",
        sold: false,
        stock: 6,
        certifications: "GIA Certified",
        images: [
          "https://example.com/images/tourmaline4.jpg",
          "https://example.com/images/tourmaline4-side.jpg",
        ],
      },
    ],
  },
  {
    name: "Aquamarine",
    icon: "/ecommerce-website/images/Aquamarine.jpg",
    variations: [
      {
        id: 1,
        name: "Aquamarine",
        type: "Precious",
        color: "Light Blue",
        weight: "3.2 carat",
        shape: "Emerald",
        clarity: "VVS1",
        price: 1200.0,
        description: "A serene aquamarine with a calming blue hue.",
        sold: false,
        stock: 8,
        certifications: "GIA Certified",
        images: ["/ecommerce-website/images/lightBlueAqua.jpg"],
      },
      {
        id: 2,
        name: "Aquamarine",
        type: "Precious",
        color: "Sky Blue",
        weight: "2.0 carat",
        shape: "Pear",
        clarity: "VS2",
        price: 900.0,
        description: "A sparkling aquamarine with a delicate color.",
        sold: false,
        stock: 6,
        certifications: "IGI Certified",
        images: ["/ecommerce-website/images/skyBlueAqua.jpg"],
      },
      {
        id: 3,
        name: "Aquamarine",
        type: "Precious",
        color: "Deep Blue",
        weight: "4.0 carat",
        shape: "Round",
        clarity: "VS1",
        price: 1800.0,
        description: "A mesmerizing deep blue aquamarine.",
        sold: false,
        stock: 4,
        certifications: "GIA Certified",
        images: ["/ecommerce-website/images/deepBlueAqua.jpg"],
      },
      {
        id: 4,
        name: "Aquamarine",
        type: "Precious",
        color: "Pale Blue",
        weight: "2.7 carat",
        shape: "Oval",
        clarity: "VVS2",
        price: 950.0,
        description: "A pale blue aquamarine with excellent clarity.",
        sold: false,
        stock: 7,
        certifications: null,
        images: ["/ecommerce-website/images/paleBlueAqua.jpg"],
      },
    ],
  },
  {
    name: "Kunzite",
    icon: "/ecommerce-website/images/Kunzite.jpg",
    variations: [
      {
        id: 1,
        name: "Kunzite",
        type: "Semi-Precious",
        color: "Pink",
        weight: "4.0 carat",
        shape: "Cushion",
        clarity: "VS1",
        price: 750.0,
        description: "A soft pink kunzite with a radiant glow.",
        sold: false,
        stock: 4,
        certifications: "IGI Certified",
        images: [
          "https://example.com/images/kunzite1.jpg",
          "https://example.com/images/kunzite1-side.jpg",
        ],
      },
      {
        id: 2,
        name: "Kunzite",
        type: "Semi-Precious",
        color: "Lilac",
        weight: "3.5 carat",
        shape: "Oval",
        clarity: "VS2",
        price: 800.0,
        description: "A lilac kunzite with elegant sparkle.",
        sold: false,
        stock: 6,
        certifications: null,
        images: [
          "https://example.com/images/kunzite2.jpg",
          "https://example.com/images/kunzite2-side.jpg",
        ],
      },
      {
        id: 3,
        name: "Kunzite",
        type: "Semi-Precious",
        color: "Peach",
        weight: "2.8 carat",
        shape: "Pear",
        clarity: "VVS2",
        price: 650.0,
        description: "A peach kunzite with gentle tones.",
        sold: true,
        stock: 5,
        certifications: "IGI Certified",
        images: [
          "https://example.com/images/kunzite3.jpg",
          "https://example.com/images/kunzite3-side.jpg",
        ],
      },
      {
        id: 4,
        name: "Kunzite",
        type: "Semi-Precious",
        color: "Rose",
        weight: "3.0 carat",
        shape: "Round",
        clarity: "VS1",
        price: 900.0,
        description: "A rose-colored kunzite with unique charm.",
        sold: true,
        stock: 3,
        certifications: "GIA Certified",
        images: [
          "https://example.com/images/kunzite4.jpg",
          "https://example.com/images/kunzite4-side.jpg",
        ],
      },
    ],
  },
  {
    name: "Topaz",
    icon: "/ecommerce-website/images/Topaz.jpg",
    variations: [
      {
        id: 1,
        name: "Topaz",
        type: "Semi-Precious",
        color: "Yellow",
        weight: "2.5 carat",
        shape: "Oval",
        clarity: "VS2",
        price: 300.0,
        description: "A sunny yellow topaz perfect for any jewelry setting.",
        sold: true,
        stock: 12,
        certifications: null,
        images: [
          "https://example.com/images/topaz1.jpg",
          "https://example.com/images/topaz1-side.jpg",
        ],
      },
      {
        id: 2,
        name: "Topaz",
        type: "Semi-Precious",
        color: "Blue",
        weight: "3.0 carat",
        shape: "Round",
        clarity: "VS1",
        price: 500.0,
        description: "A bright blue topaz with vibrant sparkle.",
        sold: false,
        stock: 9,
        certifications: null,
        images: [
          "https://example.com/images/topaz2.jpg",
          "https://example.com/images/topaz2-side.jpg",
        ],
      },
      {
        id: 3,
        name: "Topaz",
        type: "Semi-Precious",
        color: "Pink",
        weight: "1.8 carat",
        shape: "Cushion",
        clarity: "VS2",
        price: 400.0,
        description: "A lovely pink topaz with excellent cut.",
        sold: false,
        stock: 7,
        certifications: "IGI Certified",
        images: [
          "https://example.com/images/topaz3.jpg",
          "https://example.com/images/topaz3-side.jpg",
        ],
      },
      {
        id: 4,
        name: "Topaz",
        type: "Semi-Precious",
        color: "White",
        weight: "2.2 carat",
        shape: "Pear",
        clarity: "VVS1",
        price: 350.0,
        description: "A classic white topaz with timeless elegance.",
        sold: false,
        stock: 11,
        certifications: "GIA Certified",
        images: [
          "https://example.com/images/topaz4.jpg",
          "https://example.com/images/topaz4-side.jpg",
        ],
      },
    ],
  },
  {
    name: "Sphene",
    icon: "https://www.findgemstone.com/wp-content/uploads/2024/06/What-Color-Tourmaline-is-Rare.jpg",
    variations: [
      {
        id: 1,
        name: "Sphene",
        type: "Rare Gemstone",
        color: "Greenish Yellow",
        weight: "2.1 carat",
        shape: "Oval",
        clarity: "VS1",
        price: 1300.0,
        description: "A radiant greenish-yellow sphene with brilliant fire.",
        sold: false,
        stock: 5,
        certifications: "GIA Certified",
        images: [
          "https://example.com/images/sphene1.jpg",
          "https://example.com/images/sphene1-side.jpg",
        ],
      },
      {
        id: 2,
        name: "Sphene",
        type: "Rare Gemstone",
        color: "Golden",
        weight: "1.9 carat",
        shape: "Round",
        clarity: "VVS2",
        price: 1100.0,
        description: "A golden sphene with remarkable dispersion.",
        sold: false,
        stock: 7,
        certifications: "IGI Certified",
        images: [
          "https://example.com/images/sphene2.jpg",
          "https://example.com/images/sphene2-side.jpg",
        ],
      },
      {
        id: 3,
        name: "Sphene",
        type: "Rare Gemstone",
        color: "Yellow",
        weight: "3.2 carat",
        shape: "Cushion",
        clarity: "VS2",
        price: 1600.0,
        description: "A vibrant yellow sphene with exceptional brilliance.",
        sold: false,
        stock: 4,
        certifications: null,
        images: [
          "https://example.com/images/sphene3.jpg",
          "https://example.com/images/sphene3-side.jpg",
        ],
      },
      {
        id: 4,
        name: "Sphene",
        type: "Rare Gemstone",
        color: "Chartreuse",
        weight: "2.8 carat",
        shape: "Pear",
        clarity: "VVS1",
        price: 1450.0,
        description: "A chartreuse sphene with dazzling fire and clarity.",
        sold: true,
        stock: 6,
        certifications: "GIA Certified",
        images: [
          "https://example.com/images/sphene4.jpg",
          "https://example.com/images/sphene4-side.jpg",
        ],
      },
    ],
  },
  {
    name: "Garnet",
    icon: "https://www.findgemstone.com/wp-content/uploads/2024/06/What-Color-Tourmaline-is-Rare.jpg",
    variations: [
      {
        id: 1,
        name: "Garnet",
        type: "Precious Stone",
        color: "Deep Red",
        weight: "3.1 carat",
        shape: "Round",
        clarity: "VS1",
        price: 400.0,
        description: "A deep red garnet with an intense hue.",
        sold: true,
        stock: 10,
        certifications: null,
        images: [
          "https://example.com/images/garnet1.jpg",
          "https://example.com/images/garnet1-side.jpg",
        ],
      },
      {
        id: 2,
        name: "Garnet",
        type: "Precious Stone",
        color: "Orange-Red",
        weight: "2.5 carat",
        shape: "Oval",
        clarity: "VS2",
        price: 350.0,
        description: "An orange-red garnet with a vivid glow.",
        sold: true,
        stock: 8,
        certifications: null,
        images: [
          "https://example.com/images/garnet2.jpg",
          "https://example.com/images/garnet2-side.jpg",
        ],
      },
      {
        id: 3,
        name: "Garnet",
        type: "Precious Stone",
        color: "Rhodolite",
        weight: "2.8 carat",
        shape: "Pear",
        clarity: "VVS1",
        price: 500.0,
        description: "A rhodolite garnet with excellent clarity.",
        sold: true,
        stock: 6,
        certifications: "IGI Certified",
        images: [
          "https://example.com/images/garnet3.jpg",
          "https://example.com/images/garnet3-side.jpg",
        ],
      },
      {
        id: 4,
        name: "Garnet",
        type: "Precious Stone",
        color: "Green",
        weight: "3.0 carat",
        shape: "Cushion",
        clarity: "VS2",
        price: 600.0,
        description: "A rare green garnet with vivid brilliance.",
        sold: true,
        stock: 4,
        certifications: "GIA Certified",
        images: [
          "https://example.com/images/garnet4.jpg",
          "https://example.com/images/garnet4-side.jpg",
        ],
      },
    ],
  },
  {
    name: "Emerald",
    icon: "https://www.findgemstone.com/wp-content/uploads/2024/06/What-Color-Tourmaline-is-Rare.jpg",
    variations: [
      {
        id: 1,
        name: "Emerald",
        type: "Precious Stone",
        color: "Green",
        weight: "4.5 carat",
        shape: "Emerald",
        clarity: "VS1",
        price: 3200.0,
        description: "A classic green emerald with a vibrant hue.",
        sold: true,
        stock: 5,
        certifications: "GIA Certified",
        images: [
          "https://example.com/images/emerald1.jpg",
          "https://example.com/images/emerald1-side.jpg",
        ],
      },
      {
        id: 2,
        name: "Emerald",
        type: "Precious Stone",
        color: "Light Green",
        weight: "3.2 carat",
        shape: "Round",
        clarity: "VVS2",
        price: 2800.0,
        description: "A delicate light green emerald with fine clarity.",
        sold: true,
        stock: 7,
        certifications: "IGI Certified",
        images: [
          "https://example.com/images/emerald2.jpg",
          "https://example.com/images/emerald2-side.jpg",
        ],
      },
      {
        id: 3,
        name: "Emerald",
        type: "Precious Stone",
        color: "Dark Green",
        weight: "5.0 carat",
        shape: "Oval",
        clarity: "VS2",
        price: 4000.0,
        description:
          "A premium dark green emerald with exceptional brilliance.",
        sold: true,
        stock: 3,
        certifications: "GIA Certified",
        images: [
          "https://example.com/images/emerald3.jpg",
          "https://example.com/images/emerald3-side.jpg",
        ],
      },
      {
        id: 4,
        name: "Emerald",
        type: "Precious Stone",
        color: "Bluish Green",
        weight: "3.8 carat",
        shape: "Cushion",
        clarity: "VS1",
        price: 3500.0,
        description: "A bluish-green emerald with a captivating glow.",
        sold: true,
        stock: 4,
        certifications: null,
        images: [
          "https://example.com/images/emerald4.jpg",
          "https://example.com/images/emerald4-side.jpg",
        ],
      },
    ],
  },
  {
    name: "Morganite",
    icon: "https://www.findgemstone.com/wp-content/uploads/2024/06/What-Color-Tourmaline-is-Rare.jpg",
    variations: [
      {
        id: 1,
        name: "Morganite",
        type: "Semi-Precious",
        color: "Peach",
        weight: "2.5 carat",
        shape: "Oval",
        clarity: "VS2",
        price: 700.0,
        description: "A soft peach morganite with excellent clarity.",
        sold: true,
        stock: 6,
        certifications: null,
        images: [
          "https://example.com/images/morganite1.jpg",
          "https://example.com/images/morganite1-side.jpg",
        ],
      },
      {
        id: 2,
        name: "Morganite",
        type: "Semi-Precious",
        color: "Pink",
        weight: "3.0 carat",
        shape: "Round",
        clarity: "VS1",
        price: 850.0,
        description: "A blush pink morganite with brilliant sparkle.",
        sold: true,
        stock: 5,
        certifications: "IGI Certified",
        images: [
          "https://example.com/images/morganite2.jpg",
          "https://example.com/images/morganite2-side.jpg",
        ],
      },
      {
        id: 3,
        name: "Morganite",
        type: "Semi-Precious",
        color: "Champagne",
        weight: "2.8 carat",
        shape: "Cushion",
        clarity: "VS2",
        price: 900.0,
        description: "A champagne morganite with warm tones.",
        sold: true,
        stock: 4,
        certifications: "GIA Certified",
        images: [
          "https://example.com/images/morganite3.jpg",
          "https://example.com/images/morganite3-side.jpg",
        ],
      },
      {
        id: 4,
        name: "Morganite",
        type: "Semi-Precious",
        color: "Light Peach",
        weight: "3.2 carat",
        shape: "Pear",
        clarity: "VVS1",
        price: 1000.0,
        description: "A delicate light peach morganite with remarkable beauty.",
        sold: true,
        stock: 6,
        certifications: null,
        images: [
          "https://example.com/images/morganite4.jpg",
          "https://example.com/images/morganite4-side.jpg",
        ],
      },
    ],
  },
  {
    name: "Peridot",
    icon: "https://www.findgemstone.com/wp-content/uploads/2024/06/What-Color-Tourmaline-is-Rare.jpg",
    variations: [
      {
        id: 1,
        name: "Peridot",
        type: "Semi-Precious",
        color: "Green",
        weight: "2.3 carat",
        shape: "Round",
        clarity: "VS1",
        price: 500.0,
        description: "A vivid green peridot with striking clarity.",
        sold: true,
        stock: 8,
        certifications: null,
        images: [
          "https://example.com/images/peridot1.jpg",
          "https://example.com/images/peridot1-side.jpg",
        ],
      },
      {
        id: 2,
        name: "Peridot",
        type: "Semi-Precious",
        color: "Yellow-Green",
        weight: "3.0 carat",
        shape: "Oval",
        clarity: "VS2",
        price: 650.0,
        description: "A yellow-green peridot with a glowing brilliance.",
        sold: true,
        stock: 5,
        certifications: "IGI Certified",
        images: [
          "https://example.com/images/peridot2.jpg",
          "https://example.com/images/peridot2-side.jpg",
        ],
      },
      {
        id: 3,
        name: "Peridot",
        type: "Semi-Precious",
        color: "Lime Green",
        weight: "4.0 carat",
        shape: "Cushion",
        clarity: "VVS1",
        price: 750.0,
        description: "A lime green peridot with exceptional quality.",
        sold: true,
        stock: 3,
        certifications: "GIA Certified",
        images: [
          "https://example.com/images/peridot3.jpg",
          "https://example.com/images/peridot3-side.jpg",
        ],
      },
      {
        id: 4,
        name: "Peridot",
        type: "Semi-Precious",
        color: "Pale Green",
        weight: "2.5 carat",
        shape: "Pear",
        clarity: "VS1",
        price: 600.0,
        description: "A pale green peridot with a subtle charm.",
        sold: true,
        stock: 6,
        certifications: null,
        images: [
          "https://example.com/images/peridot4.jpg",
          "https://example.com/images/peridot4-side.jpg",
        ],
      },
    ],
  },
];
