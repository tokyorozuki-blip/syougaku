import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Error Boundary Caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-rose-50 flex items-center justify-center p-6 text-center">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-rose-200 max-w-md">
            <div className="text-5xl mb-3">⚠️</div>
            <h2 className="text-2xl font-black text-rose-600 mb-2">エラーが発生しました</h2>
            <p className="text-xs text-slate-600 mb-4">画面の読み込み中に問題が発生したため、安全に復旧します。</p>
            <button
              onClick={() => { localStorage.clear(); window.location.reload(); }}
              className="px-6 py-3 bg-rose-500 text-white font-black text-xs rounded-xl shadow hover:bg-rose-600 transition"
            >
              キャッシュをリセットして再起動
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
