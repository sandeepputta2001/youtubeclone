import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

import { logo } from "../utils/constants";
const Navbar = () => (
  <Stack
    direction="row"
    alignItems="flex-start"
    sx={{
      position: "sticky",
      color: "#000",
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} style={{ margin: "13px" }} />
    </Link>
    <SearchBar></SearchBar>
  </Stack>
);

export default Navbar;
