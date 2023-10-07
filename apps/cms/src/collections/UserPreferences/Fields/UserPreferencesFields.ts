import { Field } from 'payload/types';

export const fields: Field[] = [
    {
        name: 'showActivity',
        label: 'Show Activity',
        type: 'checkbox',
        required: true,
        defaultValue: true,
    },
    {
        name: 'showBirthDate',
        label: 'Show Birth Date',
        type: 'checkbox',
        required: true,
        defaultValue: true,
    },
    {
        name: 'allowPushNotifications',
        label: 'Allow Push Notifications',
        type: 'checkbox',
        required: true,
        defaultValue: true,
    },
];
