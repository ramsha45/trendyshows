import {
  Avatar,
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import MainLayout from "../../Views/MainLayout/MainLayout";
import { updateUser } from "../../Redux/auth/authAction";

const useStyles = makeStyles((theme) => ({
  userDetails: {
    boxSizing: "border-box",
    padding: "19px 19px",
    color: "white",
  },
  avatar: {
    height: 100,
    width: 100,
  },
}));

function User({ auth }) {
  // const [credentials, setCredentials] = useState({
  //   userName: "",
  //   gender: "",
  // });
  // const { userName, gender } = credentials;
  // const handleFormInput = (e) => {
  //   const { name, value } = e.target;
  //   setCredentials((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };


  const classes = useStyles();
  return (
    <MainLayout>
      <Grid
        className={classes.userDetails}
        item
        container
        justify="center"
        xs={12}
      >
        <Avatar className={classes.avatar} />
      </Grid>
      <Grid
        className={classes.userDetails}
        item
        container
        justify="center"
        xs={12}
        md={4}
        spacing={4}
      >
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            fullWidth
            placeholder="New UserName"
            label={auth.userName}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            fullWidth
            placeholder="New email"
            label="Gender"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained" color="primary">
            Update
          </Button>
        </Grid>
        <Grid item xs={12}>
        </Grid>

      </Grid>
    </MainLayout>
  );
}


var action = {
  updateUser
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps,action)(User);
