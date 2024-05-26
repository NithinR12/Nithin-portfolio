import React, { useEffect, useState } from "react";
import { Container, Title, TitleContainer, TitleWrapper } from "./Hi.style";
type HiProps = {
  visible: boolean;
};
const Hi: React.FC<HiProps> = ({ visible }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index <= 9) {
      const timer = setInterval(() => {
        setIndex((idx) => (idx += 1));
      }, 350);
      return () => clearInterval(timer);
    }
  }, [index]);
  const HiItems: string[] = [
    "Hello",
    "🙏🏼வணக்கம்",
    "Bonjour",
    "स्वागत हे",
    "Ciao",
    "Olá",
    "おい",
    "Hallå",
    "Guten tag",
    "Hallo",
  ];
  return (
    <Container visible={visible}>
      <TitleContainer>
        <TitleWrapper index={index}>
          {HiItems.map((item, idx) => (
            <Title key={idx}>{item}</Title>
          ))}
        </TitleWrapper>
      </TitleContainer>
    </Container>
  );
};

export default Hi;
