import React, { useLayoutEffect, useMemo, useRef } from "react";
import {
  Container,
  ImageWrapper,
  Overlay,
  OverlayIcon,
  OverlayIconLink,
  OverlayWrapper,
  SlideContainer,
  SlideImage,
  SlideItem,
  SlideWrapper,
} from "./Project.style";
import { Wrapper } from "../Skills/Skills.style";
import { Settings } from "react-slick";
import {
  SectionHeader,
  SectionHeaderBar,
  SectionTitle,
} from "../About/About.style";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fromFadeInUp, start } from "../../shared/gsap";

const Project = () => {
  //slide items
  interface ISlideItem {
    github: string;
    link: string;
    img: string;
  }
  const slideItems: ISlideItem[] = useMemo(
    () => [
      {
        github: "https://github.com/NithinR12/MissionKGT",
        link: "https://nithinr12.github.io/MissionKGT/",
        img: "https://raw.githubusercontent.com/NithinR12/MissionKGT/main/Events.jpg",
      },
      // {
      //   github: "https://github.com/NithinR12/MissionKGT",
      //   link: "https://nithinr12.github.io/MissionKGT/",
      //   img: "https://raw.githubusercontent.com/NithinR12/MissionKGT/main/Events.jpg",
      // },
      // {
      //   github: "https://github.com/NithinR12/MissionKGT",
      //   link: "https://nithinr12.github.io/MissionKGT/",
      //   img: "https://raw.githubusercontent.com/NithinR12/MissionKGT/main/Events.jpg",
      // },
      // {
      //   github: "https://github.com/NithinR12/MissionKGT",
      //   link: "https://nithinr12.github.io/MissionKGT/",
      //   img: "https://raw.githubusercontent.com/NithinR12/MissionKGT/main/Events.jpg",
      // }, 
     
    ],
    []
  );
  //Slider settings
  const settings: Settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
        },
      },
    ],
  };
  // gsap scroll trigger animations
  const sectionEl = useRef<HTMLElement>(null);
  const sectionHeaderEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const sectionHeaderTween = gsap.from(sectionHeaderEl.current, {
      ...fromFadeInUp,
      delay: 0.1,
      scrollTrigger: {
        trigger: sectionEl.current,
        start,
      },
    });
    const slideContainerTween = gsap.from(".slideContainer", {
      ...fromFadeInUp,
      delay: 0.1,
      scrollTrigger: {
        trigger: sectionEl.current,
        start: "top-=330px center",
      },
    });
    return () => {
      [sectionHeaderTween, slideContainerTween].forEach((el) =>
        el.scrollTrigger?.kill()
      );
    };
  }, []);
  // on image load refresh scrolltrigger
  const handleLoad = () => {
    ScrollTrigger.refresh();
  };
  return (
    <Container ref={sectionEl} id="work">
      <Wrapper>
        <SectionHeader ref={sectionHeaderEl}>
          <SectionTitle index={3}> Project </SectionTitle>
          <SectionHeaderBar />
        </SectionHeader>
        <SlideContainer className="slideContainer" {...settings}>
          {slideItems.map(({ github, link, img }, idx) => (
            <SlideWrapper key={idx}>
              <SlideItem>
                <ImageWrapper>
                  <SlideImage onLoad={handleLoad} src={img} />
                  <Overlay>
                    <OverlayWrapper>
                      <OverlayIconLink href={github} target="_blank">
                        <OverlayIcon icon={faGithub} />
                      </OverlayIconLink>
                      <OverlayIconLink href={link} target="_blank">
                        <OverlayIcon icon={faLink} />
                      </OverlayIconLink>
                    </OverlayWrapper>
                  </Overlay>
                </ImageWrapper>
              </SlideItem>
            </SlideWrapper>
          ))}
        </SlideContainer>
      </Wrapper>
    </Container>
  );
};

export default Project;
