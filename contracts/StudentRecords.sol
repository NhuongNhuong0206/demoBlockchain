// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Student.sol";
import "./Grade.sol";

contract StudentRecords is Student, Grade {
    address public admin; // lưu trữ địa chỉ của quản trị viên hợp đồng

    modifier onlyAdmin() {
        require(msg.sender == admin, "Chi admin moi duoc thuc hien");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    // Hàm công khai để thêm học sinh mới (chỉ admin)
    function addStudent(
        uint256 _studentId,
        string memory _name,
        string memory _studentIden,
        string memory _schoolId
    ) public onlyAdmin override {
        super.addStudent(_studentId, _name, _studentIden, _schoolId);
        // Không cần phải emit lại sự kiện nếu đã emit trong hàm của cha
    }

    // Hàm công khai để thêm điểm số cho học sinh (chỉ admin)
    function addGrade(
        uint256 _studentId, 
        string memory _subject, 
        uint8 _grade
    ) public onlyAdmin override {
        super.addGrade(_studentId, _subject, _grade);
        // Không cần phải emit lại sự kiện nếu đã emit trong hàm của cha
    }

    // Hàm công khai để cập nhật địa chỉ quản trị viên (chỉ admin)
    function updateAdmin(address newAdmin) public onlyAdmin {
        admin = newAdmin;
    }
}
