import useUserListQuery from '$queries/useUserListQuery';

export type UserListData = ReturnType<typeof useUserList>;

function useUserList() {
    const query = useUserListQuery();

    return {
        isLoading: query.isLoading,
        data: query.data,
        count: query.count,
    };
}

export default useUserList;
