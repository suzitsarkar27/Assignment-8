import React from 'react';
import './Header.css';

const Header = () => {
    return (
            
 <nav class="navbar navbar-expand-lg navbar-light bg-light ">
 <div class="container-fluid ">
 <div class="container-fluid">
<a class="navbar-brand" href="#">
<img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
Bootstrap
</a>
</div>
<div class="collapse navbar-collapse " id="navbarTogglerDemo01">
  <div className='d-flex justify-content-end'id='menu-bar'>
    <a class="navbar-brand" href="/Home">Home</a>
    <a class="navbar-brand" href="/Product">Product</a>
   <a class="navbar-brand" href="/Service">Service</a>
          
 </div>
</div>
</div>
</nav> 
    );
};

export default Header;