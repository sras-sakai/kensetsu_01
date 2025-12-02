import { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { useContent } from '../../contexts/ContentContext';
import { Plus, Pencil, Trash2, Save, X } from 'lucide-react';

export function AdminPricingPage() {
  const { content, updatePrices } = useContent();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ service: '', price: '', legalFee: '' });

  const handleAdd = () => {
    const newItem = {
      id: Date.now().toString(),
      service: formData.service,
      price: formData.price,
      legalFee: formData.legalFee,
    };
    updatePrices([...content.prices, newItem]);
    setFormData({ service: '', price: '', legalFee: '' });
  };

  const handleEdit = (id: string) => {
    const item = content.prices.find(p => p.id === id);
    if (item) {
      setEditingId(id);
      setFormData({ service: item.service, price: item.price, legalFee: item.legalFee });
    }
  };

  const handleUpdate = () => {
    if (editingId) {
      const updated = content.prices.map(item =>
        item.id === editingId ? { ...item, ...formData } : item
      );
      updatePrices(updated);
      setEditingId(null);
      setFormData({ service: '', price: '', legalFee: '' });
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('この料金項目を削除してもよろしいですか？')) {
      updatePrices(content.prices.filter(item => item.id !== id));
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({ service: '', price: '', legalFee: '' });
  };

  return (
    <AdminLayout title="料金管理">
      <div className="space-y-6">
        {/* Add/Edit Form */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl text-gray-900 mb-4">
            {editingId ? '料金を編集' : '新しい料金を追加'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2 text-sm">サービス内容</label>
              <input
                type="text"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="知事許可（新規・一般）"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 text-sm">報酬額</label>
              <input
                type="text"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="100,000円～"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 text-sm">法定手数料</label>
              <input
                type="text"
                value={formData.legalFee}
                onChange={(e) => setFormData({ ...formData, legalFee: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="90,000円"
              />
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            {editingId ? (
              <>
                <button
                  onClick={handleUpdate}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  更新
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded transition-colors flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  キャンセル
                </button>
              </>
            ) : (
              <button
                onClick={handleAdd}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                追加
              </button>
            )}
          </div>
        </div>

        {/* Price List */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl text-gray-900">料金一覧</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                    サービス内容
                  </th>
                  <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                    報酬額
                  </th>
                  <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                    法定手数料
                  </th>
                  <th className="px-6 py-3 text-right text-xs text-gray-500 uppercase tracking-wider">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {content.prices.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                      料金項目がありません
                    </td>
                  </tr>
                ) : (
                  content.prices.map((item) => (
                    <tr
                      key={item.id}
                      className={`hover:bg-gray-50 transition-colors ${
                        editingId === item.id ? 'bg-blue-50' : ''
                      }`}
                    >
                      <td className="px-6 py-4 text-sm text-gray-900">{item.service}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{item.price}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{item.legalFee}</td>
                      <td className="px-6 py-4 text-right text-sm">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleEdit(item.id)}
                            className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 rounded transition-colors"
                          >
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="bg-red-100 hover:bg-red-200 text-red-700 p-2 rounded transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
