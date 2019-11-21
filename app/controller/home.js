'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  // 查找全部个人数据
  async getUser() {
    const { ctx } = this;
    let data=await ctx.service.home.getUser();
    ctx.body = {
      code:1,
      data
    }
  }
  // 查找全部左列导航栏数据
  async getList() {
    const { ctx } = this;
    let data=await ctx.service.home.getList();
    ctx.body = {
      code:1,
      data
    }
  }
  // 查找全部不同类型左列导航栏数据
  async getListType() {
    const { ctx } = this;
    let {code}=ctx.request.query;
   if(code){
     try {
      console.log(code);
      let data=await ctx.service.home.getListType(code);
     if(data.length){
      ctx.body = {
        code:1,
        data
      }
     }else{
      ctx.body = {
        code:0,
        message:'未查找到'
      }
     }
     } catch (error) {
      ctx.body = {
        code:0,
        error
      }
     }
   }
  }
  // 登录验证个人信息
  async login() {
    const { ctx,app } = this;
    let {name,password}=ctx.request.query;
    console.log(name,password);
    const token = app.jwt.sign({name,password}, app.config.jwt.secret);
   if(name&&password){
    try {
      let data=await ctx.service.home.login(name,password);
   if(data.length){
    ctx.body = {
      code:1,
      data,
      token
    }
   }else{
    ctx.body = {
      code:0,
      message:'未查找到'
    }
   }
    } catch (error) {
      ctx.body = {
        code:0,
        error
      }
    }
   }
  }
}

module.exports = HomeController;
