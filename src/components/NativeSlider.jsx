/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { map, get, size } from 'lodash';
import NativeSliderWrapper from './NativeSliderWrapper';


class NativeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  // componentDidMount() {
  //   this.interval = setInterval(() => this.next(), 5000);
  // }
  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }
  overFlow = () => (this.state.index === size(this.props.imgs) || this.state.index === -1)

  next = () => {
    this.setState({
      index: this.overFlow() ? 0 : this.state.index + 1,
    });
  }
  prev = () => {
    this.setState({
      index: this.overFlow() ? size(this.props.imgs) - 1 : this.state.index - 1,
    });
  }
  changeMain = (index) => {
    this.setState({
      index,
    });
  }

  render() {
    const { imgs, className } = this.props;
    return (
      <div className={className}>
        <div className="row">
          <button onClick={() => this.prev()} className="btn btn-prev" >
            <img src="https://image.flaticon.com/icons/svg/271/271218.svg" alt="" />
          </button>
          <img src={get(imgs, this.state.index, '')} alt="" className="main" />
          <button onClick={() => this.next()} className="btn btn-next">
            <img src="https://image.flaticon.com/icons/svg/271/271226.svg" alt="" />
          </button>
        </div>
        <div className="row">
          <div className="slides">
            {
              map(imgs, (item, key) => <img className="item" src={item} key={key} onClick={() => this.changeMain(key)} alt="" />)
            }
          </div>
        </div>
      </div>
    );
  }
}

NativeSlider.propTypes = {
  className: PropTypes.string,
  imgs: PropTypes.array,
};
NativeSlider.defaultProps = {
  imgs: ['https://image.flaticon.com/icons/svg/230/230317.svg',
    'https://image.flaticon.com/icons/svg/1149/1149168.svg',
    'https://image.flaticon.com/icons/svg/140/140830.svg'],
};

export default NativeSliderWrapper(NativeSlider);
