import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const ChangeDateEnd = ({ end, setEnd }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        maxDate={new Date()}
        variant="inline"
        format="yyyy-MM-dd"
        id="endDatePicker"
        label="End date"
        value={end}
        onChange={e => {
          setEnd(e);
        }}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default ChangeDateEnd;
