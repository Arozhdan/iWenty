import { Event } from 'payload/generated-types';
import { CollectionBeforeChangeHook } from 'payload/types';
import slugify from 'slugify';

const setDefaultPreferencesIfDontExist: CollectionBeforeChangeHook<
    Event
> = async ({ data, req, operation }) => {
    try {
        if (data.slug || !data.name) return;

        const slug = slugify(data.name, {
            lower: true,
            trim: true,
        });

        data.slug = slug;
    } catch (err) {
        console.log('err is ', err);
    }
};

export const hooks = {
    beforeChange: [setDefaultPreferencesIfDontExist],
};
