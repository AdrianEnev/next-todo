const bcrypt = require('bcrypt');

const comparePassword = async (inputPassword: string, storedHash: any) => {
    const match = await bcrypt.compare(inputPassword, storedHash);
    return match;
}
export default comparePassword;