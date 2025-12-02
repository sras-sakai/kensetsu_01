import { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { useContent } from '../../contexts/ContentContext';
import { Plus, Pencil, Trash2, Save, X } from 'lucide-react';

export function AdminFAQPage() {
  const { content, updateFAQs } = useContent();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ question: '', answer: '' });

  const handleAdd = () => {
    const newItem = {
      id: Date.now().toString(),
      question: formData.question,
      answer: formData.answer,
    };
    updateFAQs([...content.faqs, newItem]);
    setFormData({ question: '', answer: '' });
  };

  const handleEdit = (id: string) => {
    const item = content.faqs.find(f => f.id === id);
    if (item) {
      setEditingId(id);
      setFormData({ question: item.question, answer: item.answer });
    }
  };

  const handleUpdate = () => {
    if (editingId) {
      const updated = content.faqs.map(item =>
        item.id === editingId ? { ...item, ...formData } : item
      );
      updateFAQs(updated);
      setEditingId(null);
      setFormData({ question: '', answer: '' });
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('このFAQを削除してもよろしいですか？')) {
      updateFAQs(content.faqs.filter(item => item.id !== id));
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({ question: '', answer: '' });
  };

  return (
    <AdminLayout title="FAQ管理">
      <div className="space-y-6">
        {/* Add/Edit Form */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl text-gray-900 mb-4">
            {editingId ? 'FAQを編集' : '新しいFAQを追加'}
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2 text-sm">質問</label>
              <input
                type="text"
                value={formData.question}
                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="質問を入力してください"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 text-sm">回答</label>
              <textarea
                value={formData.answer}
                onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                placeholder="回答を入力してください"
              ></textarea>
            </div>
            <div className="flex gap-2">
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
        </div>

        {/* FAQ List */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl text-gray-900">FAQ一覧</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {content.faqs.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                FAQがありません
              </div>
            ) : (
              content.faqs.map((item) => (
                <div
                  key={item.id}
                  className={`p-6 hover:bg-gray-50 transition-colors ${
                    editingId === item.id ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-blue-900 mb-2">{item.question}</h4>
                      <p className="text-gray-600 text-sm whitespace-pre-wrap">{item.answer}</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 rounded transition-colors h-fit"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-100 hover:bg-red-200 text-red-700 p-2 rounded transition-colors h-fit"
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
