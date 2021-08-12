import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import TableSpinner from '../../Spinner/Spinner';

const ManagePost = () => {
    const url = 'https://toprakserver.herokuapp.com/property/all-post'
    const [allPost, setAllPost] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPost(data))
    }, [])

    return (
        <>
            <div className="shadow p-5 bg-white" style={{ borderRadius: "15px" }}>
                {
                    allPost.length > 0 ?
                        <Table className='table-style' hover responsive>
                            <thead className="bg-light">
                                <tr>
                                    <th>Sl. No</th>
                                    <th>Service</th>
                                    <th>Price</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            {
                                allPost.map((post, index) => {
                                    return (
                                        <tbody key={post._id} style={{ fontWeight: "500" }}>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{post.name}</td>
                                                <td>৳ {post.price}</td>
                                                <td className="text-center">
                                                    <Button variant="outline-success" className="p-1 mb-0 me-2" onClick={"()=>handleUpdateService(post._id)"}>
                                                        <FontAwesomeIcon icon={faEdit} className="mx-1" />
                                                    </Button>
                                                    <Button variant="outline-danger" className="p-1 ml-3 mb-0" onClick={"() => handleDeleteService(post._id)"}>
                                                        <FontAwesomeIcon icon={faTrash} className="mx-1" />
                                                    </Button>
                                                </td>
                                            </tr>
                                        </tbody>)
                                })
                            }
                        </Table> : <TableSpinner />
                }
            </div>

        </>
    );
};

export default ManagePost;