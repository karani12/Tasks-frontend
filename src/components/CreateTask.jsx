const CreateTask = () => {
    return (
        <dialog id="create-task" className="modal">
            <div className="modal-box">
                <form className="space-y-3">
                    {/* title, description, dueDate,priority, assigned */}
                    <div className="form-control">
                        <label htmlFor="title" className="label">
                            Title
                        </label>
                        <input type="text" id="title" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="description" className="label">
                            Description
                        </label>
                        <textarea id="description" className="textarea textarea-bordered"></textarea>
                    </div>
                    <div className="form-control">
                        <label htmlFor="dueDate" className="label">
                            Due Date
                        </label>
                        <input type="date" id="dueDate" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="priority" className="label">
                            Priority
                        </label>
                        <select name="priority" id="priority" className="select select-bordered">
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="assigned" className="label">
                            Assigned
                        </label>
                        <input type="text" id="assigned" className="input input-bordered" />
                    </div>
                    <div className="form-control">
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