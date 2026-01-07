-- Enable Row Level Security on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organization_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organization_invites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comment_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_follows ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organization_follows ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Profiles are viewable by everyone" ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- User preferences policies
CREATE POLICY "Users can view own preferences" ON public.user_preferences
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own preferences" ON public.user_preferences
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own preferences" ON public.user_preferences
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Organizations policies
CREATE POLICY "Organizations are viewable by everyone" ON public.organizations
  FOR SELECT USING (true);

CREATE POLICY "Organization members can update organization" ON public.organizations
  FOR UPDATE USING (
    id IN (
      SELECT organization_id FROM public.organization_members 
      WHERE user_id = auth.uid() AND role IN ('owner', 'admin')
    )
  );

CREATE POLICY "Authenticated users can create organizations" ON public.organizations
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Organization members policies
CREATE POLICY "Organization members are viewable by everyone" ON public.organization_members
  FOR SELECT USING (true);

CREATE POLICY "Organization admins can manage members" ON public.organization_members
  FOR ALL USING (
    organization_id IN (
      SELECT organization_id FROM public.organization_members 
      WHERE user_id = auth.uid() AND role IN ('owner', 'admin')
    )
  );

CREATE POLICY "Users can leave organizations" ON public.organization_members
  FOR DELETE USING (auth.uid() = user_id);

-- Organization invites policies
CREATE POLICY "Organization admins can manage invites" ON public.organization_invites
  FOR ALL USING (
    organization_id IN (
      SELECT organization_id FROM public.organization_members 
      WHERE user_id = auth.uid() AND role IN ('owner', 'admin')
    )
  );

CREATE POLICY "Users can view invites sent to them" ON public.organization_invites
  FOR SELECT USING (
    email = (SELECT email FROM auth.users WHERE id = auth.uid())
  );

-- Topics policies
CREATE POLICY "Topics are viewable by everyone" ON public.topics
  FOR SELECT USING (is_active = true);

-- Posts policies
CREATE POLICY "Published posts are viewable by everyone" ON public.posts
  FOR SELECT USING (status = 'published');

CREATE POLICY "Authors can view own posts" ON public.posts
  FOR SELECT USING (auth.uid() = author_id);

CREATE POLICY "Organization members can view org posts" ON public.posts
  FOR SELECT USING (
    organization_id IN (
      SELECT organization_id FROM public.organization_members 
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Authors can update own posts" ON public.posts
  FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "Authors can insert posts" ON public.posts
  FOR INSERT WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors can delete own posts" ON public.posts
  FOR DELETE USING (auth.uid() = author_id);

-- Tags policies
CREATE POLICY "Tags are viewable by everyone" ON public.tags
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create tags" ON public.tags
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Post tags policies
CREATE POLICY "Post tags are viewable by everyone" ON public.post_tags
  FOR SELECT USING (true);

CREATE POLICY "Post authors can manage post tags" ON public.post_tags
  FOR ALL USING (
    post_id IN (
      SELECT id FROM public.posts WHERE author_id = auth.uid()
    )
  );

-- Post likes policies
CREATE POLICY "Post likes are viewable by everyone" ON public.post_likes
  FOR SELECT USING (true);

CREATE POLICY "Users can manage own post likes" ON public.post_likes
  FOR ALL USING (auth.uid() = user_id);

-- Comments policies
CREATE POLICY "Comments are viewable by everyone" ON public.comments
  FOR SELECT USING (true);

CREATE POLICY "Users can insert comments" ON public.comments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own comments" ON public.comments
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own comments" ON public.comments
  FOR DELETE USING (auth.uid() = user_id);

-- Comment likes policies
CREATE POLICY "Comment likes are viewable by everyone" ON public.comment_likes
  FOR SELECT USING (true);

CREATE POLICY "Users can manage own comment likes" ON public.comment_likes
  FOR ALL USING (auth.uid() = user_id);

-- User follows policies
CREATE POLICY "User follows are viewable by everyone" ON public.user_follows
  FOR SELECT USING (true);

CREATE POLICY "Users can manage own follows" ON public.user_follows
  FOR ALL USING (auth.uid() = follower_id);

-- Organization follows policies
CREATE POLICY "Organization follows are viewable by everyone" ON public.organization_follows
  FOR SELECT USING (true);

CREATE POLICY "Users can manage own organization follows" ON public.organization_follows
  FOR ALL USING (auth.uid() = user_id);

-- Post views policies
CREATE POLICY "Users can insert post views" ON public.post_views
  FOR INSERT WITH CHECK (
    auth.uid() = user_id OR user_id IS NULL
  );

CREATE POLICY "Post views are viewable by post authors" ON public.post_views
  FOR SELECT USING (
    post_id IN (
      SELECT id FROM public.posts WHERE author_id = auth.uid()
    )
  );

-- Newsletter subscriptions policies
CREATE POLICY "Users can manage own newsletter subscription" ON public.newsletter_subscriptions
  FOR ALL USING (
    auth.uid() = user_id OR 
    email = (SELECT email FROM auth.users WHERE id = auth.uid())
  );

CREATE POLICY "Anyone can subscribe to newsletter" ON public.newsletter_subscriptions
  FOR INSERT WITH CHECK (true);