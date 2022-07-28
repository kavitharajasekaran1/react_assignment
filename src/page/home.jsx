import React, { Component } from "react";
import Navbar from "../component/Navbar/navbar";
import Table from "../component/Table/table";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { getAllTransactions, addTransaction } from "../service";
import moment from "moment";

import "./home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      startDate: "",
      amount: 0,
      rewards: 0,
      row: [],
      resultobj: {},
      name: "",
      message: "",
      viewTable: false,
      secondData: [],
    };
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value, message: "" });
  }
  handleChange(event) {
    this.setState({ amount: event.target.value, message: "" });
  }
  Transaction() {
    return {
      name: this.state.name,
      date: moment(this.state.startDate).format("DD/MM/YYYY"),
      amount: this.state.amount,
    };
  }
  Add = async () => {
    if (
      this.state.name === "" ||
      this.state.date === "" ||
      this.state.amount === ""
    ) {
      alert("Please provide all the details");
    } else {
      let obj = this.Transaction();
      const addTransactionDetail = await addTransaction(obj);
      this.setState({
        message: addTransactionDetail,
        viewTable: !this.state.viewTable,
      });
    }
  };
  viewTransaction = async () => {
    this.setState({ row: [] });
    if (this.state.name === "") {
      alert("Please select name");
    } else {
      const getAllTransactionsDetails = await getAllTransactions(
        this.state.name
      );
      console.log(getAllTransactionsDetails, "in front end");
      if (
        getAllTransactionsDetails[0] &&
        getAllTransactionsDetails[0].length > 0
      ) {
        this.setState({
          row: getAllTransactionsDetails[0],
          secondData: getAllTransactionsDetails[1],
          message: "",
          startDate: "",
          amount: 0,
          viewTable: !this.state.viewTable,
        });
      } else {
        this.setState({
          message: "No data available in the system",
          viewTable: false,
        });
      }
    }
  };

  render() {
    return (
      <div>
        <Navbar Heading={"Rewards Details"} />
        <div className="spacing">
          <InputLabel>Name</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.state.name}
            label="Name"
            className="width"
            onChange={(event) => this.handleNameChange(event)}
          >
            <MenuItem value={"Marry"}>Marry</MenuItem>
            <MenuItem value={"Peter"}>Peter</MenuItem>
            <MenuItem value={"John"}>John</MenuItem>
          </Select>
          <div className="transaction">
            <DatePicker
              className="datepicker"
              minDate={moment().toDate()}
              selected={this.state.startDate}
              onChange={(date: Date) => this.setState({ startDate: date })}
            />
            <Stack spacing={2} direction="row">
              <input
                className="input"
                type="text"
                onChange={(event) => this.handleChange(event)}
              />
              <Button variant="contained" onClick={() => this.Add()}>
                Add{" "}
              </Button>
            </Stack>
          </div>
          <div className="message">
            {this.state.message !== "" ? (
              <span>{this.state.message}</span>
            ) : null}
          </div>
          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={() => this.viewTransaction()}>
              View Transaction
            </Button>
          </Stack>

          {this.state.message !== "No data available in the system" ? (
            <Table secondData={this.state.secondData} />
          ) : null}
          {this.state.message !== "No data available in the system" ? (
            <Table rows={this.state.row} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Home;
