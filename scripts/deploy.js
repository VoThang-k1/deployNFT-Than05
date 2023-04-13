const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with th account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const GameItem = await ethers.getContractFactory("GameItem");
  const gameItem = await GameItem.deploy();

  const awardItem = await gameItem.awardItem("https://raw.githubusercontent.com/VoThang-k1/Than05_NFT/main/json/1.json");
  // const awardItem = await gameItem.awardItem("https://raw.githubusercontent.com/VoThang-k1/Than05_NFT/main/json/2.json");
  // const awardItem = await gameItem.awardItem("https://raw.githubusercontent.com/VoThang-k1/Than05_NFT/main/json/3.json");
  // const awardItem = await gameItem.awardItem("https://raw.githubusercontent.com/VoThang-k1/Than05_NFT/main/json/4.json");
  await awardItem.wait();
  console.log("NFT address:", gameItem.address);

}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});