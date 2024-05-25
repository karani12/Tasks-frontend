import { useState } from "react";
import ApiService from "../services/api";
import { useEffect } from "react";

const CreateTask = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("");
    const [assignedUserId, setassignedUserId] = useState("");
    const [users, setUsers] = useState([]);
    useEffect(() => {
        ApiService.getAllUsers()
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => console.log(error));
    }
        , [])



    return (
        <dialog id="create-task" className="modal">
            <div className="modal-box">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        ApiService.createTask({
                            title,
                            description,
                            dueDate,
                            priority,
                            status: "pending",
                            assignedUserId,
                            assignedById: 1
                        }).then((data) => {
                            // set state
                            setTitle("");
                            setDescription("");
                            setDueDate("");
                            setPriority("");
                            setassignedUserId("");
                    
                            console.log(data)
                        }).catch((error) => console.log(error))


                    }}

                    className="space-y-1">
                    <div className="form-control">
                        <label htmlFor="title" className="label">
                            Title
                        </label>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            required
                            id="title"
                            className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="description" className="label">
                            Description
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            id="description"
                            required
                            className="textarea textarea-bordered"></textarea>
                    </div>
                    <div className="form-control">
                        <label htmlFor="dueDate" className="label">
                            Due Date
                        </label>
                        <input type="date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            id="dueDate"
                            required
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="priority" className="label">
                            Priority
                        </label>
                        <select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            name="priority"
                            required
                            id="priority"
                            className="select select-bordered">
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="assigned" className="label">
                            Assigned
                        </label>
                        <select
                            value={assignedUserId}
                            onChange={(e) => setassignedUserId(e.target.value)}
                            required
                            name="assigned"
                            id="assigned"
                            className="select select-bordered">
                            {
                                users && users.map((user) => (
                                    <option key={user.id} value={user.id}>{user.username}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div type="submit" className="form-control">
                        <button className="btn btn-primary">Create Task</button>
                    </div>

                </form>

                <div className="modal-action">

                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
}

export default CreateTask;