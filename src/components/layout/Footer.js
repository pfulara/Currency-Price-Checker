import React from "react";
import { Container } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const FooterStyled = styled("footer")({
  backgroundColor: "#3f51b5",
  color: "#fff",
  padding: "15px 0"
});

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <a href="mailto:fulara.pawel@gmail.com">fulara.pawel@gmail.com</a>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
