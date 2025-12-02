import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';

export function Header() {
  const { content } = useContent();
  const { officeInfo } = content;

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center">
            <div className="text-blue-900">
              <div className="font-bold text-xl">{officeInfo.name}</div>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <a href={`tel:${officeInfo.phone}`} className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded transition-colors">
              <Phone className="w-5 h-5" />
              <span>{officeInfo.phone}</span>
            </a>
            <Link to="/contact" className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded transition-colors">
              <Mail className="w-5 h-5" />
              <span>お問い合わせ</span>
            </Link>
          </div>
        </div>
        <nav className="border-t border-gray-200">
          <ul className="flex items-center gap-8 py-3 text-sm">
            <li><Link to="/" className="text-blue-900 hover:text-blue-600 transition-colors">トップページ</Link></li>
            <li><Link to="/about" className="text-blue-900 hover:text-blue-600 transition-colors">建設業許可とは</Link></li>
            <li><Link to="/services" className="text-blue-900 hover:text-blue-600 transition-colors">サービス内容</Link></li>
            <li><Link to="/pricing" className="text-blue-900 hover:text-blue-600 transition-colors">料金について</Link></li>
            <li><Link to="/office" className="text-blue-900 hover:text-blue-600 transition-colors">事務所概要</Link></li>
            <li><Link to="/faq" className="text-blue-900 hover:text-blue-600 transition-colors">よくある質問</Link></li>
            <li><Link to="/contact" className="text-blue-900 hover:text-blue-600 transition-colors">お問い合わせ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}