export enum Role {
    ADMIN = 'admin',
    EDITOR = 'editor',
    USER = 'user',
}

export const roleOptions = [
    {
        label: Role.ADMIN,
        value: Role.ADMIN,
    },
    {
        label: Role.EDITOR,
        value: Role.EDITOR,
    },
    {
        label: Role.USER,
        value: Role.USER,
    },
];
