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
/*
const customers = [
  {
    id: "1",
    image: "https://placeimg.com/64/64/1",
    name: "Sun",
    date: "1976.02.08",
    money: "20,000",
    interest: "0.1",
  },
  {
    id: "2",
    image: "https://placeimg.com/64/64/2",
    name: "Moon",
    date: "1996.12.31",
    money: "+2900",
    interest: "0.1",
  },
  {
    id: "3",
    image: "https://placeimg.com/64/64/3",
    name: "Star2",
    date: "2010.01.07",
    money: "1,000",
    interest: "0.1",
  },
  {
    id: "4",
    image: "https://placeimg.com/64/64/4",
    name: "Star3",
    date: "2014.08.18",
    money: "20,000",
    interest: "0.1",
  },
];
*/
class App extends Component {
  state = {
    customers: "",
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/customers");
    const body = await response.json();
    return body;
  };

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
              <TableCell>Date</TableCell>
              <TableCell>Money</TableCell>
              <TableCell>Interest</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers
              ? this.state.customers.map((c) => {
                  return (
                    <Customer
                      key={c.id}
                      id={c.id}
                      image={c.image}
                      name={c.name}
                      date={c.date}
                      money={c.money}
                      interest={c.interest}
                    />
                  );
                })
              : ""}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
