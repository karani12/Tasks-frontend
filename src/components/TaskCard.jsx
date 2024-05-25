/* eslint-disable react/prop-types */
const TaskCard = ({ task }) => {
    return (
        <div className="card border p-3 space-y-3">
            <div className="title">
                <div className="title-priority flex items-center justify-between">
                    <h1 className="text-xl">{task.title}</h1>
                    <span className={`
                    badge rounded-md
                    ${task.priority === "High" ? "bg-red-100 text-red-600" : ""}
                    `}>{task.priority}</span>
                </div>
            </div>
            <div className="body">
                {task.description}
            </div>
            <div className="footer">
                <div className="footer-date">
                    <span className="text-sm text-gray-500">{task.date}</span>
                </div>
                <div className="footer-actions">
                    {/* update status */}
                    <select
                    onChange={(e) => console.log(e.target.value + " " + task.title)} 
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
