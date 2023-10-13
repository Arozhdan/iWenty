/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    'user-preferences': UserPreference;
    venues: Venue;
    events: Event;
    media: Media;
  };
  globals: {};
}
export interface User {
  id: string;
  name: string;
  birthDate: string;
  image?: string | Media;
  bio?: string;
  tags?: (
    | 'fast-food'
    | 'italian'
    | 'sweet'
    | 'bbq'
    | 'outdoor'
    | 'swimming'
    | 'hiking'
    | 'camping'
    | 'sports'
    | 'clubbing'
    | 'bar-hopping'
    | 'concerts'
    | 'dancing'
    | 'movie-night'
    | 'extreme'
  )[];
  preferences?: string | UserPreference;
  followingUsers?: string[] | User[];
  role: 'admin' | 'editor' | 'user';
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
  password?: string;
}
export interface Media {
  id: string;
  alt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes: {
    card: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    feature: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    banner: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    og: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    twitter: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    square: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    thumbnail: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
  createdAt: string;
  updatedAt: string;
}
export interface UserPreference {
  id: string;
  showActivity: boolean;
  showBirthDate: boolean;
  allowPushNotifications: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface Venue {
  id: string;
  name: string;
  image?: string | Media;
  rating?: number;
  feedbackCount?: number;
  location: {
    /**
     * @minItems 2
     * @maxItems 2
     */
    location?: [number, number];
    address?: string;
  };
  social: {
    instagram?: string;
    instagramVerified?: boolean;
  };
  owner?: string | User;
  managers: {
    user?: string | User;
    role?: 'admin' | 'editor';
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
export interface Event {
  id: string;
  name?: string;
  slug?: string;
  description?: string;
  isPaid?: boolean;
  isRecurring?: boolean;
  image?: string | Media;
  capacity?: number;
  slots?: number;
  createdAt: string;
  updatedAt: string;
}
