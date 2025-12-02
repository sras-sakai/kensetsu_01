import React, { createContext, useContext, useState, useEffect } from 'react';

interface WordPressSettings {
  siteUrl: string;
  enabled: boolean;
}

interface WordPressPost {
  id: number;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
}

interface WordPressPage {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  slug: string;
}

interface WordPressContextType {
  settings: WordPressSettings;
  updateSettings: (settings: WordPressSettings) => void;
  posts: WordPressPost[];
  pages: WordPressPage[];
  loading: boolean;
  error: string | null;
  fetchContent: () => Promise<void>;
}

const defaultSettings: WordPressSettings = {
  siteUrl: '',
  enabled: false,
};

const WordPressContext = createContext<WordPressContextType | undefined>(undefined);

export function WordPressProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<WordPressSettings>(() => {
    const stored = localStorage.getItem('wordpressSettings');
    return stored ? JSON.parse(stored) : defaultSettings;
  });
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [pages, setPages] = useState<WordPressPage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('wordpressSettings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    if (settings.enabled && settings.siteUrl) {
      fetchContent();
    }
  }, [settings.enabled, settings.siteUrl]);

  const updateSettings = (newSettings: WordPressSettings) => {
    setSettings(newSettings);
  };

  const fetchContent = async () => {
    if (!settings.siteUrl) return;

    setLoading(true);
    setError(null);

    try {
      // WordPress REST API のベースURL
      const baseUrl = settings.siteUrl.replace(/\/$/, '');
      const apiUrl = `${baseUrl}/wp-json/wp/v2`;

      // 投稿を取得
      const postsResponse = await fetch(`${apiUrl}/posts?per_page=10&_embed`);
      if (!postsResponse.ok) {
        throw new Error('投稿の取得に失敗しました');
      }
      const postsData = await postsResponse.json();
      setPosts(postsData);

      // ページを取得
      const pagesResponse = await fetch(`${apiUrl}/pages?per_page=100&_embed`);
      if (!pagesResponse.ok) {
        throw new Error('ページの取得に失敗しました');
      }
      const pagesData = await pagesResponse.json();
      setPages(pagesData);

      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : '不明なエラーが発生しました');
      setLoading(false);
      console.error('WordPress API Error:', err);
    }
  };

  return (
    <WordPressContext.Provider value={{ settings, updateSettings, posts, pages, loading, error, fetchContent }}>
      {children}
    </WordPressContext.Provider>
  );
}

export function useWordPress() {
  const context = useContext(WordPressContext);
  if (!context) {
    throw new Error('useWordPress must be used within WordPressProvider');
  }
  return context;
}
