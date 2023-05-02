import React from 'react';
import TweenComponent from '../components/TweenComponent';

const Intro = () => {

  return (
    <>
      <div className="top-intro">
        <div className="inner">
          <TweenComponent></TweenComponent>
        </div>
      </div>
      <div className="work">
        <div className="inner">
          <h2>WORK</h2>     
          <div className="project__list">                   
            <ul>
              <li>
                <h3>project01</h3>
                <span className="coner-decoration"></span>
                <span className="coner-decoration"></span>
                <div className="project__info">
                  <div className="img__wrap">
                    <figure 
                    style={{
                      //backgroundImage: `url(${require("../images/img-project-portfolio.png")})`,
                      backgroundSize: `cover`
                    }}
                    />
                    <div className="btn__wrap">
                      <a href="http://kimji9663.netlify.com/">
                        <span className="res">Responsive</span>
                      </a>
                    </div>
                  </div>
                  <div className="text__wrap">
                    <p className="project__year">2020</p>
                    <p className="project__title">Portfolio&amp;Blog</p>
                    <p className="addr__repo">
                      <a href="https://github.com/kimji9663/my-blog" target="_blank" rel = "noopener noreferrer">Repository</a>
                    </p>
                    <p className="tag__language">
                      <span className="html">HTML5</span>
                      <span className="sass">SASS</span>
                      <span className="javascript">javascript</span>
                      <span className="none">React</span>
                      <span className="none">Gatsby</span>
                    </p>
                    <p className="project__ctrb">Publishing 100%</p>
                    <p className="project__info">React기반의 정적 페이지 생성 프레임워크 Gatsby를 이용하여 제작한 SPA.</p>
                  </div>
                </div>
              </li>
              <li>
                  <h3>project02</h3>
                  <span className="coner-decoration"></span>
                  <span className="coner-decoration"></span>
                  <div className="project__info">
                    <div className="img__wrap">
                      <figure 
                      style={{
                        //backgroundImage: `url(${require("../images/img-project-emh.png")})`,
                        backgroundSize: `cover`
                      }}
                      />
                      <div className="btn__wrap">
                        <a href="http://www.emhsystem.com/" target="_blank" rel = "noopener noreferrer">
                          <span className="res">Responsive</span>
                        </a>
                      </div>
                    </div>
                    <div className="text__wrap">
                      <p className="project__year">2019</p>
                      <p className="project__title">EMH system</p>
                      <p className="tag__language">
                        <span className="html">HTML5</span>
                        <span className="css">CSS3</span>
                        <span className="javascript">jQuery</span>
                      </p>
                      <p className="project__ctrb">Publishing 80%</p>
                      <p className="project__info">반응형으로 구현된 자사 솔루션 소개 페이지. <br /> 메인의 레이아웃과 상단 슬라이드를 제외한 모든 페이지 구현.</p>
                    </div>
                  </div>
              </li>
              <li>
                <h3>project03</h3>
                <span className="coner-decoration"></span>
                <span className="coner-decoration"></span>
                <div className="project__info">
                  <div className="img__wrap">
                    <figure 
                    style={{
                      //backgroundImage: `url(${require("../images/img-project-YIC.png")})`,
                      backgroundSize: `cover`
                    }}
                    />
                    <div className="btn__wrap">
                      <a href="http://www.yic.co.kr/" target="_blank" rel = "noopener noreferrer">
                        <span className="res">Responsive</span>
                      </a>
                    </div>
                  </div>
                  <div className="text__wrap">
                    <p className="project__year">2019</p>
                    <p className="project__title">YICcompany</p>
                    <p className="tag__language">
                      <span className="html">HTML5</span>
                      <span className="css">CSS3</span>
                      <span className="javascript">jQuery</span>
                      <span className="none">Wordpress</span>
                      <span className="none">Bootstrap</span>
                    </p>
                    <p className="project__ctrb">Publishing 100%</p>
                    <p className="project__info">반응형으로 구현된 자사 홈페이지.</p>
                  </div>
                </div>
              </li>
              <li>
                <h3>project04</h3>
                <span className="coner-decoration"></span>
                <span className="coner-decoration"></span>
                <div className="project__info">
                  <div className="img__wrap">
                    <figure 
                    style={{
                      //backgroundImage: `url(${require("../images/img-project-eround.png")})`,
                      backgroundSize: `cover`
                    }}
                    />
                    <div className="btn__wrap">
                      <a href="https://www.eroundmall.com/" target="_blank" rel = "noopener noreferrer">
                        <span className="pc_m">PC / Mobile</span>
                      </a>
                    </div>
                  </div>
                  <div className="text__wrap">
                    <p className="project__year">2018</p>
                    <p className="project__title">eroundmall</p>
                    <p className="tag__language">
                      <span className="html">HTML5</span>
                      <span className="css">CSS3</span>
                      <span className="javascript">jQuery</span>
                    </p>
                    <p className="project__ctrb">Publishing 50%</p>
                    <p className="project__info">적응형으로 구현된 다국어 지원 해외직구 쇼핑몰. <br /> 서브 코더로 기여. <br /> 상세 기여도 : PC 30% / 모바일 70%</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro