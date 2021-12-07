import { useEffect, useState } from "react";
import UserList from "./components/UsersList";

function UsersSection() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(
                    "https://randomuser.me/api/?results=20"
                );
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUsers();
    }, []);

    if (users.length === 0) {
        return null;
    } else {
        return (
            <section>
                <h2>Users Section</h2>
                <div className="scroll-container">
                    <UserList users={users} />
                </div>
            </section>
        );
    }
}

export default UsersSection;
