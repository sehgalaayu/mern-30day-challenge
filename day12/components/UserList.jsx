import { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
