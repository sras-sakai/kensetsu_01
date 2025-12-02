import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <div className="space-y-6">
      {/* お問い合わせボックス */}
      <div className="bg-blue-900 text-white rounded-lg p-6">
        <h3 className="text-xl mb-4 text-center">お気軽にご相談ください</h3>
        <div className="space-y-4">
          <a href="tel:0120-000-0000" className="block bg-green-500 hover:bg-green-600 text-white text-center py-4 rounded transition-colors">
            <Phone className="w-6 h-6 inline-block mr-2" />
            <span className="text-xl">0120-000-0000</span>
          </a>
          <div className="text-center text-sm">
            <Clock className="w-4 h-4 inline-block mr-1" />
            受付時間：平日 9:00～18:00
          </div>
          <Link to="/contact" className="block bg-blue-500 hover:bg-blue-600 text-white text-center py-3 rounded transition-colors">
            <Mail className="w-5 h-5 inline-block mr-2" />
            メールでのお問い合わせ
          </Link>
        </div>
      </div>

      {/* メニュー */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg text-blue-900 mb-4 pb-2 border-b border-gray-300">メニュー</h3>
        <ul className="space-y-2 text-sm">
          <li className="border-b border-gray-200 pb-2">
            <Link to="/about" className="text-blue-600 hover:underline">建設業許可とは</Link>
          </li>
          <li className="border-b border-gray-200 pb-2">
            <Link to="/requirements" className="text-blue-600 hover:underline">許可の要件</Link>
          </li>
          <li className="border-b border-gray-200 pb-2">
            <Link to="/permit-types" className="text-blue-600 hover:underline">許可の種類</Link>
          </li>
          <li className="border-b border-gray-200 pb-2">
            <Link to="/services" className="text-blue-600 hover:underline">新規申請</Link>
          </li>
          <li className="border-b border-gray-200 pb-2">
            <Link to="/services" className="text-blue-600 hover:underline">更新申請</Link>
          </li>
          <li className="border-b border-gray-200 pb-2">
            <Link to="/services" className="text-blue-600 hover:underline">業種追加</Link>
          </li>
          <li className="border-b border-gray-200 pb-2">
            <Link to="/services" className="text-blue-600 hover:underline">各種変更届</Link>
          </li>
          <li className="border-b border-gray-200 pb-2">
            <a href="#" className="text-blue-600 hover:underline">経営事項審査</a>
          </li>
          <li className="border-b border-gray-200 pb-2">
            <a href="#" className="text-blue-600 hover:underline">入札参加資格申請</a>
          </li>
        </ul>
      </div>

      {/* 対応エリア */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg text-blue-900 mb-4 pb-2 border-b border-gray-300">対応エリア</h3>
        <p className="text-sm text-gray-600 mb-3">
          以下の地域を中心に対応しております。その他の地域についてもお気軽にご相談ください。
        </p>
        <ul className="space-y-1 text-sm text-gray-700">
          <li>• 東京都全域</li>
          <li>• 神奈川県</li>
          <li>• 千葉県</li>
          <li>• 埼玉県</li>
          <li>• その他関東近郊</li>
        </ul>
      </div>

      {/* 建設業の種類 */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg text-blue-900 mb-4 pb-2 border-b border-gray-300">建設業の種類（29業種）</h3>
        <div className="text-sm space-y-2">
          <div>
            <div className="text-blue-900 mb-1">一式工事（2業種）</div>
            <ul className="text-gray-600 text-xs pl-4 space-y-1">
              <li>・土木一式工事</li>
              <li>・建築一式工事</li>
            </ul>
          </div>
          <div>
            <div className="text-blue-900 mb-1">専門工事（27業種）</div>
            <ul className="text-gray-600 text-xs pl-4 space-y-1">
              <li>・大工工事</li>
              <li>・左官工事</li>
              <li>・とび・土工工事</li>
              <li>・石工事</li>
              <li>・屋根工事</li>
              <li>・電気工事</li>
              <li>・管工事</li>
              <li>・タイル・れんが・ブロック工事</li>
              <li>・鋼構造物工事</li>
              <li>・鉄筋工事</li>
              <li>・舗装工事</li>
              <li>・しゅんせつ工事</li>
              <li>・板金工事</li>
              <li>・ガラス工事</li>
              <li>・塗装工事</li>
              <li>・防水工事</li>
              <li>・内装仕上工事</li>
              <li>・機械器具設置工事</li>
              <li>・熱絶縁工事</li>
              <li>・電気通信工事</li>
              <li>・造園工事</li>
              <li>・さく井工事</li>
              <li>・建具工事</li>
              <li>・水道施設工事</li>
              <li>・消防施設工事</li>
              <li>・清掃施設工事</li>
              <li>・解体工事</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 関連リンク */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg text-blue-900 mb-4 pb-2 border-b border-gray-300">関連リンク</h3>
        <ul className="space-y-2 text-sm">
          <li className="border-b border-gray-200 pb-2">
            <a href="https://www.mlit.go.jp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">国土交通省</a>
          </li>
          <li className="border-b border-gray-200 pb-2">
            <a href="#" className="text-blue-600 hover:underline">東京都都市整備局</a>
          </li>
          <li className="border-b border-gray-200 pb-2">
            <a href="#" className="text-blue-600 hover:underline">建設業法令遵守ガイドライン</a>
          </li>
          <li className="border-b border-gray-200 pb-2">
            <a href="#" className="text-blue-600 hover:underline">建設業許可事務ガイドライン</a>
          </li>
        </ul>
      </div>

      {/* バナー広告風 */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-6 text-center">
        <h4 className="mb-2">初回相談無料</h4>
        <p className="text-sm mb-4">建設業許可のことなら<br />お気軽にご相談ください</p>
        <Link to="/contact" className="inline-block bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-100 transition-colors text-sm">
          お問い合わせはこちら
        </Link>
      </div>
    </div>
  );
}