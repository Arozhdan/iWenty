import { Button } from '@org/ui';
import { useMatches } from '@remix-run/react';
import type { RootLoaderData } from '~/root';

export default function Index() {
    const matches = useMatches();

    const [{ data }] = matches;
    // const { user } = (data as RootLoaderData) || {};

    return (
        <div>
            {
                <Button
                    size="small"
                    href="https://google.com"
                    target="_blank"
                    as="a"
                >
                    123
                </Button>
            }
        </div>
    );
}
