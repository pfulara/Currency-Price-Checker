import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles.css";
import { Container } from "@material-ui/core";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./components/home/Home";
import CheckCurrency from "./components/checkCurrency/CheckCurrency";
import CheckGold from "./components/checkGold/CheckGold";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Switch>
          <Route path="/check-currency">
            <CheckCurrency />
          </Route>
          <Route path="/check-gold">
            <CheckGold />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}
