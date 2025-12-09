-- Add image_credits column to articles table
ALTER TABLE articles 
ADD COLUMN image_credits TEXT;

-- Add comment to describe the column
COMMENT ON COLUMN articles.image_credits IS 'Credits/attribution for the cover image';
