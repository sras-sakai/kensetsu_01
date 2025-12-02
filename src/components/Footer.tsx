import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';

export function Footer() {
  const { content } = useContent();
  const { officeInfo } = content;

  return (
    <footer className="bg-blue-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4">{officeInfo.name}</h3>
            <p className="text-sm text-blue-200 mb-4">
              建設業許可申請を専門とする行政書士事務所です。
              豊富な経験と実績で、確実な許可取得をサポートいたします。
            </p>
          </div>
          <div>
            <h4 className="mb-4">事務所情報</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="whitespace-pre-wrap">{officeInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>TEL: {officeInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>{officeInfo.email}</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">営業時間</h4>
            <div className="text-sm text-blue-200 whitespace-pre-wrap">
              {officeInfo.hours}
            </div>
          </div>
        </div>
        <div className="border-t border-blue-700 pt-8">
          <div className="flex flex-wrap gap-4 justify-center mb-4 text-sm">
            <Link to="/" className="text-blue-200 hover:text-white transition-colors">トップページ</Link>
            <span className="text-blue-700">|</span>
            <Link to="/about" className="text-blue-200 hover:text-white transition-colors">建設業許可とは</Link>
            <span className="text-blue-700">|</span>
            <Link to="/services" className="text-blue-200 hover:text-white transition-colors">サービス内容</Link>
            <span className="text-blue-700">|</span>
            <Link to="/pricing" className="text-blue-200 hover:text-white transition-colors">料金について</Link>
            <span className="text-blue-700">|</span>
            <Link to="/office" className="text-blue-200 hover:text-white transition-colors">事務所概要</Link>
            <span className="text-blue-700">|</span>
            <Link to="#" className="text-blue-200 hover:text-white transition-colors">プライバシーポリシー</Link>
            <span className="text-blue-700">|</span>
            <Link to="/contact" className="text-blue-200 hover:text-white transition-colors">お問い合わせ</Link>
          </div>
          <p className="text-center text-sm text-blue-200">
            &copy; 2025 {officeInfo.name} All Rights Reserved.
          </p>
          <div className="mt-4 text-center">
            <Link to="/admin/login" className="text-xs text-blue-400 hover:text-blue-200 transition-colors">
              管理者ログイン
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}