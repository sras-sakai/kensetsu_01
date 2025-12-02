import { Sidebar } from '../components/Sidebar';
import { MapPin, Phone, Mail, Clock, User } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

export function OfficePage() {
  const { content } = useContent();
  const { officeInfo } = content;

  return (
    <>
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl mb-2">事務所概要</h1>
          <p className="text-blue-200">建設業許可相談センターについて</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* 事務所情報 */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-6 pb-2 border-b-2 border-blue-500">事務所情報</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-4 bg-gray-50 w-1/3">事務所名</th>
                        <td className="py-4 px-4">{officeInfo.name}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-4 bg-gray-50">代表者</th>
                        <td className="py-4 px-4">{officeInfo.representative}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-4 bg-gray-50">所在地</th>
                        <td className="py-4 px-4 whitespace-pre-wrap">{officeInfo.address}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-4 bg-gray-50">電話番号</th>
                        <td className="py-4 px-4">{officeInfo.phone}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-4 bg-gray-50">FAX</th>
                        <td className="py-4 px-4">{officeInfo.fax}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-4 bg-gray-50">メール</th>
                        <td className="py-4 px-4">{officeInfo.email}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-4 bg-gray-50">営業時間</th>
                        <td className="py-4 px-4 whitespace-pre-wrap">{officeInfo.hours}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-4 bg-gray-50">登録番号</th>
                        <td className="py-4 px-4">{officeInfo.registration}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-4 bg-gray-50">対応地域</th>
                        <td className="py-4 px-4">
                          東京都、神奈川県、千葉県、埼玉県を中心に全国対応可能<br />
                          <span className="text-sm text-gray-600">※遠方の場合はオンライン相談も承ります</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 代表挨拶 */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-6 pb-2 border-b-2 border-blue-500">代表挨拶</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    建設業許可相談センターのホームページをご覧いただき、誠にありがとうございます。
                  </p>
                  <p className="text-gray-700">
                    当センターは、建設業許可申請を専門とする行政書士事務所です。
                    建設業に携わる皆様の事業発展をサポートするため、建設業許可の取得から更新、
                    各種変更届まで、建設業に関する許認可手続きをトータルでサポートしております。
                  </p>
                  <p className="text-gray-700">
                    建設業許可の取得は、事業を拡大していく上で重要なステップとなります。
                    しかし、要件の確認や複雑な書類の作成など、多くの時間と労力を要する手続きでもあります。
                  </p>
                  <p className="text-gray-700">
                    当センターでは、豊富な経験と専門知識を活かし、お客様の状況に応じた最適な方法をご提案いたします。
                    お客様が本業に専念できるよう、許認可手続きは当センターにお任せください。
                  </p>
                  <p className="text-gray-700">
                    初回相談は無料です。建設業許可に関するご質問やご相談がございましたら、
                    お気軽にお問い合わせください。お客様のご期待に添えるよう、誠心誠意対応させていただきます。
                  </p>
                  <div className="mt-6 text-right">
                    <p className="text-gray-700">建設業許可相談センター</p>
                    <p className="text-gray-700">代表　行政書士　○○ ○○</p>
                  </div>
                </div>
              </section>

              {/* 取扱業務 */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-6 pb-2 border-b-2 border-blue-500">取扱業務</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <h3 className="text-blue-900 mb-1">建設業許可関連</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 新規許可申請</li>
                      <li>• 更新申請</li>
                      <li>• 業種追加</li>
                      <li>• 般・特新規申請</li>
                      <li>• 各種変更届</li>
                      <li>• 廃業届</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <h3 className="text-blue-900 mb-1">その他業務</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 経営事項審査</li>
                      <li>• 入札参加資格申請</li>
                      <li>• 産業廃棄物収集運搬業許可</li>
                      <li>• 宅建業免許申請</li>
                      <li>• 各種許認可申請</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* アクセス */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-6 pb-2 border-b-2 border-blue-500">アクセス</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-blue-900 mb-1">所在地</h3>
                      <p className="text-gray-700">
                        〒100-0000<br />
                        東京都千代田区○○○ 1-2-3 ○○ビル 4F
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-blue-900 mb-1">最寄り駅</h3>
                      <p className="text-gray-700">
                        ○○線「○○駅」より徒歩5分<br />
                        ○○線「○○駅」より徒歩7分
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-200 h-64 rounded flex items-center justify-center text-gray-500">
                    地図（GoogleMap等を埋め込み）
                  </div>
                  <p className="text-sm text-gray-600">
                    ※お車でお越しの際は、近隣のコインパーキングをご利用ください。
                  </p>
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