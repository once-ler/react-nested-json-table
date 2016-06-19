react-nested-json-table
=======================
A simple React component that renders any deeply nested json into a collapsible table

#####Turn this deeply nested json:

```javascript
[
  { "foo": 'bar' }, 
  { 
    "nested": { "nested-arr": [
      { "simple": "object" }, 
      { "another-simple": "object" }, 
      { "arr": ["1", 2, { "variant": "3" }] } ] } 
  }, 
  { 
    "attr0": 6789, 
    "attr1": [{"key-0": "foo", "key-1": "bar"}], 
    "attr2": ["mem-0", "mem-1"]
  }
]
```

#####Into this:
![react-nested-json-table](https://github.com/once-ler/react-nested-json-table/blob/master/static/images/react-nested-json-table.gif)
