# NFT-Minter (Open-Sourced)

---
## Project Description: 
The NFT-Minter Project is an open-source, blockchain-based application designed to simplify the NFT creation process. It allows users to upload their NFT images, generate JSON metadata for the NFT, and interact with a dynamic NFT marketplace. Beginners can contribute to the project while learning how to develop decentralized applications (dApps). By offering easy integration with blockchain technology, the project aims to empower users to engage in the world of NFTs, regardless of technical expertise.

---
## Project Vision:
Vision:
The vision of the NFT-Minter Project is to create a collaborative, beginner-friendly platform that fosters innovation and learning within the blockchain ecosystem. By enabling users to mint NFTs, view all listed tokens, and access detailed information about each minted token, the project serves as both a creative hub and a learning tool. With a focus on community contribution and open-source development, it aims to lower the barriers to entry for blockchain and NFT technology, encouraging a wider audience to explore and contribute to decentralized platforms.

---
## Some Project Screenshots:
### - Desktop view:
![image](https://github.com/user-attachments/assets/59cd907d-7831-432a-9085-1d0959b735ad)
![image](https://github.com/user-attachments/assets/70d81651-6449-49df-9ae2-dbbad424ac1c)

### - Mobile View:
![image](https://github.com/user-attachments/assets/86674a63-c78c-4f11-ab81-3d159e55b7cf)
![image](https://github.com/user-attachments/assets/1120c36a-d9af-4e8f-8a38-a06b4945787c)

---
## Technologies Used:
- ReactJS - For building the frontend
- TailwindCSS - For Styling
- Solidity - For writing the smartcontract
- HardHat - for compiling and deploying the smartcontract
- ThirdWeb - For building integeration function 

---
## Project Setup Guide:

1. Clone the project using command: ```git clone https://github.com/bhupendra-chouhan/NFT-Minter.git```
2. Install the npm packages using any one of the three comands below mentioned: 
    ```npm install```
    ```npm --legacy-peer-deps install```
    ```npm --force install```
3. Create a ```.env``` file in the root directory, and copy-paste the environment variable mentioned below into it:
    ```
    EDUCHAIN_NETWORK_RPC_URL="https://open-campus-codex-sepolia.drpc.org"
    REACT_APP_EDUCHAIN_CHAIN_ID=656476
    REACT_APP_EDUCHAIN_DEPLOYED_SMART_CONTRACT_ADDRESS="0x7F3ad6b705251D1EC4F3B10473AdA9Ed93753BAb"

    REACT_APP_THIRDWEB_CLIENT_ID=""

    REACT_APP_PINATA_JWT=""
    REACT_APP_PINATA_GATEWAY=""    
    ```

    ***Note: You need to fill in the values for the empty environment variables yourself in order to successfully run this project locally on your system.***

4. Finally, start the server by using this command: ```npm run start```

## Maintainers (Our Team for Hacktoberfest2024)

Meet the amazing maintainers of this project:

| Maintainer | Role | Photo |
| ---------- | ---- | ----- |
| [Bhupendra](https://github.com/bhupendra-chouhan) | Lead Maintainer | <img src="https://avatars.githubusercontent.com/u/78025043?v=4" width="100" height="100" alt="Name 1"> |
| [Sahitya](https://github.com/SahityaRoy) | Co-Maintainer | <img src="https://avatars.githubusercontent.com/u/72821604?v=4" width="100" height="100" alt="Name 2"> |
| [Aryan](https://github.com/neutr0n420) | Contributor | <img src="https://media.licdn.com/dms/image/v2/D5603AQEGBp2H-85zWA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693536160681?e=1734566400&v=beta&t=f6SoR_-rq0gA99mvwpeCSE5Q6y-cB_Bux2VNqVpiKas" width="100" height="100" alt="Name 3"> |

Feel free to reach out to any of us with questions or contributions!

---


## Contributing

We welcome contributions from the community. Please review our [contributing guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



