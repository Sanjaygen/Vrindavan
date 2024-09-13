import { Breadcrumbs, Typography, Box, styled } from '@mui/material';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const StyledBreadcrumbs = styled(Breadcrumbs)`
  margin: 0;
  padding: 0;
  position: relative;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: #007bff;
    text-decoration: none;
  }
`;

const ActiveLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  &:hover {
    color: #007bff;
    text-decoration: none;
  }
`;

const BreadcrumbsPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    event.preventDefault();
    router.push(path);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <StyledBreadcrumbs aria-label="breadcrumb" separator="/">
        {pathname === '/' ? (
          <ActiveLink
            href="/"
            onClick={(event) => handleClick(event, '/')}
          >
            Home
          </ActiveLink>
        ) : (
          <ActiveLink
            href="/dashboard"
            onClick={(event) => handleClick(event, '/dashboard')}
          >
            Dashboard
          </ActiveLink>
        )}
        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const path = `/${pathSegments.slice(0, index + 1).join('/')}`;

          return isLast ? (
            <Typography key={segment} color="text.primary">
              {segment.charAt(0).toUpperCase() + segment.slice(1)}
            </Typography>
          ) : (
            <StyledLink
              key={segment}
              href={path}
              onClick={(event) => handleClick(event, path)}
            >
              {segment.charAt(0).toUpperCase() + segment.slice(1)}
            </StyledLink>
          );
        })}
      </StyledBreadcrumbs>
    </Box>
  );
};

export default BreadcrumbsPage;
