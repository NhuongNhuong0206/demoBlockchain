const hre = require("hardhat");
const { ethers } = require("hardhat");
async function main() {
    try {
        const [deployer] = await hre.ethers.getSigners();
        console.log("Deploying contracts with the account:", deployer.address);

        // const StudentRecords = await hre.ethers.getContractFactory(
        //     "StudentRecords"
        // );
        
        // const studentRecords = await StudentRecords.deploy();
        // console.log("studentRecords: ", studentRecords);
        // // Chờ cho hợp đồng được triển khai
        // await studentRecords.TodoList.deployed();

        // In địa chỉ hợp đồng đã triển khai
        //console.log("StudentRecords deployed to:", studentRecords.address);

        const Upload = await hre.ethers.getContractFactory("StudentRecords");
        const upload = await Upload.deploy();
        const address = await upload.getAddress();
        console.log("Library deployed to:", address);
        return address;
    } catch (error) {
        console.error("Error deploying contract:", error.message);
        process.exit(1);
    }
}
module.exports = main;
// Chạy script và xử lý lỗi nếu có
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
