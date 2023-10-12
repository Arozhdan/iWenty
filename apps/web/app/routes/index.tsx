import { Button } from '@org/ui';
import { useMatches } from '@remix-run/react';
import type { RootLoaderData } from '~/root';

export default function Index() {
    const matches = useMatches();

    const [{ data }] = matches;
    // const { user } = (data as RootLoaderData) || {};

    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
