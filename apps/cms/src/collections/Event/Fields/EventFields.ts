import { Tab } from 'payload/dist/fields/config/types';
import { Field } from 'payload/types';

const bodyFields: Field[] = [
    {
        name: 'name',
        type: 'text',
        required: true,
        unique: true,
    },
    {
        name: 'slug',
        type: 'text',
    },
    {
        name: 'description',
        type: 'textarea',
    },
    {
        name: 'isPaid',
        type: 'checkbox',
        admin: {
            position: 'sidebar',
        },
    },
    {
        name: 'isRecurring',
        type: 'checkbox',
    },
    {
        name: 'image',
        type: 'upload',
        relationTo: 'media',
    },
    {
        name: 'capacity',
        type: 'number',
    },
    {
        name: 'slots',
        type: 'number',
    },
];

const tabs: Tab[] = [
    {
        label: 'Main',
        fields: bodyFields,
    },
];

export const fields: Field[] = [
    {
        type: 'tabs',
        label: 'Tabs',
        tabs,
    },
];
