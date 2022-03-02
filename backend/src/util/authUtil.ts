import { User } from '@prisma/client';
import * as jwt from 'jsonwebtoken';

const TOKEN_SECRET =
  'bQeThWmZq4t7w!z$C&F)J@NcRfUjXn2r5u8x/A?D*G-KaPdSgVkYp3s6v9y$B&E)H+MbQeThWmZq4t7w!z%C*F-JaNcRfUjXn2r5u8x/A?D(G+KbPeSgVkYp3s6v9y$B';

export function generateToken(user: User): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(
      {
        email: user.email,
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      TOKEN_SECRET,
      { expiresIn: '30d' },
      (err, token) => {
        if (err) reject(err);
        if (token === undefined) reject(token);
        else resolve(token);
      },
    );
  }).then((token) => token);
}

export function verifyToken(token: string): Promise<jwt.JwtPayload> {
  return new Promise<jwt.JwtPayload>((resolve, reject) => {
    jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
      if (err) reject(err);
      if (decoded === undefined) reject(decoded);
      else if (typeof decoded === 'string') reject(decoded);
      else resolve(decoded);
    });
  }).then((decoded) => decoded);
}
