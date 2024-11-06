import React from 'react';

export function Card({ children, className }) {
  return <div className={`border-2 rounded-3xl p-4 ${className}`}>{children}</div>;
}

export function CardHeader({ children, className }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={`space-y-4 ${className}`}>{children}</div>;
}
