
/* eslint-disable react/prop-types */
import ApiService from "../services/api";
const TaskCard = ({ task }) => {
    return (
        <div className="card border p-3 space-y-3 min-w-72">
            <div className="title w-full">
                <div className="title-priority">
                    <h1 className="text-lg">{task.title}</h1>
                    {/* not the best practice lol */}
                    <span className={`
                    badge rounded-md
                    
                    ${task.priority === "low" ? "bg-green-100 text-green-600" : ""}
                    ${task.priority === "medium" ? "bg-yellow-100 text-yellow-600" : ""}
                    ${task.priority === "high" ? "bg-red-100 text-red-600" : ""}
                    `}>{task.priority}</span>
                </div>
            </div>
            <div className="body max-w-64 text-sm text-gray-400">
                {task.description}
            </div>
            <div className="footer flex">
                <div className="footer-date">
                    <span className="text-xs text-gray-500">{
                        new Date(task.dueDate).toDateString()
                    }</span>
                </div>
                <div className="footer-actions">
                    <select
                        onChange={() => {
                            ApiService.markTaskComplete(task.id);

                        }}
                        value={task.status}
                        name="status"
                        id="status"
                    >
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
            </div>
        </div>
    )
};

export default TaskCard
