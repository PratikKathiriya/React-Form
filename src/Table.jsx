import React from 'react';
import "./Table.css"

const Table = ({ students }) => {
    console.log("studentssss:::", students)
    return (

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Conform Password </th>
                    <th>Roll No</th>
                    <th>Age </th>
                    <th>Date Of Birth </th>
                </tr>
            </thead>

            <tbody>
                {
                    students.map((student, index) => {
                        console.log("hey!!1");
                        return (
                            <tr key={index}>
                                <td>{student.name}</td>
                                <td>{student.Email}</td>
                                <td>{student.Password}</td>
                                <td>{student.ConformPassword}</td>
                                <td>{student.RollNo}</td>
                                <td>{student.Age}</td>
                                <td>{student.DateOfBirth}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};

export default Table;

