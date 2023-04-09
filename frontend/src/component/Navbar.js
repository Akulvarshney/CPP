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
  button: {
    color: "white",
    "&:hover": {
      color: "#7149C6",
    },
  },
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
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "transparent",
        borderBottom: "1mm solid #7149C6",
      }}
    >
      <Toolbar style={{ justifyContent: "space-between" }}>
        <a href="/">
          <img src={Logo} alt="" className={classes.logo} />
        </a>
        {/* <Typography variant="h6" className={classes.title}>
          CPP
        </Typography> */}

        <div>
          {isAuth() ? (
            userType() === "recruiter" ? (
              <div>
                <Button
                  className={classes.button}
                  onClick={() => handleClick("/home")}
                >
                  Home
                </Button>
                <Button
                  className={classes.button}
                  onClick={() => handleClick("/addjob")}
                >
                  Add Jobs
                </Button>
                <Button
                  className={classes.button}
                  onClick={() => handleClick("/myjobs")}
                >
                  My Jobs
                </Button>
                <Button
                  className={classes.button}
                  onClick={() => handleClick("/resumebuilder")}
                >
                  Resume Builder
                </Button>
                <Button
                  className={classes.button}
                  onClick={() => handleClick("/employees")}
                >
                  Employees
                </Button>
                <Button
                  className={classes.button}
                  onClick={() => handleClick("/profile")}
                >
                  Profile
                </Button>
                <Button
                  className={classes.button}
                  onClick={() => handleClick("/logout")}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div>
                <Button
                  className={classes.button}
                  onClick={() => handleClick("/home")}
                >
                  Home
                </Button>
                <Button
                  className={classes.button}
                  onClick={() => handleClick("/applications")}
                >
                  Applications
                </Button>
                <Button
                  className={classes.button}
                  onClick={() => handleClick("/resumebuilder")}
                >
                  Resume Builder
                </Button>
                <Button
                  className={classes.button}
                  onClick={() => handleClick("/profile")}
                >
                  Profile
                </Button>
                <Button
                  className={classes.button}
                  onClick={() => handleClick("/logout")}
                >
                  Logout
                </Button>
              </div>
            )
          ) : (
            <div>
              <Button
                className={classes.button}
                onClick={() => handleClick("/resumebuilder")}
              >
                Resume Builder
              </Button>
              <Button
                className={classes.button}
                onClick={() => handleClick("/login")}
              >
                Login
              </Button>
              <Button
                className={classes.button}
                onClick={() => handleClick("/signup")}
              >
                Signup
              </Button>
            </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
