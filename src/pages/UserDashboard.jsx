import NavBar from "../components/Auth/NavBar";
import SideBar from "../components/SideBar";
import TaskCard from "../components/TaskCard";
const data = [
    {
        "id": 4,
        "title": "ventosus admoveo autus",
        "description": "Magnam contra creator sint viridis maxime pauci videlicet.",
        "dueDate": "2025-05-17T19:53:00.314Z",
        "priority": "low",
        "status": "completed",
        "assignedUserId": 1,
        "assignedById": 1,
        "createdAt": "2024-05-23T09:42:02.000Z",
        "updatedAt": "2024-05-23T09:42:02.000Z"
    },
    {
        "id": 15,
        "title": "cresco at suffoco",
        "description": "Ustulo balbus volaticus excepturi usque sit apud acsi tepesco viscus.",
        "dueDate": "2024-08-22T13:44:41.874Z",
        "priority": "medium",
        "status": "completed",
        "assignedUserId": 1,
        "assignedById": 1,
        "createdAt": "2024-05-23T09:42:02.195Z",
        "updatedAt": "2024-05-23T09:42:02.195Z"
    },
    {
        "id": 21,
        "title": "Something new man",
        "description": "Now something great happened",
        "dueDate": "2025-03-07T12:38:21.750Z",
        "priority": "medium",
        "status": "complete",
        "assignedUserId": 1,
        "assignedById": 1,
        "createdAt": "2024-05-23T09:46:10.873Z",
        "updatedAt": "2024-05-23T09:46:10.873Z"
    },
    {
        "id": 22,
        "title": "Something new man",
        "description": "Now something great happened",
        "dueDate": "2025-03-07T12:38:21.750Z",
        "priority": "medium",
        "status": "complete",
        "assignedUserId": 1,
        "assignedById": 4,
        "createdAt": "2024-05-23T09:49:02.225Z",
        "updatedAt": "2024-05-23T09:49:02.225Z"
    },
    {
        "id": 23,
        "title": "Something new man",
        "description": "Now something great happened",
        "dueDate": "2025-03-07T12:38:21.750Z",
        "priority": "medium",
        "status": "complete",
        "assignedUserId": 1,
        "assignedById": 4,
        "createdAt": "2024-05-23T11:44:38.023Z",
        "updatedAt": "2024-05-23T11:44:38.023Z"
    }
]

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
                        {data.map((task) => (
                            <TaskCard
                                key={task.id}
                                task={task}
                            />
                        ))}


                    </div>
                </div>
            </div>

        </section>
    );
};

export default UserDashboard;