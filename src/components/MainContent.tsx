import React from 'react';
import { CheckCircle, FileText, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function MainContent() {
  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-blue-600 pl-4">
          建設業許可取得サポート
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          建設業許可の取得は、要件判断や書類作成が非常に複雑です。
          当事務所では、専門家がお客様の状況に合わせて最適なプランをご提案し、
          迅速かつ確実に許可取得をサポートいたします。
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CheckCircle className="w-10 h-10 text-blue-600 mb-2" />
              <CardTitle>要件診断無料</CardTitle>
            </CardHeader>
            <CardContent>
              許可が取れるかどうか、まずは無料で診断いたします。お気軽にご相談ください。
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <FileText className="w-10 h-10 text-blue-600 mb-2" />
              <CardTitle>書類作成代行</CardTitle>
            </CardHeader>
            <CardContent>
              複雑な申請書類の作成から提出まで、すべて当事務所にお任せいただけます。
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <MapPin className="w-10 h-10 text-blue-600 mb-2" />
              <CardTitle>地域密着</CardTitle>
            </CardHeader>
            <CardContent>
              新潟市を中心に、地域に根ざした迅速な対応を心がけています。
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-blue-50 rounded-xl p-8 mb-12">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
          このようなお悩みはありませんか？
        </h3>
        <ul className="space-y-4 max-w-2xl mx-auto">
          <li className="flex items-center bg-white p-4 rounded-lg shadow-sm">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
            <span>元請けから許可を取るように言われた</span>
          </li>
          <li className="flex items-center bg-white p-4 rounded-lg shadow-sm">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
            <span>500万円以上の工事を請け負いたい</span>
          </li>
          <li className="flex items-center bg-white p-4 rounded-lg shadow-sm">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
            <span>忙しくて書類を作る時間がない</span>
          </li>
        </ul>
        <div className="mt-8 text-center">
          <p className="text-gray-700 font-bold mb-4">
            そのお悩み、当事務所が解決します！
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 h-auto">
            <Phone className="mr-2 h-5 w-5" />
            無料相談を予約する
          </Button>
        </div>
      </section>
    </main>
  );
}