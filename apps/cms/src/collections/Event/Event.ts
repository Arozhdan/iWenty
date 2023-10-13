import type { CollectionConfig } from 'payload/types';
import {
    adminOrOwner,
    authenticated,
    authenticatedAndAdmin,
} from '../../shared/access';
import { Role } from '../User';
import { fields } from './Fields/EventFields';
import { hooks } from './Hooks/EventHooks';

export const slug = 'events';
export const Events: CollectionConfig = {
    slug,
    admin: {
        useAsTitle: 'name',
    },
    access: {
        read: authenticated,
        admin: authenticatedAndAdmin,
        create: authenticated,
        delete: adminOrOwner,
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
