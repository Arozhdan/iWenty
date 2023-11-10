import { Tab } from 'payload/dist/fields/config/types';
import { Field } from 'payload/types';
import { EventStatus, EventStatusOptions } from './helpers/EventStatus';
import { eventScheduleFields } from './helpers/EventSheduleField';

const bodyFields: Field[] = [
    {
        type: 'row',
        fields: [
            {
                name: 'name',
                type: 'text',
                required: true,
            },
            {
                name: 'slug',
                type: 'text',
            },
        ],
    },
    {
        type: 'select',
        name: 'status',
        options: EventStatusOptions,
        defaultValue: EventStatus.PUBLISHED,
    },
    {
        name: 'description',
        type: 'textarea',
    },
    {
        name: 'image',
        type: 'upload',
        relationTo: 'media',
    },
];

const scheduleFields: Field[] = [
    {
        type: 'checkbox',
        name: 'isRecurring',
        label: 'Event is recurring',
    },
    {
        type: 'group',
        name: 'recurringSchedule',
        fields: [
            ...eventScheduleFields,
            {
                type: 'array',
                name: 'occurrences',
                label: 'Occurrences',
                fields: [
                    ...eventScheduleFields,
                    {
                        type: 'select',
                        name: 'status',
                        options: EventStatusOptions,
                        defaultValue: EventStatus.PUBLISHED,
                    },
                ]
            }
        ],
        admin: {
            condition: (_, siblingData) => siblingData.isRecurring,
        },
    },
    {
        type: 'group',
        name: 'schedule',
        fields: eventScheduleFields,
        admin: {
            condition: (_, siblingData) => !siblingData.isRecurring,
        },
    },
];

const relatedFields: Field[] = [
    {
        type: 'relationship',
        name: 'venue',
        relationTo: 'venues',
    },
    {
        type: 'relationship',
        name: 'likedBy',
        relationTo: 'users',
        hasMany: true,
    },
    {
        type: 'relationship',
        name: 'attendees',
        relationTo: 'users',
        hasMany: true,
    }
]

const tabs: Tab[] = [
    {
        label: 'Main',
        fields: bodyFields,
    },
    {
        label: 'Scheduling',
        fields: scheduleFields,
    },
    {
        label: 'Related',
        fields: relatedFields,
    }
];

export const fields: Field[] = [
    {
        type: 'tabs',
        label: 'Tabs',
        tabs,
    },
];
