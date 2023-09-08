const hre = require("hardhat");

async function main() {
  console.log("deploying...");
  const Exchange = await hre.ethers.getContractFactory("Exchange");
  const exchange = await Exchange.deploy();

  await exchange.deployed();

  console.log("Exchange contract deployed: ", exchange.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});