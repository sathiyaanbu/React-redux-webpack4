import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index';

class DataList extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    const dataItems = this.props.results.map(data => (
      <tr key={data.id}>
        <td>{data.id}</td>
        <td>
          <img style={{ width: '150px', height: '100px' }} src={data.image} />
        </td>
        <td>{data.name}</td>
        <td>{data.status}</td>
        <td>{data.species}</td>
      </tr>
    ));

    return (
      <table className="table table-hover">
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
      </table>
    );
  }
}

const mapStateToProps = state => ({
  results: state.results
});

export default connect(mapStateToProps, { fetchData })(DataList);
