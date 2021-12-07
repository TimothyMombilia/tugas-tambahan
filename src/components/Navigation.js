import React from 'react';

const Navigation = () => {
    return(
        
        <div className="container">
        <nav className="shadow p-3 mb-5 m-4 bg-white rounded  navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  
    <a className="navbar-brand bi bi-chevron-compact-down" href="/">ALL TYPES</a> 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
</svg>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    

    <div className="  collapse navbar-collapse grid row justify-content-md-center " id="navbarNav" >
      <ul className="navbar-nav col-md-5 ">
        <li className="nav-item mx-3">
          <a className="nav-link " aria-current="page" href="/">Popular Products</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="/">Low Prive</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="/">High Price</a>
        </li>

        
    
        </ul>

         </div>
    </div>

            <a className="navbar-brand bi bi-chevron-compact-down" href="/">PRICE</a> 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
</svg>
        </nav>  
        
    </div>

    
    );
}

export default Navigation;

