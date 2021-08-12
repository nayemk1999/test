import React from "react";
import { useForm } from "react-hook-form";

const ManagePost = () => {
  //   const { managePost, SetManagePost } = useEffect();
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Index Num.</th>
          <th scope="col">Property Name</th>
          <th scope="col">Owner Name</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Black House</td>
          <td>Fahim</td>
          <td>Edit/ Delete</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Marcidies</td>
          <td>Habibur</td>
          <td>Edit/ Delete</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Angels House</td>
          <td>Nayem</td>
          <td>Edit/ Delete</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ManagePost;
