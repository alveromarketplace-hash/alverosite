import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h2>Something went wrong.</h2>
                    <p style={{ color: '#666', fontSize: '0.9em' }}>{this.state.error?.message}</p>
                    <button
                        onClick={() => window.location.reload()}
                        style={{ marginTop: '10px', padding: '8px 16px', background: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                    >
                        Reload Page
                    </button>
                    <button
                        onClick={() => {
                            this.setState({ hasError: false });
                            window.location.href = '/';
                        }}
                        style={{ marginTop: '10px', marginLeft: '10px', padding: '8px 16px', background: 'transparent', color: '#000', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer' }}
                    >
                        Go Home
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
