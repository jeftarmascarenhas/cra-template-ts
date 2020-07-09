import React, { Component } from 'react'

interface ErrorProps {
  children: React.ReactNode
}

interface ErrorState {
  errorMessage: string
}

class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  state = {
    errorMessage: '',
  }
  static getDerivedStateFromError(error: any): any {
    return { errorMessage: error.toString() }
  }

  // A fake logging service 😬
  logErrorToServices = console.log

  componentDidCatch(error: Error, info: any): void {
    this.logErrorToServices(error.toString(), info.componentStack)
  }

  render(): React.ReactNode {
    if (this.state.errorMessage) {
      return <p>{this.state.errorMessage}</p>
    }
    return this.props.children
  }
}

export default ErrorBoundary
