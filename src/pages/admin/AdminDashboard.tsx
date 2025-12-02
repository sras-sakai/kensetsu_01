import { AdminLayout } from '../../components/AdminLayout';
import { Link } from 'react-router-dom';
import { Newspaper, HelpCircle, DollarSign, Building, Eye, Globe } from 'lucide-react';

export function AdminDashboard() {
  return (
    <AdminLayout title="ダッシュボード">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          to="/admin/wordpress"
          className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow border-l-4 border-indigo-500"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <Globe className="w-8 h-8 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-xl text-gray-900">WordPress 連携</h3>
              <p className="text-gray-600 text-sm">WordPress API 設定</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            既存の WordPress サイトと連携してコンテンツを取得します。
          </p>
        </Link>

        <Link
          to="/admin/news"
          className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Newspaper className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl text-gray-900">お知らせ管理</h3>
              <p className="text-gray-600 text-sm">ニュース・お知らせの編集</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            ウェブサイトのお知らせ情報を追加・編集・削除できます。
          </p>
        </Link>

        <Link
          to="/admin/faq"
          className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow border-l-4 border-green-500"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <HelpCircle className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl text-gray-900">FAQ管理</h3>
              <p className="text-gray-600 text-sm">よくある質問の編集</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            よくある質問と回答を追加・編集・削除できます。
          </p>
        </Link>

        <Link
          to="/admin/pricing"
          className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow border-l-4 border-yellow-500"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <DollarSign className="w-8 h-8 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-xl text-gray-900">料金管理</h3>
              <p className="text-gray-600 text-sm">料金表の編集</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            サービス料金と法定手数料を追加・編集・削除できます。
          </p>
        </Link>

        <Link
          to="/admin/office"
          className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow border-l-4 border-purple-500"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Building className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl text-gray-900">事務所情報管理</h3>
              <p className="text-gray-600 text-sm">事務所の基本情報編集</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            事務所名、住所、電話番号などの基本情報を編集できます。
          </p>
        </Link>

        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow border-l-4 border-gray-500"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gray-100 p-3 rounded-lg">
              <Eye className="w-8 h-8 text-gray-600" />
            </div>
            <div>
              <h3 className="text-xl text-gray-900">サイトプレビュー</h3>
              <p className="text-gray-600 text-sm">公開サイトを確認</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            編集した内容が反映されたサイトを確認できます。
          </p>
        </a>
      </div>

      <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
        <h3 className="text-blue-900 mb-2">管理画面の使い方</h3>
        <ul className="text-gray-700 text-sm space-y-1">
          <li>• WordPress 連携を有効にすると、既存の WordPress サイトのコンテンツを表示できます</li>
          <li>• 各メニューから該当するコンテンツの編集画面にアクセスできます</li>
          <li>• 編集した内容はブラウザのローカルストレージに保存されます</li>
          <li>• 変更はすぐに公開サイトに反映されます</li>
          <li>• ログアウトしても編集内容は保持されます</li>
        </ul>
      </div>
    </AdminLayout>
  );
}