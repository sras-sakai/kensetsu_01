import { Sidebar } from '../components/Sidebar';
import { CheckCircle, AlertCircle } from 'lucide-react';

export function RequirementsPage() {
  return (
    <>
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl mb-2">許可の要件</h1>
          <p className="text-blue-200">建設業許可を取得するために必要な要件について</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* 概要 */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-6 pb-2 border-b-2 border-blue-500">建設業許可の5つの要件</h2>
                <p className="text-gray-600 mb-6">
                  建設業許可を取得するためには、以下の5つの要件をすべて満たす必要があります。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <h3 className="text-blue-900">1. 経営業務の管理責任者</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      建設業の経営経験を有する者がいること
                    </p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <h3 className="text-blue-900">2. 専任技術者</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      営業所ごとに専任の技術者がいること
                    </p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <h3 className="text-blue-900">3. 誠実性</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      請負契約に関して誠実性があること
                    </p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <h3 className="text-blue-900">4. 財産的基礎</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      財産的基礎または金銭的信用があること
                    </p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:col-span-2">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <h3 className="text-blue-900">5. 欠格要件</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      欠格要件に該当しないこと
                    </p>
                  </div>
                </div>
              </section>

              {/* 1. 経営業務の管理責任者 */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-6 pb-2 border-b-2 border-blue-500">1. 経営業務の管理責任者（経管）</h2>
                <p className="text-gray-600 mb-4">
                  経営業務の管理責任者とは、建設業の経営業務について総合的に管理した経験を有する者のことです。
                  法人の場合は常勤の役員、個人事業の場合は事業主本人または支配人が該当します。
                </p>
                <div className="space-y-4">
                  <div className="border border-blue-200 rounded p-4">
                    <h3 className="text-blue-900 mb-3">要件（以下のいずれかを満たすこと）</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>建設業に関し5年以上の経営業務の管理責任者としての経験を有する者</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>建設業に関し5年以上の経営業務の管理責任者に準ずる地位にあった者</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>建設業に関し6年以上の経営業務の補佐経験を有する者</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="text-blue-900 mb-2">証明方法</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 法人の登記事項証明書</li>
                      <li>• 確定申告書</li>
                      <li>• 工事請負契約書、注文書等</li>
                      <li>• 組織図等</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 2. 専任技術者 */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-6 pb-2 border-b-2 border-blue-500">2. 専任技術者（専技）</h2>
                <p className="text-gray-600 mb-4">
                  専任技術者とは、営業所に常勤し、その営業所で請け負う建設工事の技術的な面を管理する者のことです。
                  営業所ごとに、許可を受けようとする建設業の業種に応じた資格または実務経験を有する専任の技術者を配置する必要があります。
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-blue-900 mb-3">一般建設業の専任技術者の要件</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border border-blue-200 rounded p-4">
                        <h4 className="text-blue-900 mb-2 text-sm">資格による場合</h4>
                        <p className="text-xs text-gray-600">
                          国家資格（2級技士、技能士等）を有する者
                        </p>
                      </div>
                      <div className="border border-blue-200 rounded p-4">
                        <h4 className="text-blue-900 mb-2 text-sm">実務経験による場合</h4>
                        <p className="text-xs text-gray-600">
                          許可を受けようとする業種に関し10年以上の実務経験を有する者
                        </p>
                      </div>
                      <div className="border border-blue-200 rounded p-4">
                        <h4 className="text-blue-900 mb-2 text-sm">学歴+実務経験</h4>
                        <p className="text-xs text-gray-600">
                          指定学科卒業+実務経験（高卒5年以上、大卒3年以上）
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-blue-900 mb-3">特定建設業の専任技術者の要件</h3>
                    <div className="border border-orange-200 rounded p-4">
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>1級の国家資格を有する者</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>指定建設業（土木、建築、電気、管、鋼構造物、舗装、造園）は1級資格が必須</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>2級資格+実務経験+指導監督的実務経験がある者（指定建設業を除く）</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="text-blue-900 mb-2">証明方法</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 資格者証、合格証明書等</li>
                      <li>• 卒業証明書</li>
                      <li>• 実務経験証明書</li>
                      <li>• 工事請負契約書、注文書、請求書等</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 3. 誠実性 */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-6 pb-2 border-b-2 border-blue-500">3. 誠実性</h2>
                <p className="text-gray-600 mb-4">
                  請負契約に関して不正または不誠実な行為をするおそれが明らかな者でないことが必要です。
                </p>
                <div className="border border-blue-200 rounded p-4">
                  <h3 className="text-blue-900 mb-3">具体的には</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>請負契約に関して不正な行為をしたことがない</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>請負契約に関して不誠実な行為をしたことがない</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>建設業法、建築基士法等の法令に違反していない</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  法人の場合はその法人、役員、政令で定める使用人、個人の場合はその本人、支配人が対象となります。
                </p>
              </section>

              {/* 4. 財産的基礎 */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-6 pb-2 border-b-2 border-blue-500">4. 財産的基礎または金銭的信用</h2>
                <p className="text-gray-600 mb-4">
                  請負契約を履行するに足る財産的基礎または金銭的信用があることが必要です。
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-blue-900 mb-3">一般建設業の場合（以下のいずれかを満たすこと）</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-blue-200 rounded p-4">
                        <h4 className="text-blue-900 mb-2 text-sm">自己資本</h4>
                        <p className="text-xs text-gray-600 mb-2">
                          自己資本が500万円以上あること
                        </p>
                        <p className="text-xs text-gray-500">
                          （貸借対照表の純資産合計）
                        </p>
                      </div>
                      <div className="border border-blue-200 rounded p-4">
                        <h4 className="text-blue-900 mb-2 text-sm">資金調達能力</h4>
                        <p className="text-xs text-gray-600 mb-2">
                          500万円以上の資金調達能力があること
                        </p>
                        <p className="text-xs text-gray-500">
                          （預金残高証明書等で証明）
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-blue-900 mb-3">特定建設業の場合（すべてを満たすこと）</h3>
                    <div className="border border-orange-200 rounded p-4">
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>欠損の額が資本金の20%を超えないこと</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>流動比率が75%以上であること</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>資本金が2,000万円以上であること</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>自己資本が4,000万円以上であること</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="text-blue-900 mb-2">証明方法</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 貸借対照表</li>
                      <li>• 損益計算書</li>
                      <li>• 預金残高証明書</li>
                      <li>• 融資証明書等</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 5. 欠格要件 */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-6 pb-2 border-b-2 border-blue-500">5. 欠格要件に該当しないこと</h2>
                <p className="text-gray-600 mb-4">
                  以下の欠格要件に該当する場合は、建設業許可を取得することができません。
                </p>
                <div className="border border-red-200 rounded p-4 bg-red-50">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>成年被後見人、被保佐人または破産者で復権を得ない者</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>不正の手段により許可を受けたこと等により、許可を取り消され、その取消しの日から5年を経過しない者</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>建設業許可の取消しを免れるため廃業届を提出し、その届出の日から5年を経過しない者</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>禁錮以上の刑に処せられ、その刑の執行を終わり、またはその刑の執行を受けることがなくなった日から5年を経過しない者</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>建設業法、建築基準法等の法令に違反し、罰金刑に処せられ、その刑の執行を終わり、またはその刑の執行を受けることがなくなった日から5年を経過しない者</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>暴力団員または暴力団員でなくなった日から5年を経過しない者</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  法人の場合は、役員、政令で定める使用人が該当します。個人の場合は、本人、支配人が該当します。
                </p>
                <div className="bg-blue-50 p-4 rounded mt-4">
                  <h4 className="text-blue-900 mb-2">証明方法</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 身分証明書（本籍地の市区町村が発行）</li>
                    <li>• 登記されていないことの証明書（法務局が発行）</li>
                    <li>• 誓約書</li>
                  </ul>
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
