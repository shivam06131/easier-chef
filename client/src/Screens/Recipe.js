import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Paper,
} from "@material-ui/core";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    borderRadius: "10px",
    width: "94%",
    margin: "auto",
  },
  paper: {
    padding: "2%",
    marginTop: "3%",
    width: "90%",
    margin: "auto",
  },
  innerPaper: {
    marginTop: "2%",
    padding: "2% 0%",
    backgroundColor : "#F1FBF9"
  },
  parent : {
    marginTop : "5%"
  },
  container : {
    marginTop : "3%",
    backgroundColor : "#F8F9F0"
  }
}));

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      h4: {
        marginBottom: "4%",
      },
      h5: {
        margin: "3% 0%",
      },
    },
  },
});

const Recipe = () => {
  const classes = useStyles();
  const data = JSON.parse(localStorage.getItem("recipe"));
  console.log("data", data);
  return (
    <ThemeProvider theme={theme}>
      {data ? (
        <div>
          <Container maxWidth="sm" >
            {data.map((item , index) => {
              return (
                <Card key={index} className={classes.container}>
                  <CardContent>
                    <Typography variant="h4" align="center">
                      {item?.recipeName}
                    </Typography>
                    <CardMedia
                      className={classes.cardMedia}
                      image={item?.recipeImageUrl}
                    />
                    <Paper className={classes.paper}>
                      <Typography variant="h5" align="center">
                        Steps To Make
                      </Typography>
                      {item?.stepsToMake.map((steps, index) => {
                        return (
                          <Typography
                            key={index}
                            align="center"
                            variant="body1"
                          >
                            Step {index + 1} : {steps}
                          </Typography>
                        );
                      })}
                    </Paper>
                    <Paper className={classes.paper}>
                      <Typography variant="h5" align="center">
                        Ingridents
                      </Typography>
                      {item?.Addingredients.map((item, index) => {
                        return (
                          <Paper key={index} className={classes.innerPaper}>
                            <Typography align="center" variant="body1">
                              Ingredient Name: {item.ingredientsName}
                            </Typography>
                            <Typography align="center" variant="body1">
                              Ingredient Quantity: {item.quantity}
                            </Typography>
                            <Typography align="center" variant="body1">
                              Ingredient Unit: {item.unit}
                            </Typography>
                          </Paper>
                        );
                      })}
                    </Paper>
                  </CardContent>
                </Card>
              );
            })}
          </Container>
        </div>
      ) : (
        <Container className={classes.parent}>
        <Card maxWidth="sm">
          <CardContent>
            <Typography  variant="h4" align="center">NO Recipe availabel currently</Typography>
          </CardContent>
        </Card>
        </Container>
      )}
    </ThemeProvider>
  );
};

export default React.memo(Recipe);
