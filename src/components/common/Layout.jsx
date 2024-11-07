import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Header />
      <div
        style={{ backgroundColor: '#F7F8FA', height: '100vh', width: '100%', backgroundAttachment: 'fixed' }}
      >
        <div
          style={{
            marginLeft: '100px',
            marginRight: '100px',
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
