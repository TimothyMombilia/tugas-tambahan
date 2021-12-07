import React from 'react';


const Shop = () => {
    return (
        <div className="container">
        <div className=" card-group ">
  <div className="shadow p-3 mb-5 m-4 bg-white rounded card">
    
    <div className="card-body">
      <div className="new" id="baris">
      <h6 className="card-title">NEW</h6></div>
       <div className="edit" id="baris">
      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg> 

      </div>
      
    </div>
  </div>
  <div className="shadow p-3 mb-5 m-4 bg-white rounded card">
    
    <div className="card-body">
      <h6 className="card-title">NEW</h6>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="shadow p-3 mb-5 m-4 bg-white rounded card">
    
    <div className="card-body">
      <h6 className="card-title">NEW</h6>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>


    
        

    );
}

export default Shop;