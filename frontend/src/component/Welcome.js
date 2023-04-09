import { Grid, Typography } from "@material-ui/core";

const Welcome = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", overflowY: "hidden" }}
    >
      <Grid
        container
        item
        alignItems="center"
        justify="center "
        direction="column"
      >
        <Typography variant="h2" style={{ color: "#7149C6" }}>
          Welcome to CPP
        </Typography>
        <Typography variant="h5" style={{ color: "white" }}>
          Find your Job here!!!!
        </Typography>
      </Grid>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
