import UserListItem from "./UsersListItem";

const UsersList = ({ users }) => {
    return (
        <ul>
            {users.results.map((user) => {
                return <UserListItem user={user} />;
            })}
        </ul>
    );
};

export default UsersList;
