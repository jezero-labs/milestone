// import {ethers} from 'ethers';
// import {CONTACT_ABI, CONTACT_ADDRESS} from '../context/config';
// import {useRecoilState} from 'recoil';
// import {seedPhase} from '../state';

// const GetSeedPhase = () => {
//   const [seedphase, setSeedPhase] = useRecoilState(seedPhase);

//   const TempSeed: string = seedphase;
//   return TempSeed;
// };

// export const wallet = ethers.Wallet.fromPhrase(GetSeedPhase());

// // Instantiate the smart contract
// export const MilestoneContract = new ethers.Contract(
//   CONTACT_ADDRESS,
//   CONTACT_ABI,
//   wallet,
// );

// console.log(MilestoneContract);