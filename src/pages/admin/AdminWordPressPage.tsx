import { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { useWordPress } from '../../contexts/WordPressContext';
import { Globe, RefreshCw, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export function AdminWordPressPage() {
  const { settings, updateSettings, posts, pages, loading, error, fetchContent } = useWordPress();
  const [formData, setFormData] = useState({
    siteUrl: settings.siteUrl,
    enabled: settings.enabled,
  });
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [testMessage, setTestMessage] = useState('');

  const handleTest = async () => {
    setTestStatus('testing');
    setTestMessage('');

    try {
      const baseUrl = formData.siteUrl.replace(/\/$/, '');
      const response = await fetch(`${baseUrl}/wp-json/wp/v2/posts?per_page=1`);
      
      if (!response.ok) {
        throw new Error('WordPress REST API にアクセスできません');
      }

      setTestStatus('success');
      setTestMessage('WordPress サイトへの接続に成功しました！');
    } catch (err) {
      setTestStatus('error');
      setTestMessage(err instanceof Error ? err.message : '接続に失敗しました');
    }
  };

  const handleSave = () => {
    updateSettings(formData);
    alert('WordPress 連携設定を保存しました');
  };

  return (
    <AdminLayout title="WordPress 連携設定">
      <div className="space-y-6">
        {/* 説明 */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <h3 className="text-blue-900 mb-2 flex items-center gap-2">
            <Globe className="w-5 h-5" />
            WordPress サイトと連携する
          </h3>
          <p className="text-gray-700 text-sm mb-2">
            既存の WordPress サイトの URL を入力すると、WordPress の管理画面で編集したコンテンツを
            このデザインテーマで表示できます。
          </p>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>WordPress REST API を使用してコンテンツを取得します</li>
            <li>投稿、ページ、カスタムフィールドなどを表示できます</li>
            <li>WordPress 側でコンテンツを編集すると自動的に反映されます</li>
          </ul>
        </div>

        {/* 設定フォーム */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl text-gray-900 mb-6">WordPress サイト設定</h3>
          <div className="space-y-4">
            <div>
              <label className="flex items-center gap-2 mb-4">
                <input
                  type="checkbox"
                  checked={formData.enabled}
                  onChange={(e) => setFormData({ ...formData, enabled: e.target.checked })}
                  className="w-4 h-4"
                />
                <span className="text-gray-700">WordPress 連携を有効にする</span>
              </label>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                WordPress サイト URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                value={formData.siteUrl}
                onChange={(e) => setFormData({ ...formData, siteUrl: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com"
                disabled={!formData.enabled}
              />
              <p className="text-xs text-gray-500 mt-1">
                例: https://example.com または https://example.com/blog
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleTest}
                disabled={!formData.siteUrl || !formData.enabled || testStatus === 'testing'}
                className="bg-gray-600 hover:bg-gray-700 disabled:bg-gray-300 text-white px-6 py-2 rounded transition-colors flex items-center gap-2"
              >
                <RefreshCw className={`w-4 h-4 ${testStatus === 'testing' ? 'animate-spin' : ''}`} />
                接続テスト
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors"
              >
                設定を保存
              </button>
            </div>

            {/* テスト結果 */}
            {testStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                {testMessage}
              </div>
            )}
            {testStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                {testMessage}
              </div>
            )}
          </div>
        </div>

        {/* WordPress コンテンツプレビュー */}
        {settings.enabled && settings.siteUrl && (
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl text-gray-900">WordPress コンテンツ</h3>
              <button
                onClick={fetchContent}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-4 py-2 rounded transition-colors flex items-center gap-2"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                更新
              </button>
            </div>

            {loading && (
              <div className="text-center py-8 text-gray-500">
                <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-2" />
                読み込み中...
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                {error}
              </div>
            )}

            {!loading && !error && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg text-gray-900 mb-3">投稿一覧（最新10件）</h4>
                  {posts.length === 0 ? (
                    <p className="text-gray-500">投稿が見つかりませんでした</p>
                  ) : (
                    <div className="border border-gray-200 rounded overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-2 text-left text-xs text-gray-500 uppercase">ID</th>
                            <th className="px-4 py-2 text-left text-xs text-gray-500 uppercase">タイトル</th>
                            <th className="px-4 py-2 text-left text-xs text-gray-500 uppercase">日付</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {posts.map((post) => (
                            <tr key={post.id} className="hover:bg-gray-50">
                              <td className="px-4 py-3 text-sm text-gray-900">{post.id}</td>
                              <td className="px-4 py-3 text-sm text-gray-900">{post.title.rendered}</td>
                              <td className="px-4 py-3 text-sm text-gray-500">
                                {new Date(post.date).toLocaleDateString('ja-JP')}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-lg text-gray-900 mb-3">ページ一覧</h4>
                  {pages.length === 0 ? (
                    <p className="text-gray-500">ページが見つかりませんでした</p>
                  ) : (
                    <div className="border border-gray-200 rounded overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-2 text-left text-xs text-gray-500 uppercase">ID</th>
                            <th className="px-4 py-2 text-left text-xs text-gray-500 uppercase">タイトル</th>
                            <th className="px-4 py-2 text-left text-xs text-gray-500 uppercase">スラッグ</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {pages.map((page) => (
                            <tr key={page.id} className="hover:bg-gray-50">
                              <td className="px-4 py-3 text-sm text-gray-900">{page.id}</td>
                              <td className="px-4 py-3 text-sm text-gray-900">{page.title.rendered}</td>
                              <td className="px-4 py-3 text-sm text-gray-500">{page.slug}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 使い方ガイド */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl text-gray-900 mb-4">WordPress 連携の使い方</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-blue-900 mb-2">1. WordPress REST API を有効にする</h4>
              <p className="text-gray-700 text-sm">
                WordPress 4.7 以降では REST API がデフォルトで有効になっています。
                古いバージョンをお使いの場合は、プラグインで有効化してください。
              </p>
            </div>
            <div>
              <h4 className="text-blue-900 mb-2">2. CORS 設定（必要な場合）</h4>
              <p className="text-gray-700 text-sm mb-2">
                異なるドメインから WordPress API にアクセスする場合、CORS の設定が必要です。
                WordPress の <strong>functions.php</strong> に以下のコードを追加してください：
              </p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-xs overflow-x-auto whitespace-pre-wrap">
{`<?php
// WordPress REST API の CORS 設定
function my_custom_rest_cors() {
    header( 'Access-Control-Allow-Origin: *' );
    header( 'Access-Control-Allow-Methods: GET, POST, OPTIONS' );
    header( 'Access-Control-Allow-Credentials: true' );
}
add_action( 'rest_api_init', 'my_custom_rest_cors' );

// プリフライトリクエストの処理
function my_handle_preflight() {
    if ( isset( $_SERVER['REQUEST_METHOD'] ) && $_SERVER['REQUEST_METHOD'] === 'OPTIONS' ) {
        header( 'Access-Control-Allow-Origin: *' );
        header( 'Access-Control-Allow-Methods: GET, POST, OPTIONS' );
        header( 'Access-Control-Allow-Headers: Authorization, Content-Type' );
        exit;
    }
}
add_action( 'init', 'my_handle_preflight' );
?>`}
              </pre>
              <p className="text-gray-700 text-sm mt-2 text-red-600">
                ⚠️ 注意: コードをコピーする際は、<code className="bg-gray-200 px-1 rounded">&lt;?php</code> と <code className="bg-gray-200 px-1 rounded">?&gt;</code> は<strong>含めないでください</strong>。
                functions.php には既に <code className="bg-gray-200 px-1 rounded">&lt;?php</code> が含まれているためです。
              </p>
            </div>
            <div>
              <h4 className="text-blue-900 mb-2">3. サイト URL を入力</h4>
              <p className="text-gray-700 text-sm">
                WordPress サイトの URL を入力し、「接続テスト」ボタンで接続を確認してください。
              </p>
            </div>
            <div>
              <h4 className="text-blue-900 mb-2">4. 連携を有効化</h4>
              <p className="text-gray-700 text-sm">
                「WordPress 連携を有効にする」にチェックを入れて設定を保存すると、
                WordPress のコンテンツがこのデザインテーマで表示されます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}