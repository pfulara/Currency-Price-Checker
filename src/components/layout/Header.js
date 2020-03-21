import React from "react";
import { Link } from "react-router-dom";
import { Grid, AppBar, Container } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const AppBarStyled = styled(AppBar)({
  padding: "15px 0",
  position: "static"
});

const Brand = styled("div")({
  fontSize: "2rem",
  color: "#fff"
});

const TopMenu = styled("div")({});

const StyledLink = styled(Link)({
  "&:hover": {
    textDecoration: "underline"
  },
  marginLeft: "10px"
});

const Header = () => {
  return (
    <AppBarStyled>
      <Container>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Brand>
            <Link to="/">CPC</Link>
          </Brand>
          <TopMenu>
            <StyledLink to="/check-currency">Check currency</StyledLink>
            <StyledLink to="/check-gold">Check gold</StyledLink>
          </TopMenu>
        </Grid>
      </Container>
    </AppBarStyled>
  );
};

export default Header;
