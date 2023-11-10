import { Field } from 'payload/types';
import { TagsField } from '../../../shared/Fields';
import { Tab } from 'payload/dist/fields/config/types';
import { VenueContactsField } from './helpers/VenueContactsField';

export const bodyFields: Field[] = [
    {
        name: 'name',
        type: 'text',
        required: true,
    },
    {
        name: 'slug',
        type: 'text',
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

];


const additionalFields: Field[] = [
    {
        type: 'textarea',
        name: 'description',
        label: 'Description',
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
            {
                name: 'website',
                type: 'text',
            },
            {
                name: 'websiteVerified',
                type: 'checkbox',
                admin: {
                    condition: (_, siblingData) => siblingData.website,
                },
            }
        ],
    },
]


const contactFields: Field[] = [
    {
        type: 'array',
        name: 'contacts',
        label: 'Contacts',
        admin: {
            components: {
                RowLabel: ({ data }: any) => {
                    if (!data.type || !data.value) return 'New Contact'
                    return data.type + ' ' + data.value
                }
            }
        },
        fields: [
            VenueContactsField,
            {
                type: 'text',
                name: 'value',
                label: 'Value',
            }
        ]
    },
    {
        name: 'openingHours',
        type: 'array',
        label: 'Opening Hours',
        fields: [
            {
                name: 'range',
                type: 'text',
                label: 'Range',

            },
            {
                name: 'value',
                type: 'text',
                label: 'Value',
            }
        ],
        admin: {
            components: {
                RowLabel: ({ data }: any) => {
                    if (!data.range || !data.value) return 'New Opening Hour'
                    return data.range + ' ' + data.value
                }
            }
        }
    }
]


const tabs: Tab[] = [
    {
        label: 'Main',
        fields: bodyFields,
    },
    {
        label: 'Additional',
        fields: additionalFields,
    },
    {
        label: 'Contacts',
        fields: contactFields,
    }
];

export const fields: Field[] = [
    {
        type: 'tabs',
        tabs,
    },
    {
        ...TagsField,
        admin: {
            position: 'sidebar',
        }
    },
    {
        name: 'owner',
        type: 'relationship',
        relationTo: 'users',
        admin: {
            position: 'sidebar',
        }
    },
    {
        name: 'isFeatured',
        type: 'checkbox',
        label: 'Featured',
        admin: {
            position: 'sidebar',
        }
    }
]
