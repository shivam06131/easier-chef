import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Paper,
  Button,
  Container,
  Grid,
} from "@material-ui/core";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { FieldArray, Formik, Field, Form } from "formik";
// import * as Yup from "yup";

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      outlined: {
        backgroundColor: "#f8feff",
      },
    },
    MuiCardContent: {
      root: {
        backgroundColor: "#eafdff",
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  heading: {
    marginBottom: "2%",
  },
  textField: {
    width: "80%",
    margin: "auto",
    marginTop: "2%",
  },
  stepsToMakeButton: {
    width: "30%",
    margin: "2% 10%",
  },
  paper: {
    margin: "2% 0% ",
  },
  container: {
    marginTop: "2%",
    marginBottom: "4%",
  },
}));

const Dashboard = () => {
  const initialValues = {
    recipeName: "",
    recipeImageUrl: "",
    stepsToMake: [""],
    Addingredients: [
      {
        ingredientsName: "",
        quantity: "",
        unit: "",
      },
    ],
  };

  const onSubmit = (values) => {
    console.log(JSON.stringify(values));
  };

  const classes = useStyles();

  // const validationSchema = Yup.object().shape({
  //   recipeName: Yup.String()
  //     .min(2, "To short!")
  //     .required("recipeName is Required!"),
  //   recipeImageUrl: Yup.String()
  //     .required("ImageUrl is Required!!!")
  //     .min(10, "Too short"),
  //   stepsToMake: Yup.array()
  //     .required("stepsToMake is required!!")
  //     .min(2, "Too short"),
  //   Addingredients: Yup.array()
  //     .of(
  //       Yup.object.shape({
  //         ingredientsName: Yup.String()
  //           .required("ingredientsName is Requird")
  //           .min(2, "Too short"),
  //         quantity: Yup.number().required("quantity is Required!"),
  //         unit: Yup.number().required("unit is Required!"),
  //       })
  //     )
  //     .required("Addingredients is required"),
  // });

  // const validationSchema = (values) => {
  //   const errors = {};
  //   console.log("values", values.recipeName.length < 2);

  //   if (!values.recipeName) {
  //     errors.recipeName = "recipeName is requird!!";
  //   } else if (values.recipeName.length < 2) {
  //     errors.recipeName = "recipeName should be greater than 2 characters";
  //   }

  //   if (!values.recipeImageUrl) {
  //     errors.recipeImageUrl = "recipeImageUrl is requird!!";
  //   } else if (values.recipeImageUrl.length <= 10) {
  //     errors.recipeImageUrl =
  //       "recipeImageUrl should be greater than 10 characters";
  //   }
  //   console.log("error" , errors)
  // };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" className={classes.container}>
        <div>
          <Card>
            <CardContent>
              <Typography
                variant="h4"
                align="center"
                className={classes.heading}
              >
                Create Your Own Recipe
              </Typography>
              <div>
                <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  // validate={validationSchema}
                  // validationSchema={validationSchema}
                >
                  <Form>
                    <Grid container spacing={3} justify="space-around">
                      <Grid item xs={12} sm={10}>
                        <div>
                          <Field
                            as={TextField}
                            variant="outlined"
                            fullWidth
                            label="recipe Name"
                            placeholder="redipe Name"
                            name="recipeName"
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={10}>
                        <div>
                          <Field
                            as={TextField}
                            variant="outlined"
                            fullWidth
                            label="Recipe url"
                            placeholder="Recipe url"
                            name="recipeImageUrl"
                          />
                        </div>
                      </Grid>
                      <Grid item xs={10} sm={9}>
                        <Paper className={classes.paper} variant="outlined">
                          <Typography variant="h6" align="center">
                            Steps to make
                          </Typography>
                          <div className={classes.textField}>
                            <FieldArray name="stepsToMake">
                              {(fieldArrayProps) => {
                                const { push, remove, form } = fieldArrayProps;
                                const { values } = form;
                                const { stepsToMake } = values;
                                return (
                                  <div>
                                    {stepsToMake.map((item, index) => (
                                      <div key={index}>
                                        <Field
                                          as={TextField}
                                          name={`stepsToMake[${index}]`}
                                          placeholder="stpes to make"
                                          fullWidth
                                          label="stpes to make"
                                          variant="outlined"
                                        />
                                        {index >= 1 && (
                                          <Button
                                            className={
                                              classes.stepsToMakeButton
                                            }
                                            variant="contained"
                                            color="primary"
                                            onClick={() => remove(index)}
                                          >
                                            -
                                          </Button>
                                        )}
                                        <Button
                                          className={classes.stepsToMakeButton}
                                          variant="contained"
                                          color="primary"
                                          onClick={() => push("")}
                                        >
                                          +
                                        </Button>
                                      </div>
                                    ))}
                                  </div>
                                );
                              }}
                            </FieldArray>
                          </div>
                        </Paper>
                      </Grid>
                      <Grid item xs={10} sm={9}>
                        <Paper className={classes.paper} variant="outlined">
                          <div>
                            <Typography variant="h6" align="center">
                              Add ingredients
                            </Typography>
                            <FieldArray name="Addingredients">
                              {(fieldArrayProps) => {
                                const { push, remove, form } = fieldArrayProps;
                                const { values } = form;
                                const { Addingredients } = values;
                                console.log(Addingredients);
                                return (
                                  <div>
                                    {Addingredients.map(
                                      (ingredients, index) => (
                                        <div key={index}>
                                          <div className={classes.textField}>
                                            <Field
                                              as={TextField}
                                              name={`Addingredients[${index}].ingredientsName`}
                                              label="Ingredients Name"
                                              placeholder="Ingredients Name"
                                              fullWidth
                                              variant="outlined"
                                            />
                                          </div>
                                          <div className={classes.textField}>
                                            <Field
                                              as={TextField}
                                              name={`Addingredients[${index}].quantity`}
                                              label="Quantity"
                                              placeholder="Quantity"
                                              fullWidth
                                              variant="outlined"
                                            />
                                          </div>
                                          <div className={classes.textField}>
                                            <Field
                                              as={TextField}
                                              name={`Addingredients[${index}].unit`}
                                              label="Unit"
                                              placeholder="Unit"
                                              fullWidth
                                              variant="outlined"
                                            />
                                            {index >= 1 && (
                                              <Button
                                                className={
                                                  classes.stepsToMakeButton
                                                }
                                                variant="contained"
                                                color="primary"
                                                onClick={() => remove(index)}
                                              >
                                                -
                                              </Button>
                                            )}
                                            <Button
                                              className={
                                                classes.stepsToMakeButton
                                              }
                                              variant="contained"
                                              color="primary"
                                              onClick={() => push("")}
                                            >
                                              +
                                            </Button>
                                          </div>
                                        </div>
                                      )
                                    )}
                                  </div>
                                );
                              }}
                            </FieldArray>
                          </div>
                        </Paper>
                      </Grid>
                      <Grid item sm={8} xs={10}>
                        <Button
                          fullWidth
                          color="secondary"
                          variant="outlined"
                          type="submit"
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                </Formik>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default Dashboard;
