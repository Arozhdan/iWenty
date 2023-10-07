import type { CollectionConfig } from 'payload/types';
import { authenticatedAndAdmin } from '../../shared/access/index';
import { fields } from './Fields/UserPreferencesFields';

export const slug = 'user-preferences';
export const UserPreferences: CollectionConfig = {
    slug,
    access: {
        read: authenticatedAndAdmin,
        admin: authenticatedAndAdmin,
        create: authenticatedAndAdmin,
        delete: authenticatedAndAdmin,
        update: authenticatedAndAdmin,
    },
    fields,
};
