-- =============================================
-- ONWARDISM DATABASE SETUP
-- Complete schema for news media platform
-- Run this entire file in Supabase SQL Editor
-- =============================================

-- =============================================
-- 1. PROFILES & USER PREFERENCES
-- =============================================

CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'author', 'editor', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT WITH CHECK (auth.uid() = id);

CREATE TABLE user_preferences (
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE PRIMARY KEY,
  theme TEXT DEFAULT 'system' CHECK (theme IN ('light', 'dark', 'system')),
  email_notifications BOOLEAN DEFAULT true,
  newsletter_subscribed BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE user_preferences ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own preferences"
  ON user_preferences FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own preferences"
  ON user_preferences FOR ALL USING (auth.uid() = user_id);

-- =============================================
-- 2. CATEGORIES
-- =============================================

CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Categories are viewable by everyone"
  ON categories FOR SELECT USING (true);

CREATE POLICY "Only admins can manage categories"
  ON categories FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('admin', 'editor')
    )
  );

INSERT INTO categories (name, slug, description) VALUES
  ('AI', 'ai', 'Artificial Intelligence and Machine Learning'),
  ('Data', 'data', 'Data Science and Analytics'),
  ('Cloud', 'cloud', 'Cloud Computing and Infrastructure'),
  ('Development', 'development', 'Software Development and Engineering'),
  ('Security', 'security', 'Cybersecurity and Privacy');

-- =============================================
-- 3. TAGS
-- =============================================

CREATE TABLE tags (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE tags ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tags are viewable by everyone"
  ON tags FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create tags"
  ON tags FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- =============================================
-- 4. ARTICLES
-- =============================================

CREATE TABLE articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  cover_image TEXT,
  image_credits TEXT,
  author_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  content_type TEXT DEFAULT 'news' CHECK (content_type IN ('news', 'blog', 'event', 'research')),
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  featured BOOLEAN DEFAULT false,
  views INTEGER DEFAULT 0,
  custom_date TIMESTAMPTZ,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Published articles are viewable by everyone"
  ON articles FOR SELECT
  USING (status = 'published' OR auth.uid() = author_id);

CREATE POLICY "Authors can create articles"
  ON articles FOR INSERT
  WITH CHECK (
    auth.uid() = author_id AND
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('author', 'editor', 'admin')
    )
  );

CREATE POLICY "Authors can update own articles"
  ON articles FOR UPDATE
  USING (
    auth.uid() = author_id OR
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('editor', 'admin')
    )
  );

CREATE POLICY "Editors can delete articles"
  ON articles FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('editor', 'admin')
    )
  );

CREATE INDEX articles_author_id_idx ON articles(author_id);
CREATE INDEX articles_category_id_idx ON articles(category_id);
CREATE INDEX articles_status_idx ON articles(status);
CREATE INDEX articles_content_type_idx ON articles(content_type);
CREATE INDEX articles_custom_date_idx ON articles(custom_date DESC);
CREATE INDEX articles_published_at_idx ON articles(published_at DESC);

-- =============================================
-- 5. ARTICLE_TAGS (Junction Table)
-- =============================================

CREATE TABLE article_tags (
  article_id UUID REFERENCES articles(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (article_id, tag_id)
);

ALTER TABLE article_tags ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Article tags are viewable by everyone"
  ON article_tags FOR SELECT USING (true);

CREATE POLICY "Authors can manage article tags"
  ON article_tags FOR ALL USING (
    EXISTS (
      SELECT 1 FROM articles
      WHERE articles.id = article_tags.article_id
      AND (
        articles.author_id = auth.uid() OR
        EXISTS (
          SELECT 1 FROM profiles
          WHERE profiles.id = auth.uid()
          AND profiles.role IN ('editor', 'admin')
        )
      )
    )
  );

-- =============================================
-- 6. COMMENTS
-- =============================================

CREATE TABLE comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  article_id UUID REFERENCES articles(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  content TEXT NOT NULL,
  parent_id UUID REFERENCES comments(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Comments are viewable by everyone"
  ON comments FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create comments"
  ON comments FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own comments"
  ON comments FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own comments"
  ON comments FOR DELETE USING (
    auth.uid() = user_id OR
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('editor', 'admin')
    )
  );

CREATE INDEX comments_article_id_idx ON comments(article_id);
CREATE INDEX comments_user_id_idx ON comments(user_id);
CREATE INDEX comments_parent_id_idx ON comments(parent_id);

-- =============================================
-- 7. BOOKMARKS
-- =============================================

CREATE TABLE bookmarks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  article_id UUID REFERENCES articles(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, article_id)
);

ALTER TABLE bookmarks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own bookmarks"
  ON bookmarks FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own bookmarks"
  ON bookmarks FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own bookmarks"
  ON bookmarks FOR DELETE USING (auth.uid() = user_id);

CREATE INDEX bookmarks_user_id_idx ON bookmarks(user_id);
CREATE INDEX bookmarks_article_id_idx ON bookmarks(article_id);

-- =============================================
-- 8. FUNCTIONS & TRIGGERS
-- =============================================

-- Function to automatically create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url'
  );
  
  INSERT INTO public.user_preferences (user_id)
  VALUES (NEW.id);
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_articles_updated_at BEFORE UPDATE ON articles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_comments_updated_at BEFORE UPDATE ON comments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_preferences_updated_at BEFORE UPDATE ON user_preferences
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to increment article views
CREATE OR REPLACE FUNCTION increment_article_views(article_uuid UUID)
RETURNS void AS $$
BEGIN
  UPDATE articles
  SET views = views + 1
  WHERE id = article_uuid;
END;
$$ LANGUAGE plpgsql;

-- =============================================
-- 9. STORAGE BUCKETS
-- =============================================

INSERT INTO storage.buckets (id, name, public) 
VALUES ('avatars', 'avatars', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public) 
VALUES ('article-images', 'article-images', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public) 
VALUES ('uploads', 'uploads', false)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for avatars bucket
CREATE POLICY "Avatar images are publicly accessible"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'avatars');

CREATE POLICY "Users can upload own avatar"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'avatars' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Users can update own avatar"
  ON storage.objects FOR UPDATE
  USING (
    bucket_id = 'avatars' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Users can delete own avatar"
  ON storage.objects FOR DELETE
  USING (
    bucket_id = 'avatars' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

-- Storage policies for article-images bucket
CREATE POLICY "Article images are publicly accessible"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'article-images');

CREATE POLICY "Authors can upload article images"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'article-images' AND
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('author', 'editor', 'admin')
    )
  );

CREATE POLICY "Authors can update article images"
  ON storage.objects FOR UPDATE
  USING (
    bucket_id = 'article-images' AND
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('author', 'editor', 'admin')
    )
  );

CREATE POLICY "Authors can delete article images"
  ON storage.objects FOR DELETE
  USING (
    bucket_id = 'article-images' AND
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('author', 'editor', 'admin')
    )
  );

-- Storage policies for uploads (private)
CREATE POLICY "Users can view own uploads"
  ON storage.objects FOR SELECT
  USING (
    bucket_id = 'uploads' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Users can upload own files"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'uploads' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Users can update own uploads"
  ON storage.objects FOR UPDATE
  USING (
    bucket_id = 'uploads' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Users can delete own uploads"
  ON storage.objects FOR DELETE
  USING (
    bucket_id = 'uploads' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

-- =============================================
-- SETUP COMPLETE!
-- =============================================
