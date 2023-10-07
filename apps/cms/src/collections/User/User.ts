import type { CollectionConfig } from 'payload/types';
import { authenticated, authenticatedAndAdmin } from '../../shared/access';
import { tabs } from './Fields/UserFields';
import { hooks } from './Hooks/UserHooks';
import { Role } from '.';

export const usersSlug = 'users';
export const Users: CollectionConfig = {
    slug: usersSlug,
    auth: true,
    admin: {
        useAsTitle: 'name',
    },
    access: {
        read: authenticated,
        admin: authenticatedAndAdmin,
        create: authenticated,
        delete: authenticatedAndAdmin,
        update: ({ req: { user } }) => {
            if (!user) return false;
            if (user.role === Role.ADMIN) return true;
            return {
                id: {
                    equals: user.id,
                },
            };
        },
    },
    fields: [
        {
            type: 'tabs',
            tabs,
        },
    ],
    hooks,
};
