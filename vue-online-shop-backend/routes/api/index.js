const express = require('express');
const router = express.Router();
const productController = require('././controllers/product');
const manufacturerController = require('././controllers/manufacturer');
const { router } = require('../../app');

// 获取所有的制造商(manufacturers)
router.get('/manufacturers', manufacturerController.all);
// 获取单个制造商 :id代表动态路由、用于匹配任意字符串 '/manufacturers/<any-string>'
router.get('/manufacturers/:id', manufacturerController.byId);
// 用户创建单个制造商
