import User from "#models/user";
import db from "@adonisjs/lucid/services/db";

export default class UsersController {
  public async login({ request, auth, response }: any): Promise<any> {
    const {login, password} = request.body();
    const user = await User.verifyCredentials(login, password)
    if(user) {
      await auth.use('web').login(user)
      response.cookie('user_session', [{ user }]).json({...user.$attributes, password: undefined})
    } else {
      response.status(401).json({message: "Mot de passe ou identifiant incorrect"})
    }
  }

  public async logout({auth}: any): Promise<any> {
    await auth.use('web').logout()
    return;
  }

  public async listUsers(): Promise<any[]> {
    return db.query().from("users").select("*");
  }

  public async getUserById({ params }: any): Promise<any> {
    const {id} = params;
    const user = await db.query().from("users").select("*").where("id", "=", id)
    if (user.length > 0) return {isFound: true, user}
    return {isFound: false, message: `Aucun utilisateur avec l'id : ${id}`}
  }
}
