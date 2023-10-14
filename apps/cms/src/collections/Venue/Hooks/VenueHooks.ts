import { Venue } from 'payload/generated-types';
import { CollectionBeforeChangeHook } from 'payload/types';

const getLatLongFromMapUrl: CollectionBeforeChangeHook<Venue> = async ({
    data,
    req,
}) => {
    try {
        const { payload } = req;

        if (!data.location?.mapUrl) return;
        const mapUrl = data.location.mapUrl as string;
        const regex = /@([0-9.-]+),([0-9.-]+)/g;
        const match = regex.exec(mapUrl);
        console.log('match is ', match);
        if (!match) return;
        const [, latitude, longitude] = match;
        console.log('latitude is ', latitude);
        console.log('longitude is ', longitude);
        data.location.point = [parseFloat(latitude), parseFloat(longitude)];
    } catch (err) {
        console.log('err is ', err);
    }
};

export const hooks = {
    beforeChange: [getLatLongFromMapUrl],
};
