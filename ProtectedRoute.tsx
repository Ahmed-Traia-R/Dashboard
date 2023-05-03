import React from 'react';
import { Route, Navigate } from 'react-router-dom';

interface Props {
  path: string;
  element: React.ReactNode;
  auth: boolean;
}

const ProtectedRoute: React.FC<Props> = ({ path, element, autho }) => {
  return autho ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/PageWithComponents" replace />
  );
};

export default ProtectedRoute;
