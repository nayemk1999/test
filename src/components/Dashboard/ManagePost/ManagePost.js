import React, { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";

const ManagePost = () => {
  const [allpost, setAllPost] = useState([]);
  useEffect(() => {
    const url = "https://toprak-real.herokuapp.com/all-post";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPost(data));
  });
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Index Num.</th>
          <th>Property Name</th>
          <th>Posted By</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ManagePost;
