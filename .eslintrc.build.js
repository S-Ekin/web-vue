/**
 * @author: SEKin 
 * @Date: 2020-07-21 16:11:30 
 * @description: 专门用于打包时用babel来解析 
 * @Last Modified time: 2020-07-21 16:11:30 
 */

module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: "babel-eslint",
  plugins: ["vue"],
  extends: ["plugin:vue/recommended", "eslint:recommended"],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
};