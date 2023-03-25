import { ApiCollection } from '$types/api';
import { Failed } from '$types';
import { useQuery } from 'react-query';
import { GET } from '$application/http';

export default function useUserListQuery(
  meta: {
    skip?: number;
    take?: number;
    conditions?: any;
  } = {}
) {
  const query = useQuery<ApiCollection<any>, Failed>(
    ['users', 'list', meta],
    onQuery,
    { keepPreviousData: true }
  );

  function onQuery() {
    return GET(`/api/user`, meta);
  }

  return {
    isLoading: query.isFetching,
    data: query.data?.data?.data || [],
    count: query.data?.data?.count || 0,
  };
}
