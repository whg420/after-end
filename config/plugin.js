'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  mysql:{
    enable: true,
    package: 'egg-mysql',
  },
  security:{
    csrf: false
  },
  jwt:{
    enable: true,
    package: "egg-jwt"
  }
};
