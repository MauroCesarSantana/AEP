import {Request, Response} from 'express'

class UserController {
    public async findUsers(req: Request, res: Response) {
        return res.json('Mauro Cesar')
    }

    public async createUser(req: Request, res: Response) {
        return res.json("Usuário buscado do banco: Mauro Cesar")
    }
}

export default new UserController()