import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-left vw-80 p-5 bottom-0">
  <div className="container p-4">
    <div className="row">
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase">Footer Content</h5>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
          molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
          voluptatem veniam, est atque cumque eum delectus sint!
        </p>
      </div>


      <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Links</h5>

        <ul className="list-unstyled mb-0">
          <li>
            <a href="#!" className="text-white">Link 1</a>
          </li>
          
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase mb-0">Links</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!" className="text-white">Link 1</a>
          </li>
        
        </ul>
      </div>
    </div>
  </div>

  <div className="text-center p-3">
    © 2022 Copyright:
    <p className="text-white">TDT4140</p>
  </div>
</footer>
  )
}

export default Footer;