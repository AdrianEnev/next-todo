import jwt, { JwtPayload } from 'jsonwebtoken';

const getUser = async (token: string): Promise<jwt.JwtPayload | null> => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
        return decoded;
    } catch (err) {
        console.error("Token verification error:", err);
        return null;
    }
};

export default getUser;