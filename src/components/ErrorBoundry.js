import React, { Component } from 'react'

export class ErrorBoundry extends Component {constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  // componentDidCatch(error, errorInfo) {
  //   console.log(error, errorInfo);
  // }
  
  render() {
      if (this.state.hasError) {
          // You can render any custom fallback UI
          return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundry
