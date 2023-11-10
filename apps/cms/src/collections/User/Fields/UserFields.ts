import { Field } from 'payload/types';
import { Role, roleOptions } from './Role/Role';
import { TagsField } from '../../../shared/Fields';
import { Tab } from 'payload/dist/fields/config/types';

export const bodyFields: Field[] = [
    {
        name: 'name',
        type: 'text',
        required: true,
    },
    {
        name: 'birthDate',
        type: 'date',
        required: true,
    },
    {
        name: 'image',
        type: 'upload',
        relationTo: 'media',
    },
    {
        name: 'bio',
        type: 'textarea',
    },
];

export const relationshipFields: Field[] = [
    TagsField,
    {
        name: 'followingUsers',
        type: 'relationship',
        relationTo: 'users',
        hasMany: true,
    },
];

const preferenceFields: Field[] = [
    {
        type: 'group',
        name: 'preferences',
        saveToJWT: true,
        fields: [
            {
                name: 'showActivity',
                type: 'checkbox',
                label: 'Show activity',
                defaultValue: true,
            },
            {
                name: 'showBirthDate',
                type: 'checkbox',
                label: 'Show birth date',
                defaultValue: true,
            },
            {
                name: 'showBio',
                type: 'checkbox',
                label: 'Show bio',
                defaultValue: true,
            },
        ]
    }
]

const tabs: Tab[] = [
    {
        label: 'Main',
        fields: bodyFields,
    },
    {
        label: 'Related',
        fields: relationshipFields,
    },
    {
        label: 'Preferences',
        fields: preferenceFields,
    }
];

export const fields: Field[] = [
    {
        type: 'tabs',
        tabs,
    },
    {
        name: 'role',
        type: 'select',
        required: true,
        defaultValue: Role.USER,
        options: roleOptions,
        admin: {
            position: 'sidebar',
        },
    },
];
