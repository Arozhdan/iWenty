import type { CollectionConfig } from 'payload/types';
import { authenticated, authenticatedAndAdmin } from '../../shared/access';
import { fields } from './Fields/UserFields';
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
        read: () => true,
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
    fields,
    hooks,
};
