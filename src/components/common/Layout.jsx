import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <Header />
      <div
        style={{
          marginLeft: '100px',
          marginRight: '100px',
          backgroundColor: 'pink',
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
