import { Field } from "payload/types";

export const eventScheduleFields: Field[] = [
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
]
