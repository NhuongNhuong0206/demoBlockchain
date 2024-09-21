// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Student {
    struct StudentInfo {
        string name;
        string studentIden;  
        string schoolId; 
        bool exists;
    }

    mapping(uint256 => StudentInfo) internal students;

    event StudentAdd(string studentIden, string name, string schoolId);
    // Hàm add học sinh
    function addStudent(
        uint256 _studentId,
        string memory _name,
        string memory _studentIden,
        string memory _schoolId
    ) public virtual {
        require(!students[_studentId].exists, "Student already exists");// Nếu học sinh đã tồn tại thì thông báo

        students[_studentId] = StudentInfo(_name, _studentIden, _schoolId, true);//add học sinh

        emit StudentAdd(_studentIden, _name, _schoolId);//Thông báo add thành công
    }
    //Hàm lấy thông tin của một học sinh
    function getStudent(uint256 _studentId) public view returns (string memory, string memory, string memory) {
        require(students[_studentId].exists, "Hoc sinh da ton tai");//Kiểm tra thử cái ID có tồn tại chưa

        StudentInfo storage student = students[_studentId];
        return (student.name, student.studentIden, student.schoolId);
    }
}
