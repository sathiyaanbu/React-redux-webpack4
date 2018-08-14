import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { fetchData, incrementPage, decrementPage } from "../actions/index";

import { Table, img } from "reactstrap";

class DataList extends Component {
  componentWillMount() {
    this.fetchFromAPI();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
      this.fetchFromAPI(nextProps.page);
    }
  }
  fetchFromAPI(page = this.props.page) {
    const request = axios.get(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    this.props.fetchData(request);
  }
  nextPage() {
    this.props.incrementPage();
  }
  previousPage() {
    this.props.decrementPage();
  }
  render() {
    const dataItems = this.props.results.map(result =>
      result.results.map(item => (
        <tr key={item.id}>
          <td>{item.id}</td>

          <td>
            <img style={{ width: "150px", height: "100px" }} src={item.image} />
          </td>

          <td>{item.name}</td>

          <td>{item.status}</td>

          <td>{item.species}</td>
        </tr>
      ))
    );

    return (
      <div>
        <div>
          <button
            className="next-btn"
            style={{
              float: "left",
              backgroundColor: "#53e0e0",
              borderRadius: "10px"
            }}
            onClick={() => this.previousPage()}
          >
            Pre ⬅️
          </button>
          <button
            className="next-btn"
            style={{
              float: "right",
              backgroundColor: "#53e0e0",
              borderRadius: "10px"
            }}
            onClick={() => this.nextPage()}
          >
            Next ➡️
          </button>
          <br />
          <br />
        </div>
        <Table bordered>
          <thead>
            <tr>
              <th>id</th>
              <th>Character image</th>
              <th>Name</th>
              <th>Status</th>
              <th>Species</th>
            </tr>
          </thead>
          <tbody>{dataItems}</tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  page: state.results.page,
  results: state.results.characters
});

export default connect(
  mapStateToProps,
  { fetchData, incrementPage, decrementPage }
)(DataList);
