const hre = require("hardhat");
const deploy = require("./deploy");
async function main() {
     const address = await deploy();
     console.log("Địa chỉ hợp đồng đã triển khai:", address);
    // const [deployer] = await hre.ethers.getSigners();

    // const studentRecordsAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS"; // Thay bằng địa chỉ contract đã triển khai
    // const StudentRecords = await hre.ethers.getContractAt(
    //     "StudentRecords",
    //     studentRecordsAddress
    // );

    // // Thêm học sinh
    // const studentId = 1;
    // const name = "Nguyen Van A";
    // const studentIden = "S123";
    // const schoolId = "SCH001";

    // let tx = await StudentRecords.addStudent(
    //     studentId,
    //     name,
    //     studentIden,
    //     schoolId
    // );
    // await tx.wait(); // Chờ giao dịch hoàn tất
    // console.log("Student added:", name);

    // // Thêm điểm số cho học sinh
    // const subject = "Math";
    // const grade = 9;

    // tx = await StudentRecords.addGrade(studentId, subject, grade);
    // await tx.wait();
    // console.log(
    //     "Grade added for student",
    //     studentId,
    //     "in subject",
    //     subject,
    //     ":",
    //     grade
    // );
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
