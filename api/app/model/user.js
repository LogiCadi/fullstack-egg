"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define(
    "user",
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      email: STRING,
      site: STRING,
    },
    {
      // 不要忘记启用时间戳！
      timestamps: true,

      // 不想要 createdAt
      createdAt: false,
      updatedAt: false,
    }
  );

  return User;
};
