import path from 'path';
import { buildConfig } from 'payload/config';
import Users from './collections/User';
import { Payload } from 'payload';
// import { seedPages, seedUsers } from './seed/index';
import Media from './collections/Media/Media';
import UserPreferences from './collections/UserPreferences';
import { Venues } from './collections/Venue';

const config = buildConfig({
    admin: {
        user: Users.slug,
    },
    collections: [Users, Venues, UserPreferences, Media],
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'payload-schema.graphql'),
    },
    onInit: async (payload: Payload) => {
        if (process.env.NODE_ENV === 'development') {
            // await seedUsers(payload);
            // await seedPages(payload);
        }
    },
});

export default config;
