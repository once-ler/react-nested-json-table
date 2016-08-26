import './styles.css';
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames'

/* http://unicode-table.com/en/sets/arrows-symbols/ */
const glyphArrowUp = '\u25B2';
const glyphArrowDown = '\u25BC';
const glyphArrowRight = '\u25B6';

class JsonNode extends Component {
  static propTypes = {
    children: PropTypes.any,
    path: PropTypes.string
  }

  constructor(props) {
    super(props);
    let {path} = props;
    const newState = { [path]: { display: {'divCollapsible--hide': true}, spanGlyph: {'spanGlyph--expand': true}, expander: glyphArrowRight } };
    this.state = Object.assign(newState, {expanded: false});    
  }

  handleClick(id) {
    // if (this.state[id].display['divCollapsible--hide']) {
    if (!this.state.expanded) {
      this.setState({[id]: { display: {'divCollapsible--hide': false}, spanGlyph: {'spanGlyph--expand': true}, expander: glyphArrowDown }});
    } else {
      this.setState({[id]: { display: {'divCollapsible--hide': true}, spanGlyph: {'spanGlyph--expand': true}, expander: glyphArrowRight }});
    }
    this.setState({ expanded: !this.state.expanded });    
  }

  render() {
    const { children, path } = this.props;

    return (
      <div>
      <span className={classNames(this.state[path].spanGlyph)} onClick={this.handleClick.bind(this, path)}>{this.state[path].expander}</span>{' '}
        <div className={classNames(this.state[path].display)} >
          <Table children={children} parentKey={path} />
        </div>              
      </div>
    );
  }
}

/*
  @description Child node table creator
 */
class Table extends Component {

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
    // this.setupInitialToggleState();
  }

  /*
  setupInitialToggleState() {
    const { children, parentKey } = this.props;
    
    children.forEach((child, i) => {
      for (const key in child) {
        const obj = child[key];
        const childKey = `${parentKey}/${i}/${key}`;
        if (this.isObject(obj) || this.isArray(obj)) {
          this.state[childKey] = { display: {'divCollapsible--hide': true}, spanGlyph: {'spanGlyph--expand': true}, expander: glyphArrowRight };
        }
      }
    });
  }
  */
 
/*
  handleClick(id, event) {
    // console.log([id, this.state[id]]);
    if (this.state[id].display['divCollapsible--hide']) {
      // console.log('Showing ' + id);
      this.setState({[id]: { display: {'divCollapsible--hide': false}, spanGlyph: {'spanGlyph--expand': true}, expander: glyphArrowDown }});
    } else {
      // console.log(this.state[id].display);
      // console.log('Hiding ' + id);
      this.setState({[id]: { display: {'divCollapsible--hide': true}, spanGlyph: {'spanGlyph--expand': true}, expander: glyphArrowRight }});
    }
  }
*/  
  extend(obj1, obj2) {  
    var obj3 = {};
    for (var attrname in obj1) {
      obj3[attrname] = obj1[attrname];
    }
    for (var attrname in obj2) {
      obj3[attrname] = obj2[attrname];
    }
    return obj3;
  }
  
  /**
    @reference jQuery.makeArray
  **/
  makeArray(arr, results) {
    var ret = results || [];

    if (arr != null) {
      if (this.isArray(Object(arr))) {
        this.extend(ret, typeof arr === "string" ? [arr] : arr);
        // Object.assign(ret, typeof arr === "string" ? [arr] : arr);
      } else {
        [].push.call(ret, arr);
      }
    }

    return ret;
  }

  /**
    @reference underscore.isObject
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
          // [`${children.length.toString()} items`]: children[k]
          ["collection"]: children[k]
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

  /*
  shouldComponentUpdate(nextProps, nextState) {
    console.log(['shouldComponentUpdate', this.state, nextState]);
    return true;
  }
  */
 
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
          newChild.push(<td key={Math.random()}>
            <JsonNode path={childKey} children={modifiedArray} />
            {/*
            <div>
              <span className={classNames(this.state[childKey].spanGlyph)} onClick={this.handleClick.bind(this, childKey)}>{this.state[childKey].expander}</span>{' '}
              <div className={classNames(this.state[childKey].display)}>
                <Table children={modifiedArray} parentKey={childKey} />
              </div>              
            </div>
            */}           
            </td>);
        } else {
          if (o.length > 0) {
            newChild.push(<td key={Math.random()}>
              <JsonNode path={childKey} children={o} />
            {/*
            <div>
              <span className={classNames(this.state[childKey].spanGlyph)} onClick={this.handleClick.bind(this, childKey)}>{this.state[childKey].expander}</span>{' '}
              <div className={classNames(this.state[childKey].display)}>
                <Table children={o} parentKey={childKey} />
              </div>              
            </div>
            */}
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
  } //render()
}

class NestedJsonTable extends Table {
  
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
          rows.push(<td key={n}>
            <JsonNode path={childKey} children={modifiedArray} />
            {/*
            <div>
              <span className={classNames(this.state[childKey].spanGlyph)} onClick={this.handleClick.bind(this, childKey)}>{this.state[childKey].expander}</span>{' '}
              <div className={classNames(this.state[childKey].display)} >
                <Table children={modifiedArray} parentKey={childKey} />
              </div>              
            </div>
            */}
            </td>);
        } else {
          if (o.length > 0) {
            rows.push(<td key={n}>
            <JsonNode path={childKey} children={o} />
            {/*
            <div>
              <span className={classNames(this.state[childKey].spanGlyph)} onClick={this.handleClick.bind(this, childKey)}>{this.state[childKey].expander}</span>{' '}
              <div className={classNames(this.state[childKey].display)} >
                <Table children={o} parentKey={childKey} />
              </div>              
            </div>
            */}
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

export default NestedJsonTable;
