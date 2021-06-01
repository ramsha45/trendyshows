import {
  AppBar,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import CenterFocusWeakIcon from "@material-ui/icons/CenterFocusWeak";
import { useHistory } from "react-router-dom";
import { handleNavigation } from "../../Utility/common";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import PowerSettingsNewOutlinedIcon from "@material-ui/icons/PowerSettingsNewOutlined";
import FilterDropdown from "../../Components/FilterDropdown";
import SearchDropdown from "../../Components/SearchDropdown";
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    marginLeft: theme.spacing(40),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "rgba(202,201,201, 0.1)",
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  navItem: {
    color: "#000000",
  },
  children: {
    backgroundColor: "#BA2F16",
  },
  filterAppBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function DashboardLayout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => {
              handleNavigation("/dashboard", history);
            }}
          >
            <CenterFocusWeakIcon />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Films, Actors"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Typography className={classes.title} variant="h6" noWrap>
            Trendy Shows
          </Typography>
          <IconButton
            className={classes.navItem}
            onClick={() => {
              handleNavigation("/user", history);
            }}
          >
            <AccountCircleOutlinedIcon />
          </IconButton>
          <IconButton
            className={classes.navItem}
            onClick={() => {
              handleNavigation("/user", history);
            }}
          >
            <PowerSettingsNewOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <AppBar position="static" color="secondary">
        <Toolbar className={classes.filterAppBar}>
          <FilterDropdown
            name="Genre"
            list={["horror", "comedy", "action", "Adventrue"]}
          />
          <SearchDropdown/>
          <FilterDropdown
            name="Industry"
            list={["Hollywood", "Bollywood"]}
          />
        </Toolbar>
      </AppBar>
      <Grid container justify="center" className={classes.children}>
        {children}
      </Grid>
    </>
  );
}

export default DashboardLayout;

