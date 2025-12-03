import { Link } from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';

export function HeroSection() {
  const { content } = useContent();
  const { officeInfo } = content;

  return (
    <div className="relative bg-gray-900 text-white overflow-hidden min-h-[600px] flex items-center">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1640213011613-b5d095e3993b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNhdmF0b3IlMjB3b3JraW5nJTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NjQ3MzQzODB8MA&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg text-white">
            建設業許可申請を専門サポート
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md text-white">
            建設業許可取得から更新、各種変更届まで<br />
            経験豊富な行政書士がトータルサポートいたします
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded text-lg font-bold transition-colors shadow-lg">
              まずは無料相談
            </Link>
            <a href={`tel:${officeInfo.phone}`} className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded text-lg font-bold transition-colors shadow-lg">
              お電話でのご相談
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}