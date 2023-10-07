import { Field } from 'payload/types';
import { Role, roleOptions } from './Role/Role';
import { TagsField } from '../../../shared/Fields';
import { Tab } from 'payload/dist/fields/config/types';
import { venuesSlug } from '../../Venue';

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
    {
        name: 'role',
        type: 'select',
        required: true,
        defaultValue: Role.USER,
        options: roleOptions,
    },
];

export const relationshipFields: Field[] = [
    TagsField,
    {
        name: 'venues',
        type: 'relationship',
        relationTo: venuesSlug,
        hasMany: true,
    },
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

export const tabs: Tab[] = [
    {
        label: 'Main',
        fields: bodyFields,
    },
    {
        label: 'Related',
        fields: relationshipFields,
    },
];
