import { Field } from 'payload/types';
import { TagOptions as options } from './TagsOptions';

export const TagsField: Field = {
    name: 'tags',
    type: 'select',
    label: 'Tags',
    hasMany: true,
    defaultValue: [],
    admin: {
        isClearable: true,
        isSortable: true,
    },
    options,
};
