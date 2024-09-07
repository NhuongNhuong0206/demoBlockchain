// import Web3 from "web3";
// import fs from "fs";
// import path from "path";
// import { AbiItem } from "web3-utils";

// // ABI của smart contract
// import studentRecordsABI from "../data/students.json";

// const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Địa chỉ smart contract của bạn
// const infuraUrl = "YOUR_INFURA_URL"; // URL của Infura hoặc provider khác
// const adminAddress = "YOUR_ADMIN_ADDRESS"; // Địa chỉ của admin
// const privateKey = "YOUR_PRIVATE_KEY"; // Khóa riêng của admin
// // contractAddress: Địa chỉ của smart contract trên blockchain.
// // infuraUrl: URL của Infura hoặc một nhà cung cấp khác, giúp kết nối với mạng blockchain.
// // adminAddress: Địa chỉ ví của người quản trị, người sẽ gửi các giao dịch.
// // privateKey: Khóa riêng của admin, dùng để ký các giao dịch.


// // Khởi tạo Web3
// const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));

// // Khởi tạo contract
// const contract = new web3.eth.Contract(
//     studentRecordsABI as AbiItem[],
//     contractAddress
// );

// // Đọc dữ liệu từ file JSON
// const data = JSON.parse(
//     fs.readFileSync(path.join(__dirname, "students.json"), "utf8")
// );

// interface Student {
//     studentId: number;
//     name: string;
//     studentIden: string;
//     schoolId: string;
//     grades: Record<string, number>;
// }

// async function addStudent(student: Student) {
//     try {
//         await contract.methods
//             .addStudent(
//                 student.studentId,
//                 student.name,
//                 student.studentIden,
//                 student.schoolId
//             )
//             .send({ from: adminAddress });
//         console.log(`Student ${student.name} added successfully.`);
//     } catch (error) {
//         console.error(`Failed to add student ${student.name}:`, error);
//     }
// }

// async function addGrades(student: Student) {
//     try {
//         for (const [subject, grade] of Object.entries(student.grades)) {
//             await contract.methods
//                 .addGrade(student.studentId, subject, grade)
//                 .send({ from: adminAddress });
//         }
//         console.log(`Grades for student ${student.name} added successfully.`);
//     } catch (error) {
//         console.error(
//             `Failed to add grades for student ${student.name}:`,
//             error
//         );
//     }
// }

// async function processStudents() {
//     const account = web3.eth.accounts.privateKeyToAccount(privateKey);
//     web3.eth.accounts.wallet.add(account);
//     web3.eth.defaultAccount = account.address;

//     for (const student of data) {
//         await addStudent(student);
//         await addGrades(student);
//     }
// }

// // Gọi hàm chính để thực hiện các tác vụ
// processStudents().catch((error) =>
//     console.error("Error processing students:", error)
// );
