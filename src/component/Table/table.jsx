import React, { Component } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.css";

class TableComponent extends Component {
  render(props) {
    return (
      <div>
        <div>
          {this.props.rows && this.props.rows.length > 0 ? (
            <span className="spanclass">Detailed Transaction</span>
          ) : null}
          {this.props.rows && this.props.rows.length > 0 ? (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell align="right">Amount($)</TableCell>
                    <TableCell align="right">Rewards(Points)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>

                      <TableCell align="left">{row.date}</TableCell>
                      <TableCell align="right">{row.amount}</TableCell>
                      <TableCell align="right">{row.rewardPoints}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : null}
        </div>
        <div>
          {this.props.secondData && this.props.secondData.length > 0 ? (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Month</TableCell>
                    <TableCell>Amount($)</TableCell>
                    <TableCell align="right">RewardPoints(Points)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.secondData.map((row) => (
                    <TableRow
                      key={row.month}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.month}
                      </TableCell>

                      <TableCell align="left">{row.amount}</TableCell>
                      <TableCell align="right">{row.rewardPoints}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : null}
        </div>
      </div>
    );
  }
}
export default TableComponent;
