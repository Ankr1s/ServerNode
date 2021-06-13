import * as jwt from './jwt';
const PATH_WITHOUT_JWT: string[] = ['/users/login', '/users/register', '/test'];

export function middleware(req: any, res: any, next: any) {
    console.log('BODY::', req.body)
    console.log('QUERY::', req.query)
    if (!PATH_WITHOUT_JWT.includes(req.path)) {
        if (req.headers && req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1];
            jwt.verifyJWT(token).then( (res: any) => {
                if (res) {
                    next();
                } else {
                    res.status(401).send();
                }
            }, () => {
                res.status(401).send();
            })
        } else {
            res.status(401).send();
        }
    } else {
        next();
    }
}