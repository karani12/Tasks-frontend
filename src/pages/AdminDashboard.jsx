import NavBar from "../components/Auth/NavBar";
import CreateTask from "../components/CreateTask";
import SideBar from "../components/SideBar";
import TaskCard from "../components/TaskCard";

const AdminDashBoard = () => {
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
                    <div className="create-task">
                        <button className="btn btn-primary mb-3" onClick={() => document.getElementById('create-task').showModal()}>Create Task</button>
                        <CreateTask />
                      
                    </div>
                    <h1 className="text-3xl font-semibold mb-4">Task Board</h1>
                    <div className="cards  flex flex-wrap min-w-fit gap-2">
                        <TaskCard
                            task={{
                                title: "Task 1",
                                priority: "high",
                                description: "This is a task",
                                status: "Completed",
                                date: "2021-09-01"
                            }}
                        />
                        <TaskCard
                            task={{
                                title: "Task 1",
                                priority: "high",
                                description: "This is a task",
                                status: "Completed",
                                date: "2021-09-01"
                            }}
                        />
                        <TaskCard
                            task={{
                                title: "Task 1",
                                priority: "high",
                                status: "Completed",
                                description: "This is a task",
                                date: "2021-09-01"
                            }}
                        />
                        <TaskCard
                            task={{
                                title: "Task 1",
                                status: "Completed",
                                priority: "medium",
                                description: "This is a task",
                                date: "2021-09-01"
                            }}
                        />
                        <TaskCard
                            task={{
                                title: "Task 1",
                                status: "Completed",
                                priority: "low",
                                description: "This is a task",
                                date: "2021-09-01"
                            }}
                        />
                        <TaskCard
                            task={{
                                title: "Task 1",
                                status: "Completed",
                                priority: "high",
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

export default AdminDashBoard;