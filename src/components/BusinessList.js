import React from 'react';
import Business from './Business';
import './stylesheet/BusinessList.css';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    );
  }
};

export default BusinessList;