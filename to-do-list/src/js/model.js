const _getId = () => {
    const S4 = () => {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

const model = {
    projects: JSON.parse(localStorage.getItem('projects')) || [],
    Project: title => {
        return {
            id: _getId(),
            tasks: [],
            title,
        }
    },
    Task: (title, description, dueDate, priority, completed) => {
        if (typeof(dueDate) !== Date) {
            dueDate = new Date(dueDate).toLocaleDateString();
            if (dueDate === "Invalid Date")
                dueDate = new Date().toLocaleDateString();
        }

        return {
            id: _getId(),
            title,
            description,
            dueDate,
            priority,
            completed
        }
    }
}

export default model;