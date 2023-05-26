import React from "react";
import Container from "../Container/Container";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white shadow-md z-10">
      <div className="border-b-[1px] py-4">
        <Container>
          <div className="flex justify-between items-center">
            <Logo />
            <Search />

            <div>user</div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
