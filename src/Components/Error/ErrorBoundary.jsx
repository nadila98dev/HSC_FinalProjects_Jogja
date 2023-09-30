import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
    this.setState({ hasError: true });
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className='w-screen h-screen bg-[#222222] flex justify-center items-center gap-2'>
          <h2>Something went wrong.</h2>
          <p>Please refresh the page.</p>
          <button className='px-3 py-2 rounded-lg hover:brightness-110 bg-button text-white' onClick={this.handleReload}>Refresh</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;