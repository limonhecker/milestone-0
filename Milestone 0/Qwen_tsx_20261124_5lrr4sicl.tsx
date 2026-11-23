import { useEffect, useState } from 'react';

function App() {
  const [health, setHealth] = useState<string>('Checking...');

  useEffect(() => {
    fetch('/api/v1/health')
      .then(res => res.json())
      .then(data => setHealth(data.status))
      .catch(() => setHealth('unreachable'));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">ThreadTrace Admin</h1>
        <p className="text-gray-600 text-lg">
          API Status: <span className={`font-mono font-bold ${health === 'ok' ? 'text-green-600' : 'text-red-600'}`}>{health}</span>
        </p>
        <p className="text-sm text-gray-400 mt-4">Milestone 0: Repository and runnable environment</p>
      </div>
    </div>
  );
}

export default App;