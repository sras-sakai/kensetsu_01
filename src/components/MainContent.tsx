import { CheckCircle, Clock, FileText, Users } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import { useWordPress } from '../contexts/WordPressContext';

export function MainContent() {
  const { content } = useContent();
  const { settings, posts } = useWordPress();

  // WordPress連携が有効な場合はWordPressの投稿を使用
  const newsItems = settings.enabled && posts.length > 0 
    ? posts.slice(0, 5).map(post => ({
        id: post.id.toString(),
        date: new Date(post.date).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.'),
        title: post.title.rendered,
      }))
    : content.news;

  return (
    <div className="space-y-8">
      {/* お知らせ */}
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl text-blue-900 mb-4 pb-2 border-b-2 border-blue-500">
          お知らせ
          {settings.enabled && posts.length > 0 && (
            <span className="text-sm text-gray-500 ml-2">(WordPress連携中)</span>
          )}
        </h2>
        <div className="space-y-3">
          {newsItems.map((item) => (
            <div key={item.id} className="flex gap-3 text-sm">
              <span className="text-gray-500">{item.date}</span>
              <a href="#" className="text-blue-600 hover:underline">{item.title}</a>
            </div>
          ))}
        </div>
      </section>

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
          <p>
            当センターでは、建設業許可の取得から更新、各種変更届まで、建設業に関する許認可手続きを
            トータルでサポートいたします。お気軽にご相談ください。
          </p>
        </div>
      </section>

      {/* サービス内容 */}
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl text-blue-900 mb-4 pb-2 border-b-2 border-blue-500">サービス内容</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded p-4">
            <div className="flex items-start gap-3 mb-2">
              <FileText className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-blue-900 mb-2">新規許可申請</h3>
                <p className="text-sm text-gray-600">
                  初めて建設業許可を取得される方向けのサービスです。
                  要件確認から書類作成、申請まで一貫してサポートします。
                </p>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded p-4">
            <div className="flex items-start gap-3 mb-2">
              <Clock className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-blue-900 mb-2">更新申請</h3>
                <p className="text-sm text-gray-600">
                  5年ごとの更新申請をサポート。期限管理から書類作成、
                  申請まで対応いたします。
                </p>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded p-4">
            <div className="flex items-start gap-3 mb-2">
              <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-blue-900 mb-2">業種追加</h3>
                <p className="text-sm text-gray-600">
                  既に許可をお持ちの方が、新たな業種の許可を取得する際の
                  サポートを行います。
                </p>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded p-4">
            <div className="flex items-start gap-3 mb-2">
              <Users className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-blue-900 mb-2">各種変更届</h3>
                <p className="text-sm text-gray-600">
                  商号、役員、資本金、営業所等の変更に伴う各種届出を
                  代行いたします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 選ばれる理由 */}
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl text-blue-900 mb-4 pb-2 border-b-2 border-blue-500">当センターが選ばれる理由</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="text-blue-900 mb-2">建設業許可専門</h3>
              <p className="text-gray-600">
                建設業許可申請を専門に扱う行政書士が対応します。
                豊富な実績と経験により、スムーズな許可取得をサポートします。
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="text-blue-900 mb-2">迅速な対応</h3>
              <p className="text-gray-600">
                お問い合わせから申請までスピーディーに対応。
                お急ぎの案件にも柔軟に対応いたします。
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="text-blue-900 mb-2">明朗な料金体系</h3>
              <p className="text-gray-600">
                事前にお見積もりを提示し、追加料金は一切いただきません。
                安心してご依頼いただけます。
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
              4
            </div>
            <div>
              <h3 className="text-blue-900 mb-2">アフターフォロー充実</h3>
              <p className="text-gray-600">
                許可取得後も、更新時期のお知らせや各種変更届のサポートなど、
                継続的にサポートいたします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 料金について */}
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl text-blue-900 mb-4 pb-2 border-b-2 border-blue-500">料金について</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-50">
                <th className="border border-gray-300 px-4 py-3 text-left">サービス内容</th>
                <th className="border border-gray-300 px-4 py-3 text-left">報酬額（税別）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">知事許可（新規）</td>
                <td className="border border-gray-300 px-4 py-3">100,000円～</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">大臣許可（新規）</td>
                <td className="border border-gray-300 px-4 py-3">150,000円～</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">更新申請</td>
                <td className="border border-gray-300 px-4 py-3">50,000円～</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">業種追加</td>
                <td className="border border-gray-300 px-4 py-3">70,000円～</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">各種変更届</td>
                <td className="border border-gray-300 px-4 py-3">30,000円～</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          ※上記金額は報酬額です。別途、法定手数料（申請手数料）が必要となります。<br />
          ※案件の内容により金額が変動する場合がございます。詳しくはお問い合わせください。
        </p>
      </section>

      {/* よくある質問 */}
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl text-blue-900 mb-4 pb-2 border-b-2 border-blue-500">よくある質問</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded p-4">
            <summary className="cursor-pointer text-blue-900">
              建設業許可を取得するにはどのくらいの期間がかかりますか？
            </summary>
            <p className="mt-3 text-gray-600 pl-4">
              都道府県により異なりますが、申請から許可が下りるまで通常30日～45日程度かかります。
              書類の準備期間も含めると、ご依頼から許可取得まで2～3ヶ月程度を見込んでいただくことをお勧めします。
            </p>
          </details>
          <details className="border border-gray-200 rounded p-4">
            <summary className="cursor-pointer text-blue-900">
              建設業許可の有効期間はどのくらいですか？
            </summary>
            <p className="mt-3 text-gray-600 pl-4">
              建設業許可の有効期間は5年間です。継続して建設業を営む場合は、
              有効期間満了日の30日前までに更新申請を行う必要があります。
            </p>
          </details>
          <details className="border border-gray-200 rounded p-4">
            <summary className="cursor-pointer text-blue-900">
              個人事業主でも建設業許可は取得できますか？
            </summary>
            <p className="mt-3 text-gray-600 pl-4">
              はい、個人事業主でも建設業許可を取得することができます。
              法人と同様に、経営業務の管理責任者や専任技術者などの要件を満たす必要があります。
            </p>
          </details>
          <details className="border border-gray-200 rounded p-4">
            <summary className="cursor-pointer text-blue-900">
              建設業許可の要件について教えてください
            </summary>
            <p className="mt-3 text-gray-600 pl-4">
              主な要件は以下の通りです：<br />
              1. 経営業務の管理責任者がいること<br />
              2. 専任技術者が営業所ごとにいること<br />
              3. 請負契約に関して誠実性があること<br />
              4. 請負契約を履行するに足る財産的基礎または金銭的信用があること<br />
              5. 欠格要件に該当しないこと
            </p>
          </details>
          <details className="border border-gray-200 rounded p-4">
            <summary className="cursor-pointer text-blue-900">
              相談は無料ですか？
            </summary>
            <p className="mt-3 text-gray-600 pl-4">
              はい、初回のご相談は無料です。お電話またはメールにてお気軽にお問い合わせく��さい。
              ご相談内容をお伺いした上で、お見積もりを提示いたします。
            </p>
          </details>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section id="contact" className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl text-blue-900 mb-4 pb-2 border-b-2 border-blue-500">お問い合わせ</h2>
        <p className="mb-6 text-gray-600">
          建設業許可に関するご相談は、お電話またはメールフォームにて承っております。<br />
          お気軽にお問い合わせください。
        </p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm">お名前 <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" required />
            </div>
            <div>
              <label className="block mb-1 text-sm">会社名</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm">メールアドレス <span className="text-red-500">*</span></label>
              <input type="email" className="w-full border border-gray-300 rounded px-3 py-2" required />
            </div>
            <div>
              <label className="block mb-1 text-sm">電話番号</label>
              <input type="tel" className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-sm">お問い合わせ内容 <span className="text-red-500">*</span></label>
            <textarea className="w-full border border-gray-300 rounded px-3 py-2 h-32" required></textarea>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-3 rounded transition-colors">
              送信する
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}