'use client';

import type { ReactNode } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

type LinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
};

export function Link({ to, children, ...rest }: LinkProps) {
  return (
    <NextLink href={to} {...rest}>
      {children}
    </NextLink>
  );
}

export function useLocation() {
  const router = useRouter();
  const asPath = router.asPath ?? '/';
  const [pathnameWithQuery, hash = ''] = asPath.split('#');
  const pathname = pathnameWithQuery.split('?')[0] || '/';

  return {
    pathname,
    hash: hash ? `#${hash}` : '',
  };
}

export function useNavigate() {
  const router = useRouter();
  return (to: string) => {
    void router.push(to);
  };
}

export function Outlet() {
  return null;
}
