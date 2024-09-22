---
title: 'How to Spot a Malicious Smart Contract'
date: '2024-09-22'
---

## Key Functions to Watch Out For

Interacting with smart contracts is an integral part of the Web3 experience. These functions allow actions between your wallet and decentralized platforms like NFT marketplaces or DeFi services. The barier to entry with Web3 is sort of steep and people just getting started can fall victim to scammers who are using malicious smart contracts to steal crypto and NFTs. In order to not fall victim to these malicious contracts it is a good idea to educate yourself. This blog will go over the top 3 smart contract functions but this is not an exhaustive list. Keep researching and learning to identify malicious smart contracts.

### What Are Smart Contract Functions?

A smart contract function allows specific tasks to be carried out on the blockchain, such as approving a transfer or interacting with a DeFi service. Approving one of these functions lets the smart contract perform actions that involve your wallet. Many of these functions are legitimate, but unfortunately some of them are not.

I thought it would be a good idea to discuss **three important smart contract functions** you should be aware of and how to identify if they're being used maliciously.

### 1. **SetApprovalForAll**

The **SetApprovalForAll** function is one you’ll frequently encounter when listing NFTs on marketplaces. Its purpose is to give the marketplace permission to transfer your NFTs or tokens when a sale occurs.

However, this function also comes with risks. Approving it grants the platform access to **all tokens** associated with a given contract, and it applies not just to current tokens but also to future tokens from that contract. This open-ended permission can be exploited by scammers to gain access to your NFTs or crypto.

#### How to Detect Malicious **SetApprovalForAll** Functions:

- **When is it safe?** Only approve this function when listing an NFT for sale or interacting with a decentralized exchange (DEX).
- **Red flags:** If you're minting, buying, or transferring an NFT, **you should not see this function**.

### 2. **SafeTransferFrom**

The **SafeTransferFrom** function is used for transferring NFTs between wallets. For example, if you’re moving an NFT from a hot wallet to a more secure hardware wallet, you’ll see this function.

However, scammers can misuse this function during actions like minting. Instead of minting a new NFT, you could unknowingly be approving the transfer of an NFT **out of your wallet**.

#### How to Detect Malicious **SafeTransferFrom** Functions:

- **When is it safe?** It’s only appropriate to see this function when you're **transferring** an NFT between wallets.
- **Red flags:** If you're minting or buying an NFT, **you should not see this function**.

### 3. **SendEth**

The **SendEth** function is commonly used to transfer Ether (ETH) between wallets or to make purchases on a marketplace. In these cases, it’s perfectly valid.

However, during minting events, scammers may present a **SendEth** function instead of a **mint** function. This tricks users into sending ETH directly to a scammer's wallet, rather than minting an NFT.

#### How to Detect Malicious **SendEth** Functions:

- **When is it safe?** You should only see this function when you're sending ETH to another wallet.
- **Red flags:** If you're minting, buying, or swapping NFTs, **you should not see this function**.

### Wrapping it up

Smart contract functions are powerful tools, but they also pose risks if you don't know what to look for. By understanding and recognizing key functions like **SetApprovalForAll**, **SafeTransferFrom**, and **SendEth**, you can better protect yourself from scammers.

Always double-check function calls and be cautious of any unexpected permissions you are asked to grant. By staying informed, you can safely navigate the exciting world of Web3 without falling victim to scams.

If this subject was interesting let me know via the contact page above! If you are looking to gain more knowledge I might suggest [this article](https://www.ledger.com/academy/segregate-crypto-assets) which dives into the 3 accounts you should have if working with crypto.

Thanks for reading!
