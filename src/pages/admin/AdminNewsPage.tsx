import { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { useContent } from '../../contexts/ContentContext';
import { Plus, Pencil, Trash2, Save, X } from 'lucide-react';

export function AdminNewsPage() {
  const { content, updateNews } = useContent();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ date: '', title: '' });

  const handleAdd = () => {
    const newItem = {
      id: Date.now().toString(),
      date: formData.date,
      title: formData.title,
    };
    updateNews([newItem, ...content.news]);
    setFormData({ date: '', title: '' });
  };

  const handleEdit = (id: string) => {
    const item = content.news.find(n => n.id === id);
    if (item) {
      setEditingId(id);
      setFormData({ date: item.date, title: item.title });
    }
  };

  const handleUpdate = () => {
    if (editingId) {
      const updated = content.news.map(item =>
        item.id === editingId ? { ...item, ...formData } : item
      );
      updateNews(updated);
      setEditingId(null);
      setFormData({ date: '', title: '' });
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('このお知らせを削除してもよろしいですか？')) {
      updateNews(content.news.filter(item => item.id !== id));
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({ date: '', title: '' });
  };

  return (
    <AdminLayout title="お知らせ管理">
      <div className="space-y-6">
        {/* Add/Edit Form */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl text-gray-900 mb-4">
            {editingId ? 'お知らせを編集' : '新しいお知らせを追加'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-gray-700 mb-2 text-sm">日付</label>
              <input
                type="text"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="2025.11.30"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2 text-sm">タイトル</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="お知らせのタイトル"
              />
            </div>
            <div className="flex items-end gap-2">
              {editingId ? (
                <>
                  <button
                    onClick={handleUpdate}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors flex items-center justify-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    更新
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <button
                  onClick={handleAdd}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  追加
                </button>
              )}
            </div>
          </div>
        </div>

        {/* News List */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl text-gray-900">お知らせ一覧</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {content.news.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                お知らせがありません
              </div>
            ) : (
              content.news.map((item) => (
                <div
                  key={item.id}
                  className={`p-6 hover:bg-gray-50 transition-colors ${
                    editingId === item.id ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <span className="text-gray-500 text-sm">{item.date}</span>
                        <span className="text-gray-900">{item.title}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
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
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
