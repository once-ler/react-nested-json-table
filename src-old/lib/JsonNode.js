import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Table from './Table';

/* http://unicode-table.com/en/sets/arrows-symbols/ */
const glyphArrowUp = '\u25B2';
const glyphArrowDown = '\u25BC';
const glyphArrowRight = '\u25B6';

export default class JsonNode extends Component {
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
