import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import axios from "axios";
import {
  Tooltip,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";

import ChangeCurrency from "../shared/ChangeCurrency";
import ChangeDateStart from "../shared/ChangeDateStart";
import ChangeDateEnd from "../shared/ChangeDateEnd";

const CheckCurrency = () => {
  const [end, setEnd] = useState(new Date());
  const [start, setStart] = useState(new Date());
  const [currency, setCurrency] = useState("");
  const [values, setValues] = useState([]);
  return (
    <section>
      <h1>Check Currency Price</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <ChangeCurrency setCurrency={setCurrency} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ChangeDateStart start={start} setStart={setStart} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ChangeDateEnd end={end} setEnd={setEnd} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={e => {
              e.preventDefault();
              if (+start <= +end) {
                const formatedStart = `${start.getFullYear()}-${(
                  "0" +
                  (start.getMonth() + 1)
                ).slice(-2)}-${("0" + start.getDate()).slice(-2)}`;
                const formatedEnd = `${end.getFullYear()}-${(
                  "0" +
                  (end.getMonth() + 1)
                ).slice(-2)}-${("0" + end.getDate()).slice(-2)}`;
                axios(
                  `https://api.nbp.pl/api/exchangerates/rates/A/${currency}/${formatedStart}/${formatedEnd}/`
                ).then(res => {
                  setValues(res.data.rates);
                });
              } else {
                console.log("błąd");
              }
            }}
          >
            Show Chart
          </Button>
        </Grid>
        <Grid item xs={12} style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
              data={values}
            >
              <Area
                type="monotone"
                dataKey="mid"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
              <XAxis dataKey="effectiveDate" />
              <YAxis />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </section>
  );
};

export default CheckCurrency;
