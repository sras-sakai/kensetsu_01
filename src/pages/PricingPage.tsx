import { Sidebar } from '../components/Sidebar';
import { DollarSign } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

export function PricingPage() {
  const { content } = useContent();

  return (
    <>
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl mb-2">料金について</h1>
          <p className="text-blue-200">明朗な料金体系で安心してご依頼いただけます</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* 料金表 */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-6 pb-2 border-b-2 border-blue-500">報酬額一覧</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-900 text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left">サービス内容</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">報酬額（税別）</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">法定手数料</th>
                      </tr>
                    </thead>
                    <tbody>
                      {content.prices.map((price, index) => (
                        <tr key={price.id} className={index % 2 === 1 ? 'bg-gray-50' : ''}>
                          <td className="border border-gray-300 px-4 py-3">{price.service}</td>
                          <td className="border border-gray-300 px-4 py-3">{price.price}</td>
                          <td className="border border-gray-300 px-4 py-3">{price.legalFee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 space-y-2 text-sm text-gray-600">
                  <p>※上記金額は報酬額です。別途、法定手数料（申請手数料）が必要となります。</p>
                  <p>※案件の内容により金額が変動する場合がございます。</p>
                  <p>※複数業種の申請や営業所が複数ある場合は、別途お見積もりいたします。</p>
                  <p>※出張が必要な場合は、別途交通費を頂戴する場合がございます。</p>
                </div>
              </section>

              {/* 料金の目安 */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-6 pb-2 border-b-2 border-blue-500">料金の目安</h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                    <h3 className="text-blue-900 mb-3">例1：知事許可（新規・一般）1業種の場合</h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between items-center pb-2 border-b border-blue-200">
                        <span>報酬額</span>
                        <span>100,000円</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-blue-200">
                        <span>法定手数料</span>
                        <span>90,000円</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-blue-200">
                        <span>消費税（10%）</span>
                        <span>10,000円</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 text-xl">
                        <span>合計</span>
                        <span className="text-blue-900">200,000円</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                    <h3 className="text-blue-900 mb-3">例2：更新申請（一般）2業種の場合</h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between items-center pb-2 border-b border-blue-200">
                        <span>報酬額</span>
                        <span>50,000円</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-blue-200">
                        <span>法定手数料</span>
                        <span>50,000円</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-blue-200">
                        <span>消費税（10%）</span>
                        <span>5,000円</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 text-xl">
                        <span>合計</span>
                        <span className="text-blue-900">105,000円</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                    <h3 className="text-blue-900 mb-3">例3：業種追加（一般）1業種の場合</h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between items-center pb-2 border-b border-blue-200">
                        <span>報酬額</span>
                        <span>70,000円</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-blue-200">
                        <span>法定手数料</span>
                        <span>50,000円</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-blue-200">
                        <span>消費税（10%）</span>
                        <span>7,000円</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 text-xl">
                        <span>合計</span>
                        <span className="text-blue-900">127,000円</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* お支払いについて */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-6 pb-2 border-b-2 border-blue-500">お支払いについて</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-blue-900 mb-2">お支払い時期</h3>
                    <p className="text-gray-600">
                      ご契約時に着手金として報酬額の50%をお支払いいただき、
                      申請完了後に残金をお支払いいただきます。
                      法定手数料は申請時に必要となります。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-blue-900 mb-2">お支払い方法</h3>
                    <p className="text-gray-600">
                      銀行振込にてお支払いください。
                      振込手数料はお客様のご負担となります。
                    </p>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <p className="text-yellow-900">
                      <strong>キャンセルについて</strong><br />
                      着手後のキャンセルにつきましては、着手金の返金はできかねますのでご了承ください。
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