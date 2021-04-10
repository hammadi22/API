import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import { Container, Row } from "reactstrap";

function UserList() {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setList(res.data))
            .catch((err) => console.log(err));
    }, []);
    console.log(list);
    return (
        <div>
            <Container>
                <Row>
                    {list.map((user, i) => (
                        <UserCard key={i} user={user} />
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default UserList;