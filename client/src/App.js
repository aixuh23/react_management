import React, { Component } from "react";
import Customer from "./components/Customer";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

const customer = [
  {
    id: "0",
    image: "https://placeimg.com/64/64/1",
    name: "Jenna",
    birthday: "1999.06.23",
    gender: "female",
    job: "student",
  },
  {
    id: "1",
    image: "https://placeimg.com/64/64/2",
    name: "Kim",
    birthday: "1999.06.23",
    gender: "female",
    job: "programmer",
  },
  {
    id: "2",
    image: "https://placeimg.com/64/64/3",
    name: "Lee",
    birthday: "1999.06.23",
    gender: "male",
    job: "designer",
  },
];

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Birthday</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customer.map((c) => {
              return (
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);