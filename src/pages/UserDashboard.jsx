import NavBar from "../components/Auth/NavBar";
import SideBar from "../components/SideBar";
import TaskCard from "../components/TaskCard";

const UserDashboard = () => {
    return (
        <section className="max-w-7xl mx-auto" >
            <div className="navbar">
                <NavBar />
            </div>
            <div className="main flex">

                <div className="sidebar">
                    <SideBar />
                </div>
                <div className="main-content max-4xl mx-auto">
                    <div className="cards  flex flex-wrap min-w-fit gap-2">
                        <TaskCard
                            task={{
                                title: "Task 1",
                                status: "Completed",
                                priority: "High",
                                description: "This is a task",
                                date: "2021-09-01"
                            }}
                        />
                        <TaskCard
                            task={{
                                title: "Task 1",
                                status: "Completed",
                                priority: "High",
                                description: "This is a task",
                                date: "2021-09-01"
                            }}
                        />
                        <TaskCard
                            task={{
                                title: "Task 1",
                                status: "Completed",
                                priority: "High",
                                description: "This is a task",
                                date: "2021-09-01"
                            }}
                        />
                        <TaskCard
                            task={{
                                title: "Task 1",
                                status: "Completed",
                                priority: "High",
                                description: "This is a task",
                                date: "2021-09-01"
                            }}
                        />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default UserDashboard;