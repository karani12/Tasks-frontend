import { useNavigate } from "react-router-dom";
import NavBar from "../components/Auth/NavBar";
import CreateTask from "../components/CreateTask";
import SideBar from "../components/SideBar";
import TaskCard from "../components/TaskCard";
import { useAuth } from "../context/AuthContext";
import ApiService from "../services/api";
import { useEffect } from "react";
import { useState } from "react";


const AdminDashBoard = () => {
    const [tasks, setTasks] = useState(null);
    const { user } = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        if(user){
        ApiService.getAllTasks()
            .then((data) => { setTasks(data); })
        }

        console.log(user)
        if (user && user.role != "admin") {
            navigate("/dashboard")
        }}, [user, navigate]
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
                <div className="main-content max-4xl mx-auto">
                    <div className="create-task">
                        <button className="btn btn-primary mb-3" onClick={() => document.getElementById('create-task').showModal()}>Create Task</button>
                        <CreateTask />

                    </div>
                    <h1 className="text-3xl font-semibold mb-4">Task Board</h1>
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

export default AdminDashBoard;