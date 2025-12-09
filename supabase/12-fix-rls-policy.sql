-- Update your user to have author role (replace with your email)
UPDATE profiles 
SET role = 'author' 
WHERE email = 'hrudu.shibu@onwardism.com';

-- OR if you want to allow all authenticated users to create articles (less restrictive):
-- DROP POLICY "Authors can create articles" ON articles;
-- CREATE POLICY "Authenticated users can create articles"
--   ON articles FOR INSERT
--   WITH CHECK (auth.uid() = author_id);
