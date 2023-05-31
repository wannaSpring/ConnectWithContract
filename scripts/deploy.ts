import { ethers } from "hardhat";
require('dotenv').config();

async function main() {
  const ABI = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"}],"name":"Winner","type":"event"},{"inputs":[],"name":"attempt","outputs":[],"stateMutability":"nonpayable","type":"function"}];
  const address = '0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502';
  const provider = new ethers.providers.JsonRpcProvider(process.env.TEST_API_URL as string);
  const wallet = new ethers.Wallet(process.env.TEST_PRIVATE_KEY as string, provider);
  // we need signature, so must be wallet and that need private key and provider.
  const contract  = new ethers.Contract(address,ABI,wallet);
  const attempt = await contract.attempt()
  // i don't have eth, so can't be pay for gas fees.
  console.log(wallet, 'wallet')
  await attempt.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
