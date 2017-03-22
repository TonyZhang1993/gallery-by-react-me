require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//获取图片年相关地数据
var imageDatas = require('../data/imageDatas.json');

//let yeomanImage = require('../images/yeoman.png');

//利用自执行函数，将图片名信息转为图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr){
	for(var i=0,len=imageDatasArr.length; i<len ;i++){
		var singleImageData = imageDatasArr[i];

		singleImageData.imageURL=require('../images'+singleImageData.fileName);

		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;

})(imageDatas);

//imageDatas = genImageURL(imageDatas);//文件名转换为文件路径

class AppComponent extends React.Component {
  render() {
    return (
/*      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <span>I miss you very much!really!</span>
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>*/
      <section className="stage">
      		<section className="img-sec">
      		</section>
      		<nav className='controller-nav'>
      		</nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;