import type { Access, PayloadRequest, Where } from 'payload/types';
import { Role } from '../../collections/User';

export const authenticated = ({ req: { user } }: { req: PayloadRequest }) =>
    !!user;

export const authenticatedAndAdmin = ({
    req: { user },
}: {
    req: PayloadRequest;
}) => !!user && user?.role === Role.ADMIN;

export const pageIsPublic = (): Where => ({
    public: {
        equals: true,
    },
});

export const adminOrOwner: Access = ({
    req: { user },
}: {
    req: PayloadRequest;
}) => {
    if (!user) return false;

    if (user.role === Role.ADMIN) return true;

    const query = {
        createdBy: {
            equals: user.id,
        },
    };

    return query;
};
