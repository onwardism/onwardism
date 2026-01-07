export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string
          full_name: string | null
          avatar_url: string | null
          bio: string | null
          website_url: string | null
          github_username: string | null
          linkedin_url: string | null
          twitter_username: string | null
          location: string | null
          skills: string[] | null
          is_verified: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username: string
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          website_url?: string | null
          github_username?: string | null
          linkedin_url?: string | null
          twitter_username?: string | null
          location?: string | null
          skills?: string[] | null
          is_verified?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          website_url?: string | null
          github_username?: string | null
          linkedin_url?: string | null
          twitter_username?: string | null
          location?: string | null
          skills?: string[] | null
          is_verified?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      organizations: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          logo_url: string | null
          website_url: string | null
          github_org: string | null
          linkedin_url: string | null
          twitter_username: string | null
          location: string | null
          industry: string | null
          size_range: string | null
          is_verified: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          logo_url?: string | null
          website_url?: string | null
          github_org?: string | null
          linkedin_url?: string | null
          twitter_username?: string | null
          location?: string | null
          industry?: string | null
          size_range?: string | null
          is_verified?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          logo_url?: string | null
          website_url?: string | null
          github_org?: string | null
          linkedin_url?: string | null
          twitter_username?: string | null
          location?: string | null
          industry?: string | null
          size_range?: string | null
          is_verified?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      organization_members: {
        Row: {
          id: string
          organization_id: string
          user_id: string
          role: string
          joined_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          user_id: string
          role?: string
          joined_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          user_id?: string
          role?: string
          joined_at?: string
        }
      }
      posts: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string | null
          content: string
          content_html: string | null
          featured_image_url: string | null
          type: string
          status: string
          author_id: string | null
          organization_id: string | null
          topic_id: string | null
          reading_time: number | null
          view_count: number
          like_count: number
          comment_count: number
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          excerpt?: string | null
          content: string
          content_html?: string | null
          featured_image_url?: string | null
          type: string
          status?: string
          author_id?: string | null
          organization_id?: string | null
          topic_id?: string | null
          reading_time?: number | null
          view_count?: number
          like_count?: number
          comment_count?: number
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          excerpt?: string | null
          content?: string
          content_html?: string | null
          featured_image_url?: string | null
          type?: string
          status?: string
          author_id?: string | null
          organization_id?: string | null
          topic_id?: string | null
          reading_time?: number | null
          view_count?: number
          like_count?: number
          comment_count?: number
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      topics: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          icon_name: string | null
          color: string | null
          is_active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          icon_name?: string | null
          color?: string | null
          is_active?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          icon_name?: string | null
          color?: string | null
          is_active?: boolean
          created_at?: string
        }
      }
      comments: {
        Row: {
          id: string
          post_id: string
          user_id: string
          parent_id: string | null
          content: string
          content_html: string | null
          is_edited: boolean
          like_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          post_id: string
          user_id: string
          parent_id?: string | null
          content: string
          content_html?: string | null
          is_edited?: boolean
          like_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          post_id?: string
          user_id?: string
          parent_id?: string | null
          content?: string
          content_html?: string | null
          is_edited?: boolean
          like_count?: number
          created_at?: string
          updated_at?: string
        }
      }
      post_likes: {
        Row: {
          id: string
          post_id: string
          user_id: string
          created_at: string
        }
        Insert: {
          id?: string
          post_id: string
          user_id: string
          created_at?: string
        }
        Update: {
          id?: string
          post_id?: string
          user_id?: string
          created_at?: string
        }
      }
      user_follows: {
        Row: {
          id: string
          follower_id: string
          following_id: string
          created_at: string
        }
        Insert: {
          id?: string
          follower_id: string
          following_id: string
          created_at?: string
        }
        Update: {
          id?: string
          follower_id?: string
          following_id?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

// Helper types
export type Profile = Database['public']['Tables']['profiles']['Row']
export type Organization = Database['public']['Tables']['organizations']['Row']
export type Post = Database['public']['Tables']['posts']['Row']
export type Topic = Database['public']['Tables']['topics']['Row']
export type Comment = Database['public']['Tables']['comments']['Row']

// Extended types with relations
export type PostWithAuthor = Post & {
  profiles: Profile | null
  organizations: Organization | null
  topics: Topic | null
}

export type CommentWithAuthor = Comment & {
  profiles: Profile
}

export type OrganizationWithMembers = Organization & {
  organization_members: Array<{
    profiles: Profile
    role: string
    joined_at: string
  }>
}