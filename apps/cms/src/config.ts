import path from 'path';
import { buildConfig } from 'payload/config';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import Users from './collections/User';
import { Payload } from 'payload';

import Media from './collections/Media/Media';
import { Venues } from './collections/Venue';
import { Events } from './collections/Event';
import { mongooseAdapter } from '@payloadcms/db-mongodb';

const config = buildConfig({
    admin: {
        bundler: webpackBundler(),
        webpack: (config) => {
            config.entry = {
                main: path.resolve(
                    __dirname,
                    '../',
                    'node_modules/payload/dist/admin'
                ),
            };

            if (!config.resolve) config.resolve = { alias: {} };
            config.resolve.alias = {
                ...config.resolve.alias,
                '@payloadcms/config': path.resolve(__dirname, 'config'),
            };
            return config;
        },
    },
    editor: slateEditor({}),

    collections: [Users, Venues, Events, Media],
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
    db: mongooseAdapter({
        url: process.env.MONGODB_URL || 'mongodb://localhost:27017/payload',
    }),
    onInit: async (payload: Payload) => {
        if (process.env.NODE_ENV === 'development') {
            // await seedUsers(payload);
            // await seedPages(payload);
        }
    },
});

export default config;
