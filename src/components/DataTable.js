import React, { Component } from "react";
import "./DataTable.css";

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      headings: this.props.headings,
    };
  }

  render() {
    return (
      <div>
        <h1 id="title">React Dynamic Table</h1>
        <table id="data">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderDataTable()}
          </tbody>
        </table>
      </div>
    );
  }

  renderDataTable() {
    return this.state.data.map((data) => {
      const { id, title, description, price } = data;
      return (
        <tr key={id}>
          <td>{title}</td>
          <td>{description}</td>
          <td>{price}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    return this.state.headings.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }
}

export default DataTable;
