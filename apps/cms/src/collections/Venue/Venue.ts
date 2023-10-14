import type { CollectionConfig } from 'payload/types';
import {
    adminOrOwner,
    authenticated,
    authenticatedAndAdmin,
} from '../../shared/access';
import { Role } from '../User';
import { tabs } from './Fields/VenueFields';
import { hooks } from './Hooks/VenueHooks';

export const slug = 'venues';
export const Venues: CollectionConfig = {
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
    fields: [
        {
            type: 'tabs',
            tabs,
        },
    ],
    hooks,
};
