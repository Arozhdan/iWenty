import { User } from 'payload/generated-types';
import { CollectionBeforeChangeHook } from 'payload/types';

const setDefaultPreferencesIfDontExist: CollectionBeforeChangeHook<
    User
> = async ({ data, req, operation }) => {
    try {
        console.log('setDefaultPreferencesIfDontExist');
        console.log('operation is ', operation);

        if (operation !== 'create') return;

        if (data.preferences) return;

        const newPreferences = await req.payload.create({
            collection: 'user-preferences',
            data: {
                showActivity: true,
                showBirthDate: true,
                allowPushNotifications: true,
            },
        });

        data.preferences = newPreferences.id;
    } catch (err) {
        console.log('err is ', err);
    }
};

export const hooks = {
    beforeChange: [setDefaultPreferencesIfDontExist],
};
