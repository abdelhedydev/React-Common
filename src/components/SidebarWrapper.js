import styled from 'styled-components';

const SidebarWrapper = (WrappedComponent) => styled(WrappedComponent)`
.navbar{
     cursor:pointer;
     display:block;
     &-icon{
         width:50px;
         height:50px;
         cursor:pointer;
         position:absolute;
         left:27px;
         top:56px;
         width: 25px;
         border-top:2px solid #2d3436;
         transition:.5s all;
         &::before{
             content:'';
             width: 100%;
             position:absolute;
             top:5px;
             left:0px;
             border-bottom:2px solid #2d3436;
             transition:.5s all;
        }
         &::after{
             content:'';
             width: 100%;
             position:absolute;
             top:12px;
             left:0px;
             border-bottom:2px solid #2d3436;
             transition:.5s all;
        }
    }
     &__menu{
         display:none;
         border:1px solid grey;
    }
     input:checked ~ .navbar__menu{
         display: block;
         background-color: #b2bec3;
         z-index:999;
         list-style: none;
         margin-top: 32px;
         margin-left:auto;
         margin-right:auto;
         width:90%;
         position: absolute;
         top:60px;
         left:0px;
         right:0px;
         padding-left:0px;
         li{
             color: #2d3436;
             font-size: 14px;
             font-weight: 500;
             line-height: 40px;
             text-align: center;
             &:hover{
                 background-color:grey;
                 color: white;
            }
        }
    }
     input:checked ~ label > .navbar-icon::before{
         transform: rotate(-45deg);
         top: -1px;
    }
     input:checked ~ label > .navbar-icon{
         border-top:2px solid transparent;
    }
     input:checked ~ label > .navbar-icon:after{
         top:0px;
         transform: rotate(45deg);
    }
}

`;
export default SidebarWrapper;
