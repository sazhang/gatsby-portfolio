import React, { Component } from "react";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Image from "../images/undraw_working_late_pukg.svg";
import { SectionHeader } from "../utils/globalstyles";

// About section
const HeaderDiv = styled("div")`
  ${tw`flex flex-wrap-reverse items-center mx-auto relative`};
`;

const ImgDiv = styled("div")`
  ${tw`w-full my-0 md:w-1/2`};
`;

const Img = styled("img")`
  ${tw`my-0 px-6 xl:pl-1 py-4 mx-auto`};
`;

const PDiv = styled("div")`
  ${tw`w-full p-6 md:text-lg md:w-1/2 bg-indigo-darkest mx-auto`};
`;

const Blurb = styled("p")`
  ${tw`mx-auto mb-0`};
`;

class About extends Component {
  render() {
    return (
      <HeaderDiv>
        <ImgDiv>
          <Img src={Image} alt="Group of pandas eating bamboo" />
        </ImgDiv>
        <PDiv>
          <SectionHeader>Hi, I'm Sarah.</SectionHeader>
          <Blurb>
            Through my varied experiences from customer service to mental health
            nonprofit to police department to research labs, one thing has
            remained constant—my desire to help others. Allured by the endless
            opportunities to enact change more directly through technology, I
            switched majors my junior year and am currently finishing my last
            semester. In the meantime, you can find me binging podcasts,
            learning front-end dev, and playing around in Adobe CC.
          </Blurb>
        </PDiv>
      </HeaderDiv>
    );
  }
}

export default About;
