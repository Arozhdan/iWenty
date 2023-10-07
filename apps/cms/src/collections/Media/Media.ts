import { CollectionConfig } from 'payload/types';

export const mediaSlug = 'media';
const Media: CollectionConfig = {
    slug: mediaSlug,
    access: {
        read: (): boolean => true, // Everyone can read Media
    },
    upload: {
        adminThumbnail: 'card',
        imageSizes: [
            {
                name: 'card',
                width: 640,
                height: 480,
            },
            {
                name: 'feature',
                width: 1024,
                height: 576,
            },
            {
                name: 'banner',
                width: 1440,
                height: 810,
            },
            {
                name: 'og',
                width: 1200,
                height: 630,
            },
            {
                name: 'twitter',
                width: 1024,
                height: 512,
            },
            {
                name: 'square',
                width: 1024,
                height: 1024,
            },
            {
                name: 'thumbnail',
                width: 128,
                height: 128,
            },
        ],
    },
    fields: [
        {
            name: 'alt',
            label: 'Alt Text',
            type: 'text',
            required: true,
        },
    ],
};

export default Media;
