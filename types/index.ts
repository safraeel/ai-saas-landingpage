// User Types
export interface User {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

// Content Generation Types
export interface GeneratedContent {
  id: string;
  userId: string;
  idea: string;
  platforms: string[];
  content: {
    tiktok?: {
      hooks: string[];
      captions: string[];
    };
    instagram?: {
      bio: string;
      captions: string[];
      hashtags: string[];
    };
    linkedin?: {
      posts: string[];
    };
  };
  createdAt: Date;
}

// API Request/Response Types
export interface GenerateRequest {
  idea: string;
  platforms: string[];
}

export interface GenerateResponse {
  success: boolean;
  data?: GeneratedContent;
  error?: string;
}

// Authentication Types
export interface SessionUser {
  id: string;
  name?: string;
  email: string;
  image?: string;
}

export interface AuthSession {
  user: SessionUser;
  expires: string;
}