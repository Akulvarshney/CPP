import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Logo from "../assets/logo.png";

import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    // height: "20",
    width: "50px",
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <AppBar position="fixed">
      <Toolbar style={{ justifyContent: "space-between" }}>
        {/* <Typography variant="h6" className={classes.title}>
          CPP
        </Typography> */}
        <img src={Logo} alt="" className={classes.logo} />
        <>
          {isAuth() ? (
            userType() === "recruiter" ? (
              <>
                <Button color="inherit" onClick={() => handleClick("/home")}>
                  Home
                </Button>
                <Button color="inherit" onClick={() => handleClick("/addjob")}>
                  Add Jobs
                </Button>
                <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                  My Jobs
                </Button>
                <Button
                  color="inherit"
                  onClick={() => handleClick("/resumebuilder")}
                >
                  Resume Builder
                </Button>
                <Button
                  color="inherit"
                  onClick={() => handleClick("/employees")}
                >
                  Employees
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")}>
                  Profile
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={() => handleClick("/home")}>
                  Home
                </Button>
                <Button
                  color="inherit"
                  onClick={() => handleClick("/applications")}
                >
                  Applications
                </Button>
                <Button
                  color="inherit"
                  onClick={() => handleClick("/resumebuilder")}
                >
                  Resume Builder
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")}>
                  Profile
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  Logout
                </Button>
              </>
            )
          ) : (
            <>
              <Button
                color="inherit"
                onClick={() => handleClick("/resumebuilder")}
              >
                Resume Builder
              </Button>
              <Button color="inherit" onClick={() => handleClick("/login")}>
                Login
              </Button>
              <Button color="inherit" onClick={() => handleClick("/signup")}>
                Signup
              </Button>
            </>
          )}
        </>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
