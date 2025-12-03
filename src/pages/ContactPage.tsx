import { Sidebar } from '../components/Sidebar';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('お問い合わせを送信しました。（デモ）');
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl mb-2">お問い合わせ</h1>
          <p className="text-blue-200">建設業許可に関するご相談はお気軽にお問い合わせください</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* お問い合わせ方法 */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-6 pb-2 border-b-2 border-blue-500">お問い合わせ方法</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-2 border-blue-200 rounded-lg p-6 text-center">
                    <Phone className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-xl text-blue-900 mb-3">お電話でのお問い合わせ</h3>
                    <a href="tel:025-378-2033" className="text-3xl text-green-600 hover:text-green-700 block mb-2">
                      0120-000-0000
                    </a>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p className="flex items-center justify-center gap-2">
                        <Clock className="w-4 h-4" />
                        受付時間：平日 8:00～20:00
                      </p>
                      <p className="text-xs text-gray-500">土日祝日は定休日</p>
                    </div>
                  </div>
                  <div className="border-2 border-blue-200 rounded-lg p-6 text-center">
                    <Mail className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-xl text-blue-900 mb-3">メールでのお問い合わせ</h3>
                    <a href="mailto:info@example.com" className="text-xl text-blue-600 hover:text-blue-700 block mb-2">
                      info@example.com
                    </a>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>24時間受付</p>
                      <p className="text-xs text-gray-500">2営業日以内にご返信いたします</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="text-blue-900">
                    <strong>初回相談無料</strong><br />
                    建設業許可に関するご相談は初回無料です。お気軽にお問い合わせください。
                  </p>
                </div>
              </section>

              {/* お問い合わせフォーム */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-6 pb-2 border-b-2 border-blue-500">お問い合わせフォーム</h2>
                <p className="mb-6 text-gray-600">
                  以下のフォームに必要事項をご記入の上、送信してください。<br />
                  <span className="text-red-500">*</span> は必須項目です。
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm">
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm">会社名・屋号</label>
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm">
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm">電話番号</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">
                      お問い合わせ項目 <span className="text-red-500">*</span>
                    </label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">選択してください</option>
                      <option value="新規許可申請">新規許可申請について</option>
                      <option value="更新申請">更新申請について</option>
                      <option value="業種追加">業種追加について</option>
                      <option value="変更届">各種変更届について</option>
                      <option value="要件確認">要件確認について</option>
                      <option value="料金">料金について</option>
                      <option value="その他">その他</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-4 py-2 h-40 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      required
                    ></textarea>
                  </div>
                  <div className="bg-gray-50 p-4 rounded text-sm text-gray-600">
                    <p className="mb-2">個人情報の取り扱いについて</p>
                    <p className="text-xs">
                      お客様からお預かりした個人情報は、お問い合わせへの回答、サービスのご案内以外の目的では使用いたしません。
                      また、お客様の同意なしに第三者に提供することはございません。
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button 
                      type="submit" 
                      className="bg-blue-500 hover:bg-blue-600 text-white px-16 py-4 rounded transition-colors"
                    >
                      送信する
                    </button>
                  </div>
                </form>
              </section>

              {/* 事務所所在地 */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-6 pb-2 border-b-2 border-blue-500">事務所所在地</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-start gap-3 mb-4">
                        <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-blue-900 mb-1">所在地</h3>
                          <p className="text-gray-700">
                            〒100-0000<br />
                            東京都千代田区○○○ 1-2-3<br />
                            ○○ビル 4F
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 mb-4">
                        <Phone className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-blue-900 mb-1">電話番号</h3>
                          <p className="text-gray-700">0120-000-0000</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 mb-4">
                        <Mail className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-blue-900 mb-1">メール</h3>
                          <p className="text-gray-700">info@example.com</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-blue-900 mb-1">営業時間</h3>
                          <p className="text-gray-700">
                            平日：9:00～18:00<br />
                            土日祝：定休日
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="bg-gray-200 h-64 rounded flex items-center justify-center text-gray-500">
                        地図（GoogleMap等を埋め込み）
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <p className="text-yellow-900 text-sm">
                      <strong>アクセス</strong><br />
                      ○○線「○○駅」より徒歩5分<br />
                      ○○線「○○駅」より徒歩7分
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
