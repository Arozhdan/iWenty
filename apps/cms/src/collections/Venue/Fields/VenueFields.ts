import { Field } from 'payload/types';
import { TagsField } from '../../../shared/Fields';
import { Tab } from 'payload/dist/fields/config/types';

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
        name: 'location',
        type: 'text',
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
];
