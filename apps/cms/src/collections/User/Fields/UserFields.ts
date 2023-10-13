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
        name: 'preferences',
        type: 'relationship',
        relationTo: 'user-preferences',
        hasMany: false,
    },
    {
        name: 'followingUsers',
        type: 'relationship',
        relationTo: 'users',
        hasMany: true,
    },
];

const tabs: Tab[] = [
    {
        label: 'Main',
        fields: bodyFields,
    },
    {
        label: 'Related',
        fields: relationshipFields,
    },
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
