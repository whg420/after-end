'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // 查找全部个人数据
  router.get('/api/getUser', controller.home.getUser);
  // 查找全部左列导航栏数据
  router.get('/api/getList', controller.home.getList);
  // 查找全部不同类型左列导航栏数据
  router.get('/api/getListType', controller.home.getListType);
  // 登录验证个人信息
  router.get('/api/login',app.jwt, controller.home.login);

};
