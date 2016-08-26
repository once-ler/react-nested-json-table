'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _JsonNode = require('./JsonNode');

var _JsonNode2 = _interopRequireDefault(_JsonNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 *  @description Child node table creator
 */
var Table = function (_Component) {
  _inherits(Table, _Component);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    _this.state = {};
    return _this;
  }

  /**
    * @reference jQuery.makeArray
  **/


  _createClass(Table, [{
    key: 'makeArray',
    value: function makeArray(arr, results) {
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

  }, {
    key: 'isObject',
    value: function isObject(obj) {
      var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
      return type === 'function' || type === 'object' && !!obj;
    }
  }, {
    key: 'isArray',
    value: function isArray(obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    }

    // create object if value is not object or array

  }, {
    key: 'ensureChildIsObject',
    value: function ensureChildIsObject(data) {
      for (var k in data) {
        var ty = _typeof(data[k]);

        if (ty.search(/^string|number|boolean|function$/i) != -1) {
          var r = _defineProperty({}, data.length.toString() + ' items', data[k]);
          data[k] = r;
        }
      }
    }

    // create array from object for each member in an array

  }, {
    key: 'makeArrayForEach',
    value: function makeArrayForEach(data) {
      var _this2 = this;

      return data.map(function (child) {
        if (_this2.isObject(child)) {
          return _this2.makeArray(child);
        }
        return child;
      });
    }

    // make sure the passed in data property is an array

  }, {
    key: 'ensureChildIsArray',
    value: function ensureChildIsArray(data) {
      if (!this.isArray(data)) {
        return [data];
      }
      return data;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props;
      var data = _props.data;
      var parentKey = _props.parentKey;
      var expandAll = _props.expandAll;


      this.ensureChildIsObject(data);

      var header = [];
      var rows = [];
      Object.keys(data[0]).forEach(function (d) {
        return header.push(_react2.default.createElement(
          'th',
          { key: Math.random() },
          isNaN(d) ? d : 'collection'
        ));
      });

      data.forEach(function (child, i) {
        var curRow = [];
        for (var key in child) {
          var obj = child[key];
          var childKey = parentKey + '/' + i + '/' + key;

          var o = [];
          if (_this3.isObject(obj)) {
            o = _this3.makeArray(obj);
          }
          var newChild = [];
          if (_this3.isArray(obj) && obj.length > 0) {
            // if a collection is a variant, make the object an array (ie. const node = [{ 1, "2", { "variant": 3.0 } }])
            var modifiedArray = _this3.makeArrayForEach(obj);
            newChild.push(_react2.default.createElement(
              'td',
              { key: Math.random() },
              _react2.default.createElement(_JsonNode2.default, { path: childKey, data: modifiedArray, expandAll: expandAll })
            ));
          } else {
            if (o.length > 0) {
              newChild.push(_react2.default.createElement(
                'td',
                { key: Math.random() },
                _react2.default.createElement(_JsonNode2.default, { path: childKey, data: o, expandAll: expandAll })
              ));
            } else {
              newChild.push(_react2.default.createElement(
                'td',
                { key: Math.random() },
                obj ? obj.toString() : ''
              ));
            }
          }
          curRow.push(newChild);
        }
        rows.push(_react2.default.createElement(
          'tr',
          { key: Math.random() },
          curRow
        ));
      });

      return _react2.default.createElement(
        'table',
        null,
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            header
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          rows
        )
      );
    }
  }]);

  return Table;
}(_react.Component);

Table.propTypes = {
  data: _react.PropTypes.array.isRequired,
  parentKey: _react.PropTypes.string,
  expandAll: _react.PropTypes.bool
};
Table.defaultProps = {
  parentKey: 'root'
};
exports.default = Table;