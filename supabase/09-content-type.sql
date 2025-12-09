-- Add content_type column to articles table
ALTER TABLE articles 
ADD COLUMN content_type TEXT DEFAULT 'news' CHECK (content_type IN ('news', 'blog', 'event', 'research'));

-- Create index for content_type
CREATE INDEX articles_content_type_idx ON articles(content_type);

-- Update existing articles to have a content_type (optional, based on category)
-- You can customize this based on your needs
UPDATE articles SET content_type = 'news' WHERE content_type IS NULL;
