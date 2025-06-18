const bcrypt = require('bcrypt');
const saltRounds = 12; // ~300ms

const encryptPassword = async (password: string) => {
    const hash = await bcrypt.hash(password, saltRounds);
    console.log(hash)
    return hash;
}

export default encryptPassword;