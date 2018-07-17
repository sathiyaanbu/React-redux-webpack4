import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index';

import { Table, img } from 'reactstrap';

class DataList extends Component {
  componentWillMount() {
    this.props.fetchData();
  }
  render() {
    const dataItems = this.props.results.map(result =>
      result.results.map(item => (
        <tr key={item.id}>
          <td>{item.id}</td>

          <td>
            <img style={{ width: '150px', height: '100px' }} src={item.image} />
          </td>

          <td>{item.name}</td>

          <td>{item.status}</td>

          <td>{item.species}</td>
        </tr>
      ))
    );

    return (
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
    );
  }
}

const mapStateToProps = state => ({
  results: state.results
});

export default connect(mapStateToProps, { fetchData })(DataList);
