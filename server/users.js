const users = []

const addUsers = (id, name, room) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find((user) => user.room === room && user.name === name);

    if(existingUser){
        return {error: "Username already exists"}
    }
    
    const user = {id, name, room}

    users.push(user);

    return { user }
}

const removeUsers = () => {

}

const getUser = () => {

}

const getUsersInRoom = () => {

}