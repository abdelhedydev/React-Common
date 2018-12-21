import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModalWrapper from './ModalWrapper';
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    const {
      className, header, content, footer, trigger,
    } = this.props;
    return (
      <div className={className}>
        <button className="modal-trigger" onClick={() => this.toggle()}>
          {
            trigger
          }
        </button>
        {
          this.state.isOpen && (
            <div className="modal">
              <div className="content">
                <button className="content-close-icon" onClick={() => this.setState({ isOpen: false })}>
                  &nbsp;
                </button>
                <div className="content-header">
                  {header}
                </div>
                <div className="content-body">
                  {content}
                </div>
                <div className="content-footer">
                  {footer}
                </div>
              </div>
            </div>

          )
        }
      </div >
    );
  }
}

Modal.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
  content: PropTypes.string,
  footer: PropTypes.string,
  trigger: PropTypes.any,
};

export default ModalWrapper(Modal);

