# Contributing to NFT-Minter
Thank you for your interest in contributing to NFT-Minter! We welcome all contributors to help improve and expand this project. Whether you're fixing a bug, developing a new feature, or enhancing documentation, your efforts are greatly appreciated. This document outlines the contribution process to ensure the project continues to grow in a collaborative and organized way.

## 🚀 Project Overview
NFT-Minter is an open-source, beginner-friendly project designed to enable user to create and mint their NFT's while by doing code contributions. Contributors who are interested in web3 and open-source can learn how to build, collaborate and contribute to decentralized applications (dApps) while working with blockchain technology.

---

## 📋 Prerequisites
Before starting your contribution, please ensure you are familiar with the following. 

#### 📈 Learn while Building:
Always remember that you don't need to have expertise in any of the technologies mentioned below to start contributing. Just think of the features you want to improve or add to this project and start building!

#### For Code Contributions:
- Git for version control: [Git Documentation](https://git-scm.com/doc)
- JavaScript/ReactJS for frontend development: [React Documentation](https://react.dev/learn/start-a-new-react-project)
- Tailwind CSS for styling: [Tailwind Documentation](https://tailwindcss.com/docs/guides/create-react-app)
- Solidity for smart contract development: [Solidity Documentation](https://docs.soliditylang.org/en/v0.8.28/)
- ThirdWeb for smartcontract deployent and integration: [ThirdWeb Documentation](https://portal.thirdweb.com/)
For Documentation Contributions:
- Hardhat for smartcontract deployment - [Hardhat Documentation](https://hardhat.org/docs)

***NOTE: In the current codebase, we have used ```ThirdWeb``` for testing and deployment of the smart contract, but you can use ```Hardhat``` as well.***

---

## 🛠️ How to Contribute
#### 1. Fork the Repository
Start by forking the NFT-Minter repository on GitHub.

#### 2. Clone Your Fork
Once the repository is forked, clone it to your local machine using the following commands:

```
# Using HTTPS
git clone https://github.com/Rise-In/NFT-Minter.git

# Using SSH
git clone git@github.com:Rise-In/NFT-Minter.git
```

#### 3. Create a New Branch
Create a new branch to work on your feature or fix. Use a descriptive branch name for clarity:
```
git checkout -b feature/<your-feature-name>
```
#### 4. Make Changes
Start contributing by making necessary changes to the project. Whether it’s bug fixes, adding new features, or improving documentation, ensure your code is clean and well-documented.

#### 5. Test Your Changes
Run the project locally to make sure everything works as expected:

- Install the npm packages. You can use any of the three commands mentioned below. If one doesn't work, then move to the next installation command:
command 1: ```npm install```
command 2: ```npm --force install```
command 2: ```npm install --legacy-peer-deps```

- Start the server, using command:
```
npm run start
```

***NOTE: If you want to test, compile, and deploy your smart contract via a user-friendly GUI, then use ThirdWeb. Otherwise, if you are interested in working with the command line (CLI), you can use Hardhat.***

#### 6. Commit Your Changes
After verifying that your changes work, commit them to your branch:
```
git add .
git commit -m "Add feature: <your-feature-name>"
```

#### 7. Push to Your Fork
Push your branch to your forked repository:
```
git push origin feature/<your-feature-name>
```

#### 8. Create a Pull Request (PR)
Submit a PR from your feature branch to the original main branch in the NFT-Minter repository. Make sure to describe the changes you’ve made and include any relevant details.

#### 9. Review & Feedback
The maintainers will review your PR, provide feedback, or approve it for merging. You may be asked to make some adjustments before your changes can be merged.

---

## 📝 Pull Request Guidelines
To ensure smooth collaboration, please adhere to the following when submitting a PR:

1. Check for Existing Issues: Before working on a new feature or bug, ensure there isn't already an open issue or ongoing work.
2. Code Quality: Follow the coding standards and conventions of the project. Make sure your code is free of errors and warnings.
3. Write Tests: If you introduce new features, ensure you write relevant test cases.
Des4. criptive Commits: Write clear and concise commit messages in the present tense (e.g., "Add feature X").
5. Add Screenshots/Examples: If applicable, include screenshots of the changes you made, especially for UI/UX improvements.

**To get started:**

1. **Fork the project** and use the `git clone` command to download the repository to your machine.
  
2. **Before creating a new branch**, update your default branch by pulling the latest changes from upstream:
   ```
   git pull
   ```

3. **Create a new branch** from the default branch. For example: 
   ```
   git checkout -b name-of-your-work-branch
   ```

4. **Work on your changes**, commit regularly, and ensure you're on your new branch.

5. **Push your changes** to GitHub:
   ```
   git push origin name-of-your-work-branch
   ```

6. **Submit your changes for review**. Go to your repository on GitHub and click the **Compare & pull request** button.

7. **Start a Pull Request (PR)** by clicking on **Create pull request**. Be sure to update the PR description according to the provided template.

8. **Await code review**. If you receive feedback and need to make changes, re-request your reviewer's feedback after you've made the necessary adjustments.

9. **Re-Request a Review** after making updates.

Once approved, a maintainer will merge your PR. After merging, you can delete your branch.

---

## 💡 Contribution Ideas
If you're looking for ways to contribute, consider the following:

- Report bugs
- Fix bugs reported in Issues.
- Add new features, such as additional functionality for interacting with NFTs.
- Improve the user interface or enhance mobile responsiveness.
- Refactor code to improve performance or readability.
- Contribute to the documentation.

---

## 🧑‍🏫 Style Guide for Git Commit Messages
To maintain clear and consistent logs, follow these guidelines for commit messages:

- Use the present tense (e.g., "Add feature" instead of "Added feature").
- Capitalize the subject line.
- Keep the subject line to 50 characters or less.
- Reference issues and pull requests liberally.

---

## 🛠 Reporting Issues
If you encounter a bug or have a suggestion for improvement, please create an issue. Make sure to provide as much context as possible.

---

## 🏆 Our Code of Conduct
This project adheres to a Code of Conduct that outlines how community members should interact. By contributing, you agree to follow this code.

---

Thank you for contributing to NFT-Minter! Let’s build something amazing together 🎨✨!