import React from "react";
import {
  AppBar,
  Button,
  fade,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CenterFocusWeakIcon from "@material-ui/icons/CenterFocusWeak";
import { useHistory } from "react-router-dom";
import { handleNavigation } from "../../Utility/common";
import { signout } from "../../Redux/auth/authAction";
import { connect } from "react-redux";

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
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
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
    color: "#ffffff",
  },
  children: {
    backgroundColor: "#BA2F16",
  },
}));

function MainLayout({ signout, children }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={()=>{handleNavigation('/dashboard',history)}}
          >
            <CenterFocusWeakIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Trendy Shows
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Button
            className={classes.navItem}
            onClick={() => {
              handleNavigation("/user", history);
            }}
          >
            Profile
          </Button>
          <Button className={classes.navItem} onClick={signout}>
            Signout
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" className={classes.children}>
        {children}
      </Grid>
    </>
  );
}

var actions = {
  signout,
};
export default connect(null, actions)(MainLayout);
