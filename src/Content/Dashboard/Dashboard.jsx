const Dashboard = ( {user} ) => {
    return (<div><h1>Dashboard</h1><h2>User: {user.surname} {user?.name}</h2></div>)
}
export default Dashboard;
