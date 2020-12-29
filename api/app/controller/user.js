"use strict";

const { Controller } = require("egg");

class UserController extends Controller {
  async list() {
    const { ctx } = this;
    const list = await ctx.model.User.findAll();
    ctx.body = {
      code: 0,
      data: list,
    };
  }

  async createUser() {
    const { ctx } = this;
    const res = await ctx.model.User.create(ctx.request.body);
    ctx.body = {
      code: 0,
    };
  }

  async deleteUser() {
    const { ctx } = this;
    const res = await ctx.model.User.destroy({
      where: { id: this.ctx.query.id },
    });
    ctx.body = {
      code: 0,
    };
  }
}

module.exports = UserController;
