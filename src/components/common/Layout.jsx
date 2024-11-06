import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <Header />
      <div
        style={{ backgroundColor: '#F7F8FA', height: '100%', width: '100vw' }}
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
