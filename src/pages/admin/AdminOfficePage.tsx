import { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { useContent } from '../../contexts/ContentContext';
import { Save } from 'lucide-react';

export function AdminOfficePage() {
  const { content, updateOfficeInfo } = useContent();
  const [formData, setFormData] = useState(content.officeInfo);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    updateOfficeInfo(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <AdminLayout title="事務所情報管理">
      <div className="space-y-6">
        {saved && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
            事務所情報を保存しました
          </div>
        )}

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl text-gray-900 mb-6">基本情報</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2 text-sm">事務所名</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm">代表者</label>
                <input
                  type="text"
                  value={formData.representative}
                  onChange={(e) => setFormData({ ...formData, representative: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 text-sm">住所</label>
              <textarea
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
              ></textarea>
              <p className="text-xs text-gray-500 mt-1">改行で複数行に分けられます</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 mb-2 text-sm">電話番号</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm">FAX</label>
                <input
                  type="text"
                  value={formData.fax}
                  onChange={(e) => setFormData({ ...formData, fax: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm">メールアドレス</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 text-sm">営業時間</label>
              <textarea
                value={formData.hours}
                onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
              ></textarea>
              <p className="text-xs text-gray-500 mt-1">改行で複数行に分けられます</p>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 text-sm">登録番号</label>
              <input
                type="text"
                value={formData.registration}
                onChange={(e) => setFormData({ ...formData, registration: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="pt-4">
              <button
                onClick={handleSave}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                保存
              </button>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl text-gray-900 mb-6">プレビュー</h3>
          <div className="border border-gray-200 rounded p-6 bg-gray-50">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 bg-gray-100 w-1/3">事務所名</th>
                  <td className="py-3 px-4">{formData.name}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 bg-gray-100">代表者</th>
                  <td className="py-3 px-4">{formData.representative}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 bg-gray-100">所在地</th>
                  <td className="py-3 px-4 whitespace-pre-wrap">{formData.address}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 bg-gray-100">電話番号</th>
                  <td className="py-3 px-4">{formData.phone}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 bg-gray-100">FAX</th>
                  <td className="py-3 px-4">{formData.fax}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 bg-gray-100">メール</th>
                  <td className="py-3 px-4">{formData.email}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 bg-gray-100">営業時間</th>
                  <td className="py-3 px-4 whitespace-pre-wrap">{formData.hours}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 bg-gray-100">登録番号</th>
                  <td className="py-3 px-4">{formData.registration}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
