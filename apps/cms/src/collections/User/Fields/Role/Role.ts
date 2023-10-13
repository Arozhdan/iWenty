export enum Role {
    ADMIN = 'admin',
    EDITOR = 'editor',
    USER = 'user',
}

export const roleOptions = [
    {
        label: 'Admin',
        value: Role.ADMIN,
    },
    {
        label: 'Editor',
        value: Role.EDITOR,
    },
    {
        label: 'User',
        value: Role.USER,
    },
];
