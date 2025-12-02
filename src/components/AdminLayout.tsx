import { ReactNode, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Home, Newspaper, HelpCircle, DollarSign, Building, LogOut, Globe } from 'lucide-react';

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
}

export function AdminLayout({ children, title }: AdminLayoutProps) {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl">管理画面 - 建設業許可相談センター</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded transition-colors"
          >
            <LogOut className="w-4 h-4" />
            ログアウト
          </button>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg min-h-screen">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/admin"
                  className="flex items-center gap-3 px-4 py-3 rounded hover:bg-blue-50 text-gray-700 hover:text-blue-900 transition-colors"
                >
                  <Home className="w-5 h-5" />
                  ダッシュボード
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/wordpress"
                  className="flex items-center gap-3 px-4 py-3 rounded hover:bg-blue-50 text-gray-700 hover:text-blue-900 transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  WordPress 連携
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/news"
                  className="flex items-center gap-3 px-4 py-3 rounded hover:bg-blue-50 text-gray-700 hover:text-blue-900 transition-colors"
                >
                  <Newspaper className="w-5 h-5" />
                  お知らせ管理
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/faq"
                  className="flex items-center gap-3 px-4 py-3 rounded hover:bg-blue-50 text-gray-700 hover:text-blue-900 transition-colors"
                >
                  <HelpCircle className="w-5 h-5" />
                  FAQ管理
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/pricing"
                  className="flex items-center gap-3 px-4 py-3 rounded hover:bg-blue-50 text-gray-700 hover:text-blue-900 transition-colors"
                >
                  <DollarSign className="w-5 h-5" />
                  料金管理
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/office"
                  className="flex items-center gap-3 px-4 py-3 rounded hover:bg-blue-50 text-gray-700 hover:text-blue-900 transition-colors"
                >
                  <Building className="w-5 h-5" />
                  事務所情報管理
                </Link>
              </li>
            </ul>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded hover:bg-blue-50 text-gray-700 hover:text-blue-900 transition-colors"
              >
                <Home className="w-5 h-5" />
                サイトを表示
              </a>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <h2 className="text-3xl text-blue-900 mb-6">{title}</h2>
          {children}
        </main>
      </div>
    </div>
  );
}