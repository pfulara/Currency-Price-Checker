import React, { useEffect, useState } from "react";
import axios from "axios";
import { NativeSelect, InputLabel, FormControl } from "@material-ui/core";

const ChangeCurrency = ({ setCurrency }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios(`https://api.nbp.pl/api/exchangerates/tables/A/`).then(res =>
      setList(res.data[0].rates)
    );
  }, []);
  return (
    <FormControl>
      <InputLabel htmlFor="currency">Currency</InputLabel>
      <NativeSelect
        id="currency"
        onChange={e => {
          setCurrency(e.target.value);
        }}
      >
        <option value="" />
        {list.map(item => (
          <option value={item.code} key={item.code}>
            {item.currency}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default ChangeCurrency;
