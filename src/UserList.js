import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";


function UserList() {
    const [users, setUsers] = useState([]);
    const getDataUsers = async () => {
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(data);
    };
    useEffect(() => {
        getDataUsers();
    }, []);
    //console.log(users);

    return (
        <div>
            {users.map((el) => (
                <Card key={el.id} style={{ width: "18rem" }}>
                    <Card.Body>
                        <Card.Title>{el.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">  {el.email}</Card.Subtitle>
                        <Card.Text>  {el.phone}</Card.Text>
                        <Card.Link href="#"> {el.website}</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            ))
            }
        </div>
    )
}

export default UserList;