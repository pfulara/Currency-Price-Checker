import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import {
  Tooltip,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";

const CheckGold = () => {
  const [values, setValues] = useState([]);
  useEffect(() => {
    axios("https://api.nbp.pl/api/cenyzlota/last/30/?format=json").then(res => {
      setValues(res.data);
    });
  }, []);
  return (
    <section>
      <h1>Check gold price</h1>
      <Grid container>
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
                dataKey="cena"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
              <XAxis dataKey="data" />
              <YAxis />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </section>
  );
};

export default CheckGold;
