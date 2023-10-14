import { Tab } from 'payload/dist/fields/config/types';
import { Field } from 'payload/types';
import { EventStatus, EventStatusOptions } from './EventStatus';

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
                unique: true,
            },
        ],
    },
    {
        type: 'select',
        name: 'status',
        options: EventStatusOptions,
        defaultValue: EventStatus.DRAFT,
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
            {
                type: 'relationship',
                name: 'recurringSchedule',
                relationTo: 'events',
            },
        ],
        admin: {
            condition: (_, siblingData) => siblingData.isRecurring,
        },
    },
    {
        type: 'group',
        name: 'schedule',
        fields: [
            {
                type: 'row',
                fields: [
                    {
                        type: 'date',
                        name: 'startDate',
                        required: true,
                    },
                    {
                        type: 'text',
                        name: 'startTime',
                        required: true,
                    },
                ],
            },
            {
                type: 'row',
                fields: [
                    {
                        type: 'date',
                        name: 'endDate',
                    },
                    {
                        type: 'text',
                        name: 'endTime',
                    },
                ],
            },
        ],
        admin: {
            condition: (_, siblingData) => !siblingData.isRecurring,
        },
    },
];

const tabs: Tab[] = [
    {
        label: 'Main',
        fields: bodyFields,
    },
    {
        label: 'Scheduling',
        fields: scheduleFields,
    },
];

export const fields: Field[] = [
    {
        type: 'tabs',
        label: 'Tabs',
        tabs,
    },
];
