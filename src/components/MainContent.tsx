import React, { createContext, useContext, useState, useEffect } from 'react';

interface NewsItem {
  id: string;
  date: string;
  title: string;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface PriceItem {
  id: string;
  service: string;
  price: string;
  legalFee: string;
}

interface OfficeInfo {
  name: string;
  representative: string;
  address: string;
  phone: string;
  fax: string;
  email: string;
  hours: string;
  registration: string;
}

interface ContentData {
  news: NewsItem[];
  faqs: FAQ[];
  prices: PriceItem[];
  officeInfo: OfficeInfo;
}

interface ContentContextType {
  content: ContentData;
  updateNews: (news: NewsItem[]) => void;
  updateFAQs: (faqs: FAQ[]) => void;
  updatePrices: (prices: PriceItem[]) => void;
  updateOfficeInfo: (info: OfficeInfo) => void;
}

const defaultContent: ContentData = {
  news: [
    { id: '1', date: '2025.11.30', title: '年末年始の営業についてのお知らせ' },
    { id: '2', date: '2025.11.15', title: '建設業許可申請の電子化について' },
    { id: '3', date: '2025.11.01', title: '建設業法改正に関する情報を更新しました' },
  ],
  faqs: [
    {
      id: '1',
      question: '建設業許可を取得するにはどのくらいの期間がかかりますか？',
      answer: '都道府県により異なりますが、申請から許可が下りるまで通常30日～45日程度かかります。書類の準備期間も含めると、ご依頼から許可取得まで2～3ヶ月程度を見込んでいただくことをお勧めします。'
    },
    {
      id: '2',
      question: '建設業許可の有効期間はどのくらいですか？',
      answer: '建設業許可の有効期間は5年間です。継続して建設業を営む場合は、有効期間満了日の30日前までに更新申請を行う必要があります。'
    },
    {
      id: '3',
      question: '個人事業主でも建設業許可は取得できますか？',
      answer: 'はい、個人事業主でも建設業許可を取得することができます。法人と同様に、経営業務の管理責任者や専任技術者などの要件を満たす必要があります。'
    },
    {
      id: '4',
      question: '建設業許可の要件について教えてください',
      answer: '主な要件は以下の通りです：\n1. 経営業務の管理責任者がいること\n2. 専任技術者が営業所ごとにいること\n3. 請負契約に関して誠実性があること\n4. 請負契約を履行するに足る財産的基礎または金銭的信用があること\n5. 欠格要件に該当しないこと'
    },
    {
      id: '5',
      question: '相談は無料ですか？',
      answer: 'はい、初回のご相談は無料です。お電話またはメールにてお気軽にお問い合わせください。ご相談内容をお伺いした上で、お見積もりを提示いたします。'
    },
  ],
  prices: [
    { id: '1', service: '知事許可（新規・一般）', price: '100,000円～', legalFee: '90,000円' },
    { id: '2', service: '知事許可（新規・特定）', price: '120,000円～', legalFee: '90,000円' },
    { id: '3', service: '大臣許可（新規・一般）', price: '150,000円～', legalFee: '150,000円' },
    { id: '4', service: '大臣許可（新規・特定）', price: '170,000円～', legalFee: '150,000円' },
    { id: '5', service: '更新申請（一般）', price: '50,000円～', legalFee: '50,000円' },
    { id: '6', service: '更新申請（特定）', price: '60,000円～', legalFee: '50,000円' },
    { id: '7', service: '業種追加（一般）', price: '70,000円～', legalFee: '50,000円' },
    { id: '8', service: '業種追加（特定）', price: '80,000円～', legalFee: '50,000円' },
    { id: '9', service: '般・特新規申請', price: '80,000円～', legalFee: '100,000円' },
    { id: '10', service: '各種変更届（決算変更届）', price: '30,000円～', legalFee: '不要' },
    { id: '11', service: '各種変更届（商号等変更）', price: '30,000円～', legalFee: '不要' },
    { id: '12', service: '各種変更届（役員変更）', price: '35,000円～', legalFee: '不要' },
    { id: '13', service: '廃業届', price: '20,000円～', legalFee: '不要' },
  ],
  officeInfo: {
    name: '建設業許可相談センター',
    representative: '行政書士 ○○ ○○',
    address: '〒100-0000\n東京都千代田区○○○ 1-2-3\n○○ビル 4F',
    phone: '025-378-2033',
    fax: '03-0000-0000',
    email: 'info@example.com',
    hours: '8:00～20:00',
    registration: '東京都行政書士会所属　第00000000号',
  }
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<ContentData>(() => {
    const stored = localStorage.getItem('websiteContent');
    return stored ? JSON.parse(stored) : defaultContent;
  });

  useEffect(() => {
    localStorage.setItem('websiteContent', JSON.stringify(content));
  }, [content]);

  const updateNews = (news: NewsItem[]) => {
    setContent(prev => ({ ...prev, news }));
  };

  const updateFAQs = (faqs: FAQ[]) => {
    setContent(prev => ({ ...prev, faqs }));
  };

  const updatePrices = (prices: PriceItem[]) => {
    setContent(prev => ({ ...prev, prices }));
  };

  const updateOfficeInfo = (info: OfficeInfo) => {
    setContent(prev => ({ ...prev, officeInfo: info }));
  };

  return (
    <ContentContext.Provider value={{ content, updateNews, updateFAQs, updatePrices, updateOfficeInfo }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within ContentProvider');
  }
  return context;
}