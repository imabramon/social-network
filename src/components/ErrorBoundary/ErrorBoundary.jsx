import React from 'react'
import { ErrorBoundary as ErrorBoundaryLib } from 'react-error-boundary'

function Fallback({ error }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong, try reload app:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  )
}

function ErrorBoundary({ children }) {
  return (
    <ErrorBoundaryLib FallbackComponent={Fallback}>{children}</ErrorBoundaryLib>
  )
}

export default ErrorBoundary
