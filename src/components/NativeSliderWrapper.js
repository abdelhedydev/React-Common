import styled from 'styled-components';

const NativeSlider = (WrappedComponent) => styled(WrappedComponent)`
  position: relative;
  .row{
    width:100%;
    justify-content:space-around;
    display:inline-flex;
    flex-wrap:nowrap;
  }
  .btn{
    width:5%;
    max-width:50px;
    height:50px;
    border-radius:50%;
    outline:none;
    background-color:transparent;
    border:none;
    margin-top:15%;
  }
  .main{
    width:80%;
    max-width:500px;
    height:350px;
    transition:1s ease-in;
  }
  .slides{
    display: inline-flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap:nowrap;
    overflow-x: overlay;
  }
  .item{
    margin-top:20px;
    margin-left:5px;
    width:10%;
    height:150px;
    cursor:pointer;
  }

`;
export default NativeSlider;
