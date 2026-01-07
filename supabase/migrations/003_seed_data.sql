-- Insert default topics
INSERT INTO public.topics (name, slug, description, icon_name, color) VALUES
  ('Cloud', 'cloud', 'Cloud computing, infrastructure, and DevOps', 'Cloud', '#3B82F6'),
  ('Data', 'data', 'Data engineering, analytics, and databases', 'Database', '#10B981'),
  ('Security', 'security', 'Cybersecurity, privacy, and best practices', 'Shield', '#EF4444'),
  ('AI', 'ai', 'Artificial intelligence and machine learning', 'Brain', '#8B5CF6');

-- Insert sample tags
INSERT INTO public.tags (name, slug) VALUES
  ('AWS', 'aws'),
  ('Azure', 'azure'),
  ('Google Cloud', 'google-cloud'),
  ('Kubernetes', 'kubernetes'),
  ('Docker', 'docker'),
  ('PostgreSQL', 'postgresql'),
  ('MongoDB', 'mongodb'),
  ('React', 'react'),
  ('Next.js', 'nextjs'),
  ('TypeScript', 'typescript'),
  ('Python', 'python'),
  ('JavaScript', 'javascript'),
  ('Machine Learning', 'machine-learning'),
  ('Deep Learning', 'deep-learning'),
  ('DevOps', 'devops'),
  ('CI/CD', 'cicd'),
  ('Microservices', 'microservices'),
  ('API', 'api'),
  ('GraphQL', 'graphql'),
  ('REST', 'rest');

-- Create storage buckets (this would typically be done via Supabase dashboard or CLI)
-- INSERT INTO storage.buckets (id, name, public) VALUES 
--   ('avatars', 'avatars', true),
--   ('organization-logos', 'organization-logos', true),
--   ('post-images', 'post-images', true),
--   ('uploads', 'uploads', false);

-- Note: Storage policies would be created separately via Supabase dashboard or CLI