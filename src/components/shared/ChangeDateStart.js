import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const ChangeDateStart = ({ start, setStart }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        maxDate={new Date()}
        variant="inline"
        format="yyyy-MM-dd"
        id="startDatePicker"
        label="Start date"
        value={start}
        onChange={e => {
          setStart(e);
        }}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default ChangeDateStart;
