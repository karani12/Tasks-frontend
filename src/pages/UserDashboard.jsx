import { useEffect } from "react";
import NavBar from "../components/Auth/NavBar";
import SideBar from "../components/SideBar";
import TaskCard from "../components/TaskCard";
import ApiService from "../services/api";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Empty from "../components/Empty";

const UserDashboard = () => {
    const [tasks, setTasks] = useState([]);
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate()
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
            return;
        }
        ApiService.getTasks()
            .then((data) => {
                console.log(data);
                if(data.error){
                    navigate("/login");
                }
                setTasks(data);
            })
            .catch((error) => console.log(error));

    }, [isAuthenticated, navigate]);

    const filterByPriority = (priority) => {
        return tasks.filter((task) => task.priority === priority);
    }
    const filterByStatus = (status) => {
        return tasks.filter((task) => task.status === status);
    }


    return (
        <section className="max-w-7xl mx-auto" >
            <div className="navbar">
                <NavBar />
            </div>
            <div className="main flex">
                <div className="sidebar">
                    <SideBar />
                </div>
                <div className="main-content max-4xl ml-10">
                    <div className="top mb-4 items-center">
                        <h1 className="text-3xl font-semibold mb-4">Task Board</h1>
                        <select name="priority" id="priority"
                            onChange={(e) => {
                                if (e.target.value === "all") {
                                    ApiService.getTasks()
                                        .then((data) => {
                                            setTasks(data);
                                        })
                                        .catch((error) => console.log(error));
                                } else {
                                    setTasks(filterByPriority(e.target.value));
                                }
                            }
                            }>
                            <option value="all">All</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                        <select name="status" id="status"
                            onChange={(e) => {
                                if (e.target.value === "all") {
                                    ApiService.getTasks()
                                        .then((data) => {
                                            setTasks(data);
                                        })
                                        .catch((error) => console.log(error));
                                } else {
                                    setTasks(filterByStatus(e.target.value));
                                }
                            }}>
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="pending">Pending</option>
                        </select>

                    </div>

                    {/* end top */}

                    <div className="cards  flex flex-wrap min-w-fit gap-2">
                        {
                            tasks.length === 0 && <Empty />
                        }

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