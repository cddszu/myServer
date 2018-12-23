'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }
  async test() {
    this.ctx.body = 'hi, test';
  }
}

module.exports = HomeController;
