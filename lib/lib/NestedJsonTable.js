'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./styles.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _JsonNode = require('./JsonNode');

var _JsonNode2 = _interopRequireDefault(_JsonNode);

var _Table2 = require('./Table');

var _Table3 = _interopRequireDefault(_Table2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NestedJsonTable = function (_Table) {
  _inherits(NestedJsonTable, _Table);

  function NestedJsonTable(props) {
    _classCallCheck(this, NestedJsonTable);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NestedJsonTable).call(this, props));
  }

  _createClass(NestedJsonTable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var children = _props.children;
      var parentKey = _props.parentKey;


      children = this.ensureChildIsArray(children);
      this.ensureChildIsObject(children);

      var header = [];
      var rows = [];

      children.forEach(function (child, i) {
        for (var key in child) {
          var n = Math.random();
          var obj = child[key];
          var childKey = parentKey + '/' + i + '/' + key;

          header.push(_react2.default.createElement(
            'th',
            { key: Math.random() },
            key
          ));

          var o = [];
          if (_this2.isObject(obj)) {
            o = _this2.makeArray(obj);
          }
          if (_this2.isArray(obj) && obj.length > 0) {
            var modifiedArray = _this2.makeArrayForEach(obj);
            rows.push(_react2.default.createElement(
              'td',
              { key: n },
              _react2.default.createElement(_JsonNode2.default, { path: childKey, children: modifiedArray })
            ));
          } else {
            if (o.length > 0) {
              rows.push(_react2.default.createElement(
                'td',
                { key: n },
                _react2.default.createElement(_JsonNode2.default, { path: childKey, children: o })
              ));
            } else {
              rows.push(_react2.default.createElement(
                'td',
                { key: n },
                obj.toString()
              ));
            }
          }
        }
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
          _react2.default.createElement(
            'tr',
            null,
            rows
          )
        )
      );
    }
  }]);

  return NestedJsonTable;
}(_Table3.default);

NestedJsonTable.propTypes = {
  children: _react.PropTypes.any.isRequired
};
exports.default = NestedJsonTable;