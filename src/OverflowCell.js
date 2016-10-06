import React from 'react';

class OverflowCell extends React.Component {

  componentDidMount() {
    this.checkFocus();
  }

  componentDidUpdate() {
    this.checkFocus();
  }

  checkFocus() {
    if (this.isSelected()) {
      ReactDOM.findDOMNode(this).focus();
    }
  }

  isSelected() {
    let meta = this.props.cellMetaData;
    if (meta == null) { return false; }

    return (
      meta.selected
      && meta.selected.rowIdx === this.props.idx && meta.selected.idx === this.props.idx
    );
  }

  getStyle() {
    let style = {
      position: 'absolute',
      width: this.props.column.width,
      height: this.props.height,
      left: this.props.column.left,
      border: '1px solid #eee'
    };
    return style;
  }

  render() {
    return (<div tabIndex="-1" style={this.getStyle() } width="100%" className="react-grid-Cell"></div>);
  }
}

OverflowCell.propTypes = {
  rowIdx: React.PropTypes.number,
  idx: React.PropTypes.number,
  height: React.PropTypes.number,
  column: React.PropTypes.object,
  cellMetaData: React.PropTypes.object
};

export default OverflowCell;