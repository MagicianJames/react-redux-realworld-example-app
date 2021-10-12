import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {/*{appName.toLowerCase()}*/}
          Phanuwat Sikharestrakul
        </h1>
        <p>6115218</p>
      </div>
    </div>
  );
};

export default Banner;
