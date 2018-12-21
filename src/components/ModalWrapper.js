import styled from 'styled-components';

const Modal = (WrappedComponent) => styled(WrappedComponent)`
  .modal-trigger{
      border: 0;
      padding: 0;
      background-color:transparent;
    }
  .modal{
    transition:5s all;
    z-index:99;
    position:fixed;
    top:0px;
    bottom: 0px;
    left:0px;
    right:0px;
    position: fixed;
    background-color:white;
    color: black;
    padding:20px;
    background-color: rgba(0,0,0,0.4);
  }
  .content{
    overflow:hidden;
    border-radius:10px;
    max-width:640px;
    width:100%;
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    background-color:white;
    padding-top:5px;
    &-close-icon{
      border: 0;
      padding: 0;
      background-color:transparent;
      width:25px;
      position:absolute;
      top:10px;
      right:20px;
      outline:none;
      cursor: pointer;
      &::before{
        content:'';
        width:25px;
        right:0px;
        top:50%;
        transform:translateY(-50%);
        position:absolute;
        border-top:2px solid red;
        transform:rotate(-45deg)
      }
      &::after{
        content:'';
        width:25px;
        left:0px;
        top:50%;
        transform:translateY(-50%);
        position:absolute;
        border-top:2px solid red;
        transform:rotate(45deg)
      }
    }
    &-header{
      padding-left:25px;
      padding-bottom: 15px;
      font-size:24px;
      font-weight:600;
      border-bottom:1px solid rgba(34,36,38,.15);
    }
    &-body{
      padding-left:25px;
      margin-top:15px;
      margin-bottom:15px;
      width:100%;
    }
    &-footer{
      padding-bottom: 15px;
      padding-left:25px;
      background: #f9fafb;
      border-top:1px solid rgba(34,36,38,.15);
    }
  }
`;
export default Modal;
