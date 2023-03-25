import useUserList from '$controllers/useUserList';

function Home() {
    const io = useUserList();

    return <div>Home</div>;
}

export default Home;
