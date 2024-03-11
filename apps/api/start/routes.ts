/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import UsersController from "#controllers/users_controller";
import {middleware} from "#start/kernel";

router
  .group(() => {
    router.post("login", [UsersController, "login"])
    router.post("logout", [UsersController, "logout"])

    router.group(() => {
      router.get("list", [UsersController, "listUsers"])
      router.get("/:id", [UsersController, "getUserById"])
    }).use(middleware.auth())
  })
  .prefix("/users")
