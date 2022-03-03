import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-left vw-80 p-5">
      <div className="container p-4">
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase">Ticketer</h5>

          <h6 className="text-uppercase">
            Gjør kjøp og salg av billetter enklere
          </h6>
        </div>
      </div>

      <div className="text-center p-3">
        © 2022 Copyright:
        <p className="text-white">TDT4140 GRUPPE 1</p>
      </div>
    </footer>
  );
}

export default Footer;
