import './styles.css';
import React, { Component, PropTypes } from 'react';
import JsonNode from './JsonNode';
import Table from './Table';

export default class NestedJsonTable extends Table {
  
  static propTypes = {
    data: PropTypes.any.isRequired,
    expandAll: PropTypes.bool
  }
  
  constructor(props) {
    super(props);
  }

  render() {
    let { data, parentKey, expandAll } = this.props;
    
    data = this.ensureChildIsArray(data);
    this.ensureChildIsObject(data);
    
    let header = [];
    let rows = [];

    data.forEach((child, i) => {
      for (const key in child) {
        const n = Math.random();
        const obj = child[key];
        const childKey = `${parentKey}/${i}/${key}`;

        header.push(<th key={Math.random()}>{key}</th>);
        
        let o = [];
        if (this.isObject(obj)) {
          o = this.makeArray(obj);
        }
        if (this.isArray(obj) && obj.length > 0) {
          const modifiedArray = this.makeArrayForEach(obj);
          rows.push(
            <td key={n}>
              <JsonNode path={childKey} data={modifiedArray} expandAll={expandAll} />            
            </td>);
        } else {
          if (o.length > 0) {
            rows.push(
              <td key={n}>
                <JsonNode path={childKey} data={o} expandAll={expandAll} />            
              </td>);
          } else {
            rows.push(<td key={n}>{obj ? obj.toString() : ''}</td>);
          }
        }
      }
    });

    return (
      <div className="react-nested-json-table">
      <table><thead><tr>{header}</tr></thead>
        <tbody><tr>{rows}</tr></tbody>
      </table>
      </div>
    );
  } 
}
