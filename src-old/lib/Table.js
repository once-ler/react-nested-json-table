import React, { Component, PropTypes } from 'react';
import JsonNode from './JsonNode';

/*
 *  @description Child node table creator
 */
export default class Table extends Component {

  static propTypes = {
    children: PropTypes.array.isRequired,
    parentKey: PropTypes.string
  }

  static defaultProps = {
    parentKey: 'root'
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
    * @reference jQuery.makeArray
  **/
  makeArray(arr, results) {
    var ret = results || [];

    if (arr != null) {
      if (this.isArray(Object(arr))) {
        Object.assign(ret, typeof arr === "string" ? [arr] : arr);
      } else {
        [].push.call(ret, arr);
      }
    }

    return ret;
  }

  /**
    * @reference underscore.isObject
  **/
  isObject(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }

  isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }

  //create object if value is not object or array
  ensureChildIsObject(children) {
    for(const k in children){
      let ty = typeof children[k];
      
      if (ty.search(/^string|number|boolean|function$/i) != -1) {
        const r = {
          // [ty.toString()]: children[k]
          [`${children.length.toString()} items`]: children[k]
          // ["collection"]: children[k]
        };
        children[k] = r;
      }
    }
  }

  // create array from object for each member in an array
  makeArrayForEach(children) {
    return children.map(child => {
      if (this.isObject(child)) {
        return this.makeArray(child);
      }
      return child;
    });
  }
 
  render() {
    const { children, parentKey } = this.props;
    
    this.ensureChildIsObject(children);

    let header = [];
    let rows = [];
    Object.keys(children[0]).forEach(d => header.push(<th key={Math.random()}>{isNaN(d) ? d : 'collection'}</th>));
    
    children.forEach((child, i) => {
      let curRow = [];        
      for (const key in child) {
        const n = Math.random();
        const obj = child[key];
        const childKey = `${parentKey}/${i}/${key}`;

        let o = [];
        if (this.isObject(obj)) {
          o = this.makeArray(obj);
        }
        let newChild = [];
        if (this.isArray(obj) && obj.length > 0) {
          // if a collection is a variant, make the object an array (ie. const node = [{ 1, "2", { "variant": 3.0 } }])
          const modifiedArray = this.makeArrayForEach(obj);          
          newChild.push(
            <td key={Math.random()}>
              <JsonNode path={childKey} children={modifiedArray} />          
            </td>);
        } else {
          if (o.length > 0) {
            newChild.push(<td key={Math.random()}>
              <JsonNode path={childKey} children={o} />            
            </td>);
          } else {
            newChild.push(<td key={Math.random()}>{obj.toString()}</td>);
          }
        }
        curRow.push(newChild);
      }
      rows.push(<tr key={Math.random()}>{curRow}</tr>);
    });

    return (
      <table><thead><tr>{header}</tr></thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}
