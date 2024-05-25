import { useEffect } from "react";
import NavBar from "../components/Auth/NavBar";
import SideBar from "../components/SideBar";
import TaskCard from "../components/TaskCard";
import ApiService from "../services/api";
import { useState } from "react";

const UserDashboard = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        ApiService.getTasks()
            .then((data) => {
                setTasks(data);
            })
            .catch((error) => console.log(error));

    }, []);

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
                    {/* top */}
                    <div className="top mb-4 items-center">
                        <h1 className="text-3xl font-semibold mb-4">Task Board</h1>
                        <select name="priority" id="priority">
                            <option value="all">All</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                        <select name="status" id="status">
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="pending">Pending</option>
                        </select>

                    </div>
                    {/* end top */}

                    <div className="cards  flex flex-wrap min-w-fit gap-2">
                        {
                            tasks && tasks.map((task) => (
                                <TaskCard task={task} key={task.id} />
                            ))
                        }


                    </div>
                </div>
            </div>

        </section>
    );
};

export default UserDashboard;