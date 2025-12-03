import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Lock, User } from 'lucide-react';
import { projectId } from '../../utils/supabase/info';

export function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    const result = await login(email, password);
    
    if (result.success) {
      navigate('/admin');
    } else {
      setError(result.error || 'ログインに失敗しました');
    }
    setLoading(false);
  };

  const handleSetup = async () => {
    if (!window.confirm('初期管理者アカウントを作成しますか？')) return;
    try {
      const res = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-80cda5cb/signup`, {
        method: 'POST'
      });
      const data = await res.json();
      if (res.ok) {
        alert('管理者アカウントを作成しました。\nEmail: admin@example.com\nPass: admin123');
        setEmail('admin@example.com');
        setPassword('admin123');
      } else {
        alert('作成失敗: ' + (data.error || 'Unknown error'));
      }
    } catch (err) {
      alert('接続エラー');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8" />
          </div>
          <h1 className="text-2xl text-blue-900 mb-2">管理画面ログイン</h1>
          <p className="text-gray-600 text-sm">建設業許可相談センター</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
          
          <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded text-sm">
            <p>管理者アカウント情報：</p>
            <p>Email: <strong>admin@example.com</strong></p>
            <p>Password: <strong>admin123</strong></p>
            <button 
              type="button" 
              onClick={handleSetup}
              className="mt-2 text-xs underline text-blue-800 hover:text-blue-900"
            >
              ※アカウント未作成の場合はこちらをクリック
            </button>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">メールアドレス</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="admin@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">パスワード</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="パスワードを入力"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded transition-colors disabled:opacity-50"
          >
            {loading ? 'ログイン中...' : 'ログイン'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="/" className="text-blue-600 hover:underline text-sm">
            ← サイトに戻る
          </a>
        </div>
      </div>
    </div>
  );
}