export enum EventStatus {
    DRAFT = 'draft',
    PUBLISHED = 'published',
    ARCHIVED = 'archived',
    CANCELLED = 'cancelled',
    RESCHEDULED = 'rescheduled',
}

export const EventStatusOptions = [
    {
        label: 'Draft',
        value: EventStatus.DRAFT,
    },
    {
        label: 'Published',
        value: EventStatus.PUBLISHED,
    },
    {
        label: 'Archived',
        value: EventStatus.ARCHIVED,
    },
    {
        label: 'Cancelled',
        value: EventStatus.CANCELLED,
    },
    {
        label: 'Rescheduled',
        value: EventStatus.RESCHEDULED,
    },
];
