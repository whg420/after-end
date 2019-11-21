'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async index() {
    
  }
// 查找全部个人数据
  async getUser() {
    return await this.app.mysql.query('select * from userlist')
  }
  // 查找全部左列导航栏数据
  async getList() {
    return await this.app.mysql.query('select * from leftlist')
  }
  // 查找全部不同类型左列导航栏数据
  async getListType(code) {
    return await this.app.mysql.query(`select * from leftlist where code like "%${code}%" `)
  }
  async login(name,password) {
    return await this.app.mysql.query('select * from userlist where name=? and password=?',[name,password])
  }
}

module.exports = HomeService;
