import { useNavigate } from "react-router-dom";
import NavBar from "../components/Auth/NavBar";
import CreateTask from "../components/CreateTask";
import SideBar from "../components/SideBar";
import TaskCard from "../components/TaskCard";
import { useAuth } from "../context/AuthContext";
import ApiService from "../services/api";
import { useEffect } from "react";
import { useState } from "react";
import Empty from "../components/Empty";


const AdminDashBoard = () => {
    const [tasks, setTasks] = useState([]);
    const { user } = useAuth()
    const navigate = useNavigate()
    const filterByPriority = (priority) => {
        return tasks.filter((task) => task.priority === priority);
    }
    const filterByStatus = (status) => {
        return tasks.filter((task) => task.status === status);
    }

    useEffect(() => {
        if (user) {
            ApiService.getAllTasks()
            
                .then((data) => { 
                    if(data.error){
                        navigate("/login");
                    }
                    setTasks(data);
                 })
        }

        console.log(user)
        if (user && user.role != "admin") {
            navigate("/dashboard")
        }
    }, [user, navigate]
    )


    return (
        <section className="max-w-7xl mx-auto" >

            <div className="navbar">
                <NavBar />
            </div>

            <div className="main flex">

                <div className="sidebar">
                    <SideBar />
                </div>
                <div className="main-content max-4xl">
                    <div className="create-task">
                        <button className="btn btn-primary mb-3" onClick={() => document.getElementById('create-task').showModal()}>Create Task</button>
                        <CreateTask />

                    </div>
                    <div className="top mb-4 items-center">

                        <h1 className="text-3xl font-semibold mb-4">Task Board</h1>

                        <select name="priority" id="priority"
                            onChange={(e) => {
                                if (e.target.value === "all") {
                                    ApiService.getAllTasks()
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
                                    ApiService.getAllTasks()
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

                    <div className="cards flex flex-wrap min-w-fit gap-2">
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

export default AdminDashBoard;