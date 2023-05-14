const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
    const wallet = new ethers.Wallet(process.env.WALLET_KEY);
    const encryptedJsonKey = await wallet.encrypt(
        process.env.WALLET_KEY_PASSWORD
    );
    console.log(encryptedJsonKey);
    fs.writeFileSync("./encryptKey.json", encryptedJsonKey);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
