const hre = require("hardhat");
const { ethers } = require("hardhat");
async function main() {
    try {
        // Lấy các signer (địa chỉ ví) từ Hardhat
        const [deployer] = await hre.ethers.getSigners();
        console.log("Deploying contracts with the account:", deployer.address);

        // Lấy contract factory cho hợp đồng StudentRecords
        const StudentRecords = await hre.ethers.getContractFactory(
            "StudentRecords"
        );

        // Triển khai hợp đồng
        const studentRecords = await StudentRecords.deploy();

        // Đợi cho đến khi hợp đồng được triển khai
        await studentRecords.deployed();

        // In địa chỉ hợp đồng đã triển khai
        console.log("StudentRecords deployed to:", studentRecords.address);
    } catch (error) {
        // Bắt và hiển thị lỗi
        console.error("Error deploying contract:", error);
        process.exit(1); // Thoát với mã lỗi
    }
}

// Chạy script và xử lý lỗi nếu có
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
