import { UserMe } from '$types/api';
import React, { useEffect } from 'react';
import notify from '$application/notify';
import { Navigate } from 'react-router-dom';

interface Props {
  user: UserMe;
  permission: string;
  redirect?: string;
}

export default function NoRoutePermission({
  user,
  permission,
  redirect,
}: Props) {
  useEffect(() => {
    const msg = `You need '${permission}' permission to view this route. Your permissions`;

    notify.warn(msg, { duration: 6000 });
  }, []);

  return <Navigate to={redirect || '/'} />;
}
