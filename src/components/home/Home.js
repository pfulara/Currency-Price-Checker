import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const GridHeader = styled(Grid)({
  backgroundColor: "#aaa",
  color: "#fff",
  padding: "10px 5px",
  marginBottom: "10px"
});

const GridBody = styled(Grid)({
  "&:hover": {
    backgroundColor: "#eee"
  },
  padding: "10px 5px"
});

const Home = () => {
  const [values, setValues] = useState([]);
  const [date, setDate] = useState("");
  useEffect(() => {
    axios("https://api.nbp.pl/api/exchangerates/tables/a/last/1/").then(res => {
      setValues(res.data[0].rates);
      setDate(res.data[0].effectiveDate);
    });
  }, []);
  return (
    <section>
      <h2>Last update: {date}</h2>
      <GridHeader container>
        <Grid item xs={2}>
          Code
        </Grid>
        <Grid item xs={6}>
          Currency
        </Grid>
        <Grid item xs={4}>
          Price
        </Grid>
      </GridHeader>
      {values.map(item => (
        <GridBody container key={item.code}>
          <Grid item xs={2}>
            {item.code}
          </Grid>
          <Grid item xs={6}>
            {item.currency}
          </Grid>
          <Grid item xs={4}>
            {item.mid} zł
          </Grid>
        </GridBody>
      ))}
    </section>
  );
};

export default Home;
