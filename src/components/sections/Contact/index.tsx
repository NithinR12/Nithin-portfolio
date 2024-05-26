import React, { useLayoutEffect, useRef } from "react";
import { Container } from "../Project/Project.style";
import {
  SectionHeader,
  SectionHeaderBar,
  SectionTitle,
  Wrapper,
} from "../About/About.style";
import { ContactBtn, Main, Title } from "./Contact.style";
import { gsap } from "gsap";
import { fromFadeInUp, start } from "../../shared/gsap";

const Contact = () => {
  const sectionEl = useRef<HTMLElement>(null);
  const sectionHeaderEl = useRef<HTMLDivElement>(null);
  const mainEl = useRef<HTMLDivElement>(null);
  const duration = 0.5;

  useLayoutEffect(() => {
    const sectionHeaderTween = gsap.from(sectionHeaderEl.current, {
      ...fromFadeInUp,
      delay: 0.1,
      scrollTrigger: {
        trigger: sectionEl.current,
        start: start,
      },
    });
    const mainTween = gsap.from(mainEl.current, {
      ...fromFadeInUp,
      delay: 0.1,
      scrollTrigger: {
        trigger: sectionEl.current,
        start: "top-=330px center",
      },
    });
    return () => {
      [sectionHeaderTween, mainTween].forEach((el) => el.scrollTrigger?.kill());
    };
  }, []);
  return (
    <Container ref={sectionEl} id="contact">
      <Wrapper>
        <SectionHeader ref={sectionHeaderEl}>
          <SectionTitle index={4}>Contact me</SectionTitle>
          <SectionHeaderBar />
        </SectionHeader>
        <Main ref={mainEl}>
          <Title>
            As a junior full-stack developer & as experienced in React ,Node.js, 
            SQL & Python, I'm interested in all opportunities, including those for
            front-end and back-end developers Good in React or Node.js |
            SQL or Python.If you have any inquiries or questions, please don't hesitate 
            to contact me. I look forward to reach out to me. I will provide
            a comprehensive and prompt response.
          </Title>
          <ContactBtn href="mailto:nm12022000@gmail.com">
            Send message
          </ContactBtn>
        </Main>
      </Wrapper>
    </Container>
  );
};

export default Contact;
