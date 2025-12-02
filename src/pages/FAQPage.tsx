import { Sidebar } from '../components/Sidebar';
import { HelpCircle } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

export function FAQPage() {
  const { content } = useContent();

  return (
    <>
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl mb-2">よくある質問</h1>
          <p className="text-blue-200">建設業許可に関してよくいただくご質問にお答えします</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* 建設業許可について */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl text-blue-900 mb-6 pb-2 border-b-2 border-blue-500">よくある質問</h2>
                <div className="space-y-4">
                  {content.faqs.map((faq) => (
                    <details key={faq.id} className="border border-gray-200 rounded p-4 hover:bg-gray-50 cursor-pointer">
                      <summary className="text-blue-900">
                        {faq.question}
                      </summary>
                      <p className="mt-3 text-gray-600 pl-4 whitespace-pre-wrap">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
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