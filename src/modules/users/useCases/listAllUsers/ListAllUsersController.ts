import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      let { user_id } = request.headers;
      // porque tive que fazer o cast aqui??? why
      user_id = String(user_id);
      const allUsers = this.listAllUsersUseCase.execute({ user_id });
      return response.json(allUsers);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
