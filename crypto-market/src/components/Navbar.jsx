import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";

import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/logo.png";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size={"large"} />
        <Typography.Title level={2} className="logo">
          <Link to="/"> Crypto</Link>
        </Typography.Title>
        {/* <Button className="menu-control-container">

        </Button> */}
      </div>
      <Menu theme="dark" selectedKeys={[]}>
        <Menu.Item icon={<HomeOutlined />} key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item icon={<FundOutlined />} key="currencies">
          <Link to="/cryptocurrencies">Currencies</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item icon={<MoneyCollectOutlined />} key="exchanges">
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item icon={<BulbOutlined />} key="news">
          <Link to="/news">News</Link>
        </Menu.Item>
        <Menu.Divider />
      </Menu>
    </div>
  );
};

export default Navbar;
