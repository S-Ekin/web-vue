/**
 * @author: SEKin 
 * @Date: 2020-07-20 15:45:06 
 * @description:  
 * @Last Modified time: 2020-07-20 15:45:06 
 */

const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const plugins = [
	autoprefixer(),
	cssnano({
		preset: ['default', {
			/* discardUnused:[
				{fontFace:true},
				{keyframes:false},
				{namespace:false},
				{counterStyle:false},
			] */
		}],
		reduceIdents: false,
		zindex: false, // 防止编译时z-index 被改变

	}),
];

module.exports = ({ file, options, env }) => {
   /* env=="development" && plugins.push(cssnano({
				//preset: 'default',
				reduceIdents: false 
	})); */
	return {
		ident: 'postcss',
		plugins: plugins,
	};
};
