import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Layout, Space, Typography } from "antd";
import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import "./App.css";

const App = () => {
  return (
    // <Router>
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/crypto/:uuid" element={<CryptoDetails />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CryptoMarket <br />
            All rights Reserved.
          </Typography.Title>
          <Space>
            <Link to="/"> Home</Link>
            <Link to="/exchanges"> Exchanges</Link>
            <Link to="/news"> News</Link>
          </Space>
        </div>
      </div>
    </div>
    //</Router>
  );
};

export default App;
