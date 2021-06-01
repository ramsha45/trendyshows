import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  labelItem: {
    color: "rgba(255,255,255, 1)",
  },
}));

function FilterDropdown({ name, list }) {
  const classes = useStyles();
  const [filter, setFilter] = React.useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label" className={classes.labelItem}>
          {name}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          onChange={handleChange}
          className={classes.labelItem}
        >
          {list.map((item, index) => {
            return (
              <MenuItem value={item} key={index}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
}

export default FilterDropdown;
