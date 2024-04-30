import express from 'express';

const tokens = {
  // In a production or real scenario, this should be stored securely and encrypted. This is an example
  admin: 'admin-token',  
  user: 'user-token'
};

export const authenticate = (role: 'admin' | 'user') => {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const token = req.headers.authorization;
    if (token === tokens[role]) {
      next();
    } else {
      res.status(401).send({ 
        authorized: false,
        message: "Unauthorized" 
      });
    }
  };
};
