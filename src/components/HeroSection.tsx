import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <div className="relative bg-blue-900 text-white overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1723107638858-331404b1a09a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY0NTIzNDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl mb-4">
            建設業許可申請を専門サポート
          </h1>
          <p className="text-xl mb-6">
            建設業許可取得から更新、各種変更届まで<br />
            経験豊富な行政書士がトータルサポートいたします
          </p>
          <div className="flex gap-4">
            <Link to="/contact" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded transition-colors inline-block">
              まずは無料相談
            </Link>
            <a href="tel:0120-000-0000" className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded transition-colors inline-block">
              お電話でのご相談
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}