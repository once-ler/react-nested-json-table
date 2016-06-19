import React, { Component } from 'react';
import NestedJsonTable from '../src';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { "1": ["2", "3"]}, {"foo": 'bar'}, 
        { "top-level-variant": [ 1, "abc", { "variant": 3.25 } ] }, 
          {"foo1": { "foo2": "phoey", "foo3": "buz" } }, 
          {"foo2-1": { "foo4": { "foo4-1": "phoey", "foo4-2": "buz" } } }, 
          { "nested": { "nested-arr": [
            {"simple": "object"}, 
            {"another-simple": "object"}, 
            { "crazy": ["1", 2, true, { "object": "3" }] } ] } 
          },
          { "attr0": "val0", 
            "attr1": [{"key-0": "foo", "key-1": "bar"}], 
            "attr2": ["mem-0", "mem-1"]
          }
      ],
      data2: [{"foo": 'bar'}, { "nested": { "nested-arr": [{"simple": "object"}, {"another-simple": "object"}, { "arr": ["1", 2, { "variant": "3" }] } ] } }, 
      { "attr0": 6789, "attr1": [{"key-0": "foo", "key-1": "bar"}], "attr2": ["mem-0", "mem-1"]}],
      data3: { "plain": { "object": 1 } },
      data4: "Just a string",
      data5: true
    }
  }
 
  render() {
    return (
      <div>        
        {this.state.data && (() =>
          <NestedJsonTable children={this.state.data} />
        )()}
      </div>
    );
  }
}
