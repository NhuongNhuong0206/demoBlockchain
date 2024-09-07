//Điểm số
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Grade {
    struct GradeInfo {
        mapping(string => uint8) grades;//Map để lưu trữ điểm của từng môn học, khoá là tên môn
    }

    mapping(uint256 => GradeInfo) internal studentGrades;//Map để lưu trữ điểm của từng học sinh, khoá là Id học sinh

    event GradeAdded(uint256 studentId, string subject, uint8 grade);//Thông báo là điểm mới được thêm vào
    //Hàm thêm điểm cho học sinh
    function addGrade(uint256 _studentId, string memory _subject, uint8 _grade) internal virtual {
        require(_grade >= 0 && _grade <= 10, "Diem phai nam trong khoan tu 0 den 10");
        //Cây để dể hiểu 2 cấp mapping
        //studentGrades:
        //  1: Một học sinh với ID 1.
        //      GradeInfo:
        //          grades:
        //              "Math": 95
        //              "Physics": 100
        //  2: Một học sinh với ID 2.
        //      GradeInfo:
        //          grades:
        //              "Math": 85
        //              "Physics": 90
        studentGrades[_studentId].grades[_subject] = _grade;//Chỉ định _studentId để lấy được GradeInfo của học sinh đó, tiếp theo muốn sửa hoặc tạo được điểm ta lấy khoá là tên để cập nhập(tạo mới) được grades

        emit GradeAdded(_studentId, _subject, _grade);//Thông báo là add thành công
    }

    function getGrade(uint256 _studentId, string memory _subject) public view returns (uint8) {
        return studentGrades[_studentId].grades[_subject];
    }
}
