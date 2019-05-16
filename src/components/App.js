import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Bad from './Bad';
import Good from './Good';

function App() {
  return (
    <>
      <ErrorBoundary>
        <Bad />
      </ErrorBoundary>
      <Good />
    </>
  );
}

export default App;
