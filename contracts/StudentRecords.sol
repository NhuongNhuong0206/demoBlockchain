//Kết hợp Student.sol và Grade.sol lại và tạo các chức năng quản lý
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Student.sol";
import "./Grade.sol";

contract StudentRecords is Student, Grade {
    address public admin; // lưu trữ địa chỉ của quản trị viên hợp đồng. Chỉ quản trị viên mới có thể thực hiện các hành động quan trọng như thêm học sinh và điểm số.

    modifier onlyAdmin() {
        require(msg.sender == admin, "Admin moi co the thuc hien");// Kiểm tra có phải là admin không
        _;
    }

    constructor() {
        admin = msg.sender;
    }
      // Hàm công khai để thêm học sinh mới
    function addStudent(
        uint256 _studentId,
        string memory _name,
        string memory _studentIden,
        string memory _schoolId
    ) internal onlyAdmin override {
        super.addStudent(_studentId, _name, _studentIden, _schoolId);
        emit StudentAdd(_studentIden, _name, _schoolId); // Kích hoạt sự kiện từ hợp đồng cha
    }

    // Hàm công khai để thêm điểm số cho học sinh
    function addGrade(
        uint256 _studentId, string memory _subject, uint8 _grade
    ) internal onlyAdmin override {
        super.addGrade(_studentId, _subject, _grade);
        emit GradeAdded(_studentId, _subject, _grade); // Kích hoạt sự kiện từ hợp đồng cha
    }
    
      // Hàm công khai để cập nhật địa chỉ quản trị viên
    function updateAdmin(address newAdmin) public onlyAdmin {
        admin = newAdmin;
    }
}
