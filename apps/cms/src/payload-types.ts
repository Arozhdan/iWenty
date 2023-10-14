/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
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
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
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
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes?: {
    card?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    feature?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    banner?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    og?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    twitter?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    square?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    thumbnail?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
}
export interface UserPreference {
  id: string;
  showActivity: boolean;
  showBirthDate: boolean;
  allowPushNotifications: boolean;
  updatedAt: string;
  createdAt: string;
}
export interface Venue {
  id: string;
  name: string;
  image?: string | Media;
  rating?: number;
  feedbackCount?: number;
  location?: {
    mapUrl?: string;
    /**
     * @minItems 2
     * @maxItems 2
     */
    point?: [number, number];
    address?: string;
  };
  social?: {
    instagram?: string;
    instagramVerified?: boolean;
  };
  owner?: string | User;
  managers?: {
    user?: string | User;
    role?: 'admin' | 'editor';
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Event {
  id: string;
  name: string;
  slug?: string;
  status?: 'draft' | 'published' | 'archived' | 'cancelled' | 'rescheduled';
  description?: string;
  image?: string | Media;
  isRecurring?: boolean;
  recurringSchedule?: {
    recurringSchedule?: string | Event;
  };
  schedule?: {
    startDate: string;
    startTime: string;
    endDate?: string;
    endTime?: string;
  };
  updatedAt: string;
  createdAt: string;
}
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string;
  batch?: number;
  updatedAt: string;
  createdAt: string;
}


declare module 'payload' {
  export interface GeneratedTypes {
    collections: {
      'users': User
      'user-preferences': UserPreference
      'venues': Venue
      'events': Event
      'media': Media
      'payload-preferences': PayloadPreference
      'payload-migrations': PayloadMigration
    }

  }
}