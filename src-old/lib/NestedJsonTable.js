import './styles.css';
import React, { Component, PropTypes } from 'react';
import JsonNode from './JsonNode';
import Table from './Table';

export default class NestedJsonTable extends Table {
  
  static propTypes = {
    children: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { children, parentKey } = this.props;
    this.ensureChildIsObject(children);

    let header = [];
    let rows = [];

    children.forEach((child, i) => {
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
              <JsonNode path={childKey} children={modifiedArray} />            
            </td>);
        } else {
          if (o.length > 0) {
            rows.push(
              <td key={n}>
                <JsonNode path={childKey} children={o} />            
              </td>);
          } else {
            rows.push(<td key={n}>{obj.toString()}</td>);
          }
        }
      }
    });

    return (
      <table><thead><tr>{header}</tr></thead>
        <tbody><tr>{rows}</tr></tbody>
      </table>
    );
  } 
}
