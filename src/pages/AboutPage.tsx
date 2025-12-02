import { Sidebar } from '../components/Sidebar';
import { CheckCircle } from 'lucide-react';

export function AboutPage() {
  return (
    <>
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl mb-2">建設業許可とは</h1>
          <p className="text-blue-200">建設業を営むために必要な許可について詳しく解説します</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* 建設業許可とは */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-4 pb-2 border-b-2 border-blue-500">建設業許可とは</h2>
                <div className="prose max-w-none">
                  <p className="mb-4">
                    建設業を営むためには、原則として建設業法に基づく建設業許可を取得する必要があります。
                    軽微な建設工事のみを請け負う場合を除き、建設業を営もうとする者は、29業種の建設業の種類ごとに、
                    国土交通大臣または都道府県知事の許可を受けなければなりません。
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                    <p className="text-blue-900">
                      <strong>許可が必要な工事</strong><br />
                      建築一式工事：1件の請負代金が1,500万円以上の工事または延べ面積が150㎡以上の木造住宅工事<br />
                      その他の工事：1件の請負代金が500万円以上の工事
                    </p>
                  </div>
                </div>
              </section>

              {/* 建設業許可の種類 */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-4 pb-2 border-b-2 border-blue-500">建設業許可の種類</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-blue-900 mb-3">1. 国土交通大臣許可と都道府県知事許可</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded p-4">
                        <h4 className="text-blue-900 mb-2">大臣許可</h4>
                        <p className="text-sm text-gray-600">
                          2つ以上の都道府県に営業所を設置して営業しようとする場合に必要な許可です。
                        </p>
                      </div>
                      <div className="border border-gray-200 rounded p-4">
                        <h4 className="text-blue-900 mb-2">知事許可</h4>
                        <p className="text-sm text-gray-600">
                          1つの都道府県内のみに営業所を設置して営業する場合に必要な許可です。
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-blue-900 mb-3">2. 一般建設業許可と特定建設業許可</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded p-4">
                        <h4 className="text-blue-900 mb-2">一般建設業許可</h4>
                        <p className="text-sm text-gray-600">
                          下請契約の請負代金が4,500万円（建築一式工事の場合は7,000万円）未満の工事を施工する場合の許可です。
                        </p>
                      </div>
                      <div className="border border-gray-200 rounded p-4">
                        <h4 className="text-blue-900 mb-2">特定建設業許可</h4>
                        <p className="text-sm text-gray-600">
                          発注者から直接請け負った工事について、下請契約の請負代金が4,500万円（建築一式工事の場合は7,000万円）以上となる場合に必要な許可です。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 建設業許可の要件 */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-4 pb-2 border-b-2 border-blue-500">建設業許可の要件</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-blue-900 mb-2">1. 経営業務の管理責任者がいること</h3>
                      <p className="text-gray-600">
                        建設業に関し5年以上の経営業務の管理責任者としての経験を有する者、または、これに準ずる地位にあって経営業務を執行した経験がある者が常勤でいることが必要です。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-blue-900 mb-2">2. 専任技術者が営業所ごとにいること</h3>
                      <p className="text-gray-600">
                        許可を受けようとする建設業に関し、一定の資格または実務経験を有する専任の技術者が営業所ごとに常勤でいることが必要です。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-blue-900 mb-2">3. 請負契約に関して誠実性があること</h3>
                      <p className="text-gray-600">
                        請負契約に関して不正または不誠実な行為をするおそれが明らかな者でないことが必要です。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-blue-900 mb-2">4. 財産的基礎または金銭的信用があること</h3>
                      <p className="text-gray-600">
                        一般建設業許可の場合、自己資本が500万円以上あること、または500万円以上の資金調達能力があることが必要です。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-blue-900 mb-2">5. 欠格要件に該当しないこと</h3>
                      <p className="text-gray-600">
                        破産者で復権を得ない者、過去に建設業許可を取り消された者などの欠格要件に該当しないことが必要です。
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 建設業許可の有効期間 */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-4 pb-2 border-b-2 border-blue-500">建設業許可の有効期間</h2>
                <p className="mb-4">
                  建設業許可の有効期間は、許可のあった日から5年目の対応する日の前日までです。
                  引き続き建設業を営もうとする場合には、有効期間満了日の30日前までに更新の手続きをする必要があります。
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <p className="text-yellow-900">
                    <strong>注意点</strong><br />
                    有効期間満了日までに更新手続きが完了していない場合、許可は失効します。
                    新たに建設業を営む場合は、新規許可申請が必要となります。
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
