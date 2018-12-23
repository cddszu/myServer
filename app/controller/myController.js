'use strict';

const Controller = require('egg').Controller;

class myController extends Controller {
  async index() {
    this.ctx.body = JSON.stringify({ a: '2', b: '3' });
  }
}

module.exports = myController;
