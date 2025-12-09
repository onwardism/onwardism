-- Add custom_date column to articles table for user-specified publish date
ALTER TABLE articles 
ADD COLUMN custom_date TIMESTAMPTZ;

-- Add comment to describe the column
COMMENT ON COLUMN articles.custom_date IS 'Custom publish date set by user (defaults to current IST time)';

-- Create index for custom_date
CREATE INDEX articles_custom_date_idx ON articles(custom_date DESC);
