-- =============================================
-- CATEGORIES TABLE
-- =============================================
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Categories are viewable by everyone"
  ON categories FOR SELECT
  USING (true);

CREATE POLICY "Only admins can manage categories"
  ON categories FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('admin', 'editor')
    )
  );

-- Insert default categories
INSERT INTO categories (name, slug, description) VALUES
  ('AI', 'ai', 'Artificial Intelligence and Machine Learning'),
  ('Data', 'data', 'Data Science and Analytics'),
  ('Cloud', 'cloud', 'Cloud Computing and Infrastructure'),
  ('Development', 'development', 'Software Development and Engineering'),
  ('Security', 'security', 'Cybersecurity and Privacy');
