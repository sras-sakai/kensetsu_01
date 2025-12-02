import { Sidebar } from '../components/Sidebar';
import { Building, Globe } from 'lucide-react';

export function PermitTypesPage() {
  return (
    <>
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl mb-2">許可の種類</h1>
          <p className="text-blue-200">建設業許可の種類について詳しく解説します</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* 国土交通大臣許可と都道府県知事許可 */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-6 pb-2 border-b-2 border-blue-500">国土交通大臣許可と都道府県知事許可</h2>
                <p className="text-gray-600 mb-6">
                  建設業許可は、営業所の設置場所により「国土交通大臣許可」と「都道府県知事許可」に分けられます。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-2 border-blue-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="w-8 h-8 text-blue-500" />
                      <h3 className="text-xl text-blue-900">国土交通大臣許可</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      2つ以上の都道府県に営業所を設置して営業しようとする場合に必要な許可です。
                    </p>
                    <div className="bg-blue-50 p-4 rounded">
                      <h4 className="text-blue-900 mb-2">具体例</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 東京都と神奈川県に営業所がある</li>
                        <li>• 大阪府と京都府に営業所がある</li>
                        <li>• 複数の都道府県で営業展開している</li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-2 border-blue-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Building className="w-8 h-8 text-blue-500" />
                      <h3 className="text-xl text-blue-900">都道府県知事許可</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      1つの都道府県内のみに営業所を設置して営業する場合に必要な許可です。
                    </p>
                    <div className="bg-blue-50 p-4 rounded">
                      <h4 className="text-blue-900 mb-2">具体例</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 東京都内のみに営業所がある</li>
                        <li>• 大阪府内のみに営業所がある</li>
                        <li>• 県内で複数の営業所がある</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <p className="text-yellow-900 text-sm">
                    <strong>注意点</strong><br />
                    工事を行う場所については制限がありません。知事許可であっても、他の都道府県で工事を行うことができます。
                    営業所の設置場所のみが許可の区分の基準となります。
                  </p>
                </div>
              </section>

              {/* 一般建設業許可と特定建設業許可 */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-6 pb-2 border-b-2 border-blue-500">一般建設業許可と特定建設業許可</h2>
                <p className="text-gray-600 mb-6">
                  下請契約の規模により「一般建設業許可」と「特定建設業許可」に分けられます。
                </p>
                <div className="space-y-6">
                  <div className="border-2 border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl text-blue-900 mb-4">一般建設業許可</h3>
                    <p className="text-gray-600 mb-4">
                      下請契約の請負代金が4,500万円（建築一式工事の場合は7,000万円）未満の工事を施工する場合の許可です。
                    </p>
                    <div className="bg-blue-50 p-4 rounded mb-4">
                      <h4 className="text-blue-900 mb-2">こんな方が対象</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 元請として工事を請け負う場合</li>
                        <li>• 下請として工事を請け負う場合</li>
                        <li>• 下請に出す金額が4,500万円未満の場合</li>
                      </ul>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 p-3 rounded">
                        <h5 className="text-blue-900 text-sm mb-1">専任技術者の要件</h5>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• 国家資格者</li>
                          <li>• 10年以上の実務経験</li>
                          <li>• 指定学科卒業+実務経験</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 p-3 rounded">
                        <h5 className="text-blue-900 text-sm mb-1">財産的要件</h5>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• 自己資本500万円以上</li>
                          <li>• または資金調達能力</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-2 border-orange-200 rounded-lg p-6">
                    <h3 className="text-xl text-blue-900 mb-4">特定建設業許可</h3>
                    <p className="text-gray-600 mb-4">
                      発注者から直接請け負った工事について、下請契約の請負代金が4,500万円（建築一式工事の場合は7,000万円）以上となる場合に必要な許可です。
                    </p>
                    <div className="bg-orange-50 p-4 rounded mb-4">
                      <h4 className="text-blue-900 mb-2">こんな方が対象</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 元請として大規模な工事を請け負う場合</li>
                        <li>• 下請に出す金額が4,500万円以上の場合</li>
                        <li>• 公共工事の元請を行う場合</li>
                      </ul>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-orange-200 p-3 rounded">
                        <h5 className="text-blue-900 text-sm mb-1">専任技術者の要件</h5>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• 1級国家資格者</li>
                          <li>• 指定建設業は1級資格必須</li>
                          <li>• 一般建設業より厳格</li>
                        </ul>
                      </div>
                      <div className="border border-orange-200 p-3 rounded">
                        <h5 className="text-blue-900 text-sm mb-1">財産的要件</h5>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• 資本金2,000万円以上</li>
                          <li>• 自己資本4,000万円以上</li>
                          <li>• 流動比率75%以上など</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="text-blue-900 text-sm">
                    <strong>ポイント</strong><br />
                    下請として工事を請け負う場合は、請負金額に関わらず一般建設業許可で問題ありません。
                    特定建設業許可が必要となるのは、発注者から直接請け負った工事（元請工事）で、
                    下請に出す金額が4,500万円以上となる場合のみです。
                  </p>
                </div>
              </section>

              {/* 業種について */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-6 pb-2 border-b-2 border-blue-500">建設業の業種（29業種）</h2>
                <p className="text-gray-600 mb-6">
                  建設業許可は、工事の種類ごとに29の業種に分類されています。業種ごとに許可を取得する必要があります。
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg text-blue-900 mb-3 bg-blue-50 p-3 rounded">一式工事（2業種）</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 p-4 rounded">
                        <h4 className="text-blue-900 mb-2">土木一式工事</h4>
                        <p className="text-sm text-gray-600">
                          総合的な企画、指導、調整のもとに土木工作物を建設する工事
                        </p>
                      </div>
                      <div className="border border-gray-200 p-4 rounded">
                        <h4 className="text-blue-900 mb-2">建築一式工事</h4>
                        <p className="text-sm text-gray-600">
                          総合的な企画、指導、調整のもとに建築物を建設する工事
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg text-blue-900 mb-3 bg-blue-50 p-3 rounded">専門工事（27業種）</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                      <div className="border border-gray-200 p-3 rounded">大工工事業</div>
                      <div className="border border-gray-200 p-3 rounded">左官工事業</div>
                      <div className="border border-gray-200 p-3 rounded">とび・土工工事業</div>
                      <div className="border border-gray-200 p-3 rounded">石工事業</div>
                      <div className="border border-gray-200 p-3 rounded">屋根工事業</div>
                      <div className="border border-gray-200 p-3 rounded">電気工事業</div>
                      <div className="border border-gray-200 p-3 rounded">管工事業</div>
                      <div className="border border-gray-200 p-3 rounded">タイル・れんが・ブロック工事業</div>
                      <div className="border border-gray-200 p-3 rounded">鋼構造物工事業</div>
                      <div className="border border-gray-200 p-3 rounded">鉄筋工事業</div>
                      <div className="border border-gray-200 p-3 rounded">舗装工事業</div>
                      <div className="border border-gray-200 p-3 rounded">しゅんせつ工事業</div>
                      <div className="border border-gray-200 p-3 rounded">板金工事業</div>
                      <div className="border border-gray-200 p-3 rounded">ガラス工事業</div>
                      <div className="border border-gray-200 p-3 rounded">塗装工事業</div>
                      <div className="border border-gray-200 p-3 rounded">防水工事業</div>
                      <div className="border border-gray-200 p-3 rounded">内装仕上工事業</div>
                      <div className="border border-gray-200 p-3 rounded">機械器具設置工事業</div>
                      <div className="border border-gray-200 p-3 rounded">熱絶縁工事業</div>
                      <div className="border border-gray-200 p-3 rounded">電気通信工事業</div>
                      <div className="border border-gray-200 p-3 rounded">造園工事業</div>
                      <div className="border border-gray-200 p-3 rounded">さく井工事業</div>
                      <div className="border border-gray-200 p-3 rounded">建具工事業</div>
                      <div className="border border-gray-200 p-3 rounded">水道施設工事業</div>
                      <div className="border border-gray-200 p-3 rounded">消防施設工事業</div>
                      <div className="border border-gray-200 p-3 rounded">清掃施設工事業</div>
                      <div className="border border-gray-200 p-3 rounded">解体工事業</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="text-blue-900 text-sm">
                    <strong>業種の選び方</strong><br />
                    実際に行う工事内容に応じて、必要な業種の許可を取得します。
                    複数の業種を同時に申請することも可能です。どの業種を取得すべきか不明な場合は、
                    お気軽にご相談ください。
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
