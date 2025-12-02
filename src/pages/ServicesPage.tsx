import { Sidebar } from '../components/Sidebar';
import { FileText, Clock, CheckCircle, Users, RefreshCw, Layers } from 'lucide-react';

export function ServicesPage() {
  return (
    <>
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl mb-2">サービス内容</h1>
          <p className="text-blue-200">建設業許可に関する各種サービスをご提供しています</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* サービス一覧 */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-6 pb-2 border-b-2 border-blue-500">提供サービス</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-2 border-blue-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
                    <div className="flex items-start gap-3 mb-3">
                      <FileText className="w-8 h-8 text-blue-500 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl text-blue-900 mb-2">新規許可申請</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      初めて建設業許可を取得される方向けのサービスです。
                      要件確認から書類作成、申請まで一貫してサポートします。
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 許可要件の確認</li>
                      <li>• 必要書類の収集支援</li>
                      <li>• 申請書類の作成</li>
                      <li>• 行政庁への申請代行</li>
                    </ul>
                  </div>

                  <div className="border-2 border-blue-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
                    <div className="flex items-start gap-3 mb-3">
                      <RefreshCw className="w-8 h-8 text-blue-500 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl text-blue-900 mb-2">更新申請</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      5年ごとの更新申請をサポート。期限管理から書類作成、
                      申請まで対応いたします。
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 更新時期のお知らせ</li>
                      <li>• 必要書類の準備</li>
                      <li>• 更新申請書の作成</li>
                      <li>• 申請手続きの代行</li>
                    </ul>
                  </div>

                  <div className="border-2 border-blue-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
                    <div className="flex items-start gap-3 mb-3">
                      <Layers className="w-8 h-8 text-blue-500 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl text-blue-900 mb-2">業種追加</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      既に許可をお持ちの方が、新たな業種の許可を取得する際の
                      サポートを行います。
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 追加業種の要件確認</li>
                      <li>• 専任技術者の確認</li>
                      <li>• 業種追加申請書の作成</li>
                      <li>• 申請手続きの代行</li>
                    </ul>
                  </div>

                  <div className="border-2 border-blue-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
                    <div className="flex items-start gap-3 mb-3">
                      <Users className="w-8 h-8 text-blue-500 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl text-blue-900 mb-2">各種変更届</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      商号、役員、資本金、営業所等の変更に伴う各種届出を
                      代行いたします。
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 商号変更届</li>
                      <li>• 役員変更届</li>
                      <li>• 営業所変更届</li>
                      <li>• 専任技術者変更届</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* サービスの流れ */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-6 pb-2 border-b-2 border-blue-500">サービスの流れ</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-blue-900 mb-2">お問い合わせ・ご相談</h3>
                      <p className="text-gray-600">
                        まずはお電話またはメールフォームよりお気軽にご相談ください。
                        初回相談は無料です。お客様のご状況をお伺いし、最適なプランをご提案いたします。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-blue-900 mb-2">要件確認・お見積もり</h3>
                      <p className="text-gray-600">
                        建設業許可の要件を満たしているか確認します。
                        必要な書類や手続きの流れをご説明し、お見積もりを提示いたします。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-blue-900 mb-2">ご契約・書類準備</h3>
                      <p className="text-gray-600">
                        ご納得いただけましたらご契約となります。
                        必要書類のリストをお渡しし、書類の収集をサポートいたします。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-blue-900 mb-2">申請書類作成</h3>
                      <p className="text-gray-600">
                        専門の行政書士が申請書類を作成します。
                        複雑な書類も正確に作成し、不備のない申請をお約束します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-blue-900 mb-2">申請・許可取得</h3>
                      <p className="text-gray-600">
                        行政庁へ申請を行います。審査状況を随時ご報告し、
                        許可が下りるまでしっかりサポートいたします。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      6
                    </div>
                    <div className="flex-1">
                      <h3 className="text-blue-900 mb-2">アフターフォロー</h3>
                      <p className="text-gray-600">
                        許可取得後も、更新時期のお知らせや各種変更届のサポートなど、
                        継続的にフォローいたします。
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 当センターの強み */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-6 pb-2 border-b-2 border-blue-500">当センターの強み</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <h3 className="text-blue-900 mb-2">豊富な実績</h3>
                    <p className="text-gray-700 text-sm">
                      これまで数多くの建設業許可申請をサポートしてきた実績があります。
                      様々なケースに対応できる経験とノウハウがあります。
                    </p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <h3 className="text-blue-900 mb-2">スピード対応</h3>
                    <p className="text-gray-700 text-sm">
                      お問い合わせから申請まで迅速に対応します。
                      お急ぎの案件にも柔軟に対応いたします。
                    </p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <h3 className="text-blue-900 mb-2">明朗な料金</h3>
                    <p className="text-gray-700 text-sm">
                      事前にお見積もりを提示し、追加料金は一切いただきません。
                      安心してご依頼いただけます。
                    </p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <h3 className="text-blue-900 mb-2">丁寧なサポート</h3>
                    <p className="text-gray-700 text-sm">
                      専門用語を使わず、わかりやすく丁寧にご説明します。
                      お客様が安心してお任せいただけるよう心がけています。
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
