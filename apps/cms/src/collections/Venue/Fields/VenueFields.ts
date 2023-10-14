import { Field } from 'payload/types';
import { TagsField } from '../../../shared/Fields';
import { Tab } from 'payload/dist/fields/config/types';
import { ManageroleOptions } from './Manager/Manager';

export const bodyFields: Field[] = [
    {
        name: 'name',
        type: 'text',
        required: true,
    },
    {
        name: 'image',
        type: 'upload',
        relationTo: 'media',
    },
    {
        type: 'row',
        fields: [
            {
                name: 'rating',
                type: 'number',
                max: 5,
                min: 0,
            },
            {
                name: 'feedbackCount',
                type: 'number',
                admin: {
                    condition: (_, siblingData) => siblingData.rating > 0,
                },
            },
        ],
    },
    {
        type: 'group',
        name: 'location',
        label: 'Location',
        fields: [
            {
                type: 'text',
                name: 'mapUrl',
            },
            {
                name: 'point',
                type: 'point',
                label: 'Location',
            },
            {
                name: 'address',
                type: 'textarea',
            },
        ],
    },
    {
        type: 'group',
        name: 'social',
        label: 'Social Media',
        fields: [
            {
                name: 'instagram',
                type: 'text',
            },
            {
                name: 'instagramVerified',
                type: 'checkbox',
                admin: {
                    condition: (_, siblingData) => siblingData.instagram,
                },
            },
        ],
    },
];

export const relationshipFields: Field[] = [
    {
        name: 'owner',
        type: 'relationship',
        relationTo: 'users',
        hasMany: false,
    },
];

export const tabs: Tab[] = [
    {
        label: 'Main',
        fields: bodyFields,
    },
    {
        label: 'Related',
        fields: relationshipFields,
    },
    {
        label: 'Access',
        fields: [
            {
                type: 'array',
                name: 'managers',
                label: 'Venue Managers',
                fields: [
                    {
                        type: 'row',
                        fields: [
                            {
                                name: 'user',
                                type: 'relationship',
                                relationTo: 'users',
                            },
                            {
                                name: 'role',
                                type: 'select',
                                options: ManageroleOptions,
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
