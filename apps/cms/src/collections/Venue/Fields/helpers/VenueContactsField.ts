import { Field } from "payload/types";

export const VenueContactsField: Field = {
    type: 'select',
    name: 'type',
    label: 'Type',
    options: [
        {
            label: 'Phone',
            value: 'phone',
        },
        {
            label: 'Email',
            value: 'email',
        },
        {
            label: 'address',
            value: 'address',
        },
        {
            label: 'whatsapp',
            value: 'whatsapp',
        },
        {
            label: 'telegram',
            value: 'telegram',
        }
    ]
}
