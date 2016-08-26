'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Table = require('./Table');

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* http://unicode-table.com/en/sets/arrows-symbols/ */
var glyphArrowUp = '▲';
var glyphArrowDown = '▼';
var glyphArrowRight = '▶';

var JsonNode = function (_Component) {
  _inherits(JsonNode, _Component);

  function JsonNode(props) {
    _classCallCheck(this, JsonNode);

    var _this = _possibleConstructorReturn(this, (JsonNode.__proto__ || Object.getPrototypeOf(JsonNode)).call(this, props));

    var path = props.path;
    var expandAll = props.expandAll;


    var newState = _defineProperty({}, path, { display: { 'divCollapsible--hide': expandAll ? false : true }, spanGlyph: { 'spanGlyph--expand': true }, expander: expandAll ? glyphArrowDown : glyphArrowRight });
    _this.state = Object.assign(newState, { expanded: expandAll || false });
    return _this;
  }

  _createClass(JsonNode, [{
    key: 'handleClick',
    value: function handleClick(id) {
      if (!this.state.expanded) {
        this.setState(_defineProperty({}, id, { display: { 'divCollapsible--hide': false }, spanGlyph: { 'spanGlyph--expand': true }, expander: glyphArrowDown }));
      } else {
        this.setState(_defineProperty({}, id, { display: { 'divCollapsible--hide': true }, spanGlyph: { 'spanGlyph--expand': true }, expander: glyphArrowRight }));
      }
      this.setState({ expanded: !this.state.expanded });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var data = _props.data;
      var path = _props.path;
      var expandAll = _props.expandAll;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'span',
          { className: (0, _classnames2.default)(this.state[path].spanGlyph), onClick: this.handleClick.bind(this, path) },
          this.state[path].expander
        ),
        ' ',
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(this.state[path].display) },
          _react2.default.createElement(_Table2.default, { data: data, parentKey: path, expandAll: expandAll })
        )
      );
    }
  }]);

  return JsonNode;
}(_react.Component);

JsonNode.propTypes = {
  data: _react.PropTypes.any,
  path: _react.PropTypes.string,
  expandAll: _react.PropTypes.bool
};
exports.default = JsonNode;