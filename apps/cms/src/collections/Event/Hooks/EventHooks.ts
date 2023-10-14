import { Event } from 'payload/generated-types';
import { CollectionBeforeChangeHook } from 'payload/types';
import slugify from 'slugify';

const setDefaultPreferencesIfDontExist: CollectionBeforeChangeHook<
    Event
> = async ({ data, req }) => {
    try {
        if (data.slug || !data.name) return;

        let slug = slugify(data.name, {
            lower: true,
            trim: true,
        });

        const { payload } = req;

        const existing = await payload.find({
            collection: 'events',
            where: {
                slug: {
                    equals: slug,
                },
            },
        });

        if (existing.docs.length > 0) {
            const randomString = Math.random().toString(36).substring(2, 7);
            slug = `${slug}-${randomString}`;
        }

        data.slug = slug;
    } catch (err) {
        console.log('err is ', err);
    }
};

export const hooks = {
    beforeChange: [setDefaultPreferencesIfDontExist],
};
