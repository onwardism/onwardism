-- =============================================
-- ARTICLES TABLE
-- =============================================
CREATE TABLE articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  cover_image TEXT,
  author_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  featured BOOLEAN DEFAULT false,
  views INTEGER DEFAULT 0,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Policies
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

-- Indexes
CREATE INDEX articles_author_id_idx ON articles(author_id);
CREATE INDEX articles_category_id_idx ON articles(category_id);
CREATE INDEX articles_status_idx ON articles(status);
CREATE INDEX articles_published_at_idx ON articles(published_at DESC);

-- =============================================
-- ARTICLE_TAGS (Junction Table)
-- =============================================
CREATE TABLE article_tags (
  article_id UUID REFERENCES articles(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (article_id, tag_id)
);

-- Enable RLS
ALTER TABLE article_tags ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Article tags are viewable by everyone"
  ON article_tags FOR SELECT
  USING (true);

CREATE POLICY "Authors can manage article tags"
  ON article_tags FOR ALL
  USING (
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
