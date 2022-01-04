/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {Fragment} from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 768 })
    return isDesktop ? children : null
  }
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}

const TweenComponent = () => {
    return (
        <Fragment>
            <div className="section--before"></div>
            <div id="intro__trigger--scroll" className="trigger"></div>
            <Desktop>
                <Controller>
                    <Scene 
                    triggerElement="#intro__trigger--scroll"
                    duration={600}
                    >
                        {(progress) => (
                            <Tween
                            from={{
                            css: {opacity: '0'},
                            ease: 'linear'}
                            }
                            to={{
                            css: {opacity: '1'},
                            ease: 'linear'}
                            }
                            totalProgress={progress}
                            paused
                            >
                                <div className="bg--scroll-change"></div>
                            </Tween>
                        )}
                    </Scene>
                    <Scene
                    triggerElement="#intro__trigger--scroll"
                    duration={300}
                    >
                        {(progress) => (
                            <Tween
                            from={{
                            css: {top: '0', opacity: '1'},
                            ease: 'linear'}
                            }
                            to={{
                            css: {top: '60vh',opacity: '0'},
                            ease: 'linear'}
                            }
                            totalProgress={progress}
                            paused
                            >
                                <div id="bg--shape01">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 970">
                                            <g>
                                            <title>Shape 1</title>
                                            <path id="svg_1" stroke="#56b9ff" stroke-width="1.5" stroke-opacity="0" fill="#56b9ff" d="m39,148.45313c23,-124 145,-126 227,-63c82,63 205,121 323,135c118,14 235,7 333,-97c98,-104 250,-144 307,-76c57,68 -7,172 -29,228c-22,56 -40,130 -18,255c22,125 73,189 75,272c2,83 -51,126 -105,139c-54,13 -170,-9 -252,-51c-82,-42 -164,-130 -258,-211c-94,-81 -336,-135 -445,-193c-109,-58 -181,-214 -158,-338z"/>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </Tween>
                        )}
                    </Scene>
                    <Scene
                    triggerElement="#intro__trigger--scroll"
                    duration={400}
                    >
                        {(progress) => (
                            <Tween
                            from={{
                            css: {top: '0', opacity: '1'},
                            ease: 'linear'}
                            }
                            to={{
                            css: {top: '60vh',opacity: '0'},
                            ease: 'linear'}
                            }
                            totalProgress={progress}
                            paused
                            >
                                <div id="bg--shape02">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 970">
                                            <g>
                                            <title>Shape 2</title>
                                            <path id="svg_2" stroke="#0db8f3" stroke-width="1.5" stroke-opacity="0" fill="#0db8f3" d="m117.787834,427.436961c-1.084095,-48.891413 6,-103.138206 44.841734,-132.261603c38.841734,-29.123396 104.441107,-43.243831 194.20867,2.647582c89.767563,45.891413 209.745363,36.183614 208.019064,-22.945707c-1.7263,-59.12932 -65.599373,-211.806521 36.252285,-221.51432c101.851658,-9.707799 201.977016,86.487663 323.681116,185.330706c121.7041,98.843044 170.04048,80.309973 227.008356,150.02962c56.967876,69.719646 6.115434,174.330707 -19.347088,218.866739c-25.462522,44.536032 -126.535126,144.825271 -258.071035,199.93682c-131.535909,55.111549 -288.6819,55.168805 -414.028204,8.762093c-125.346304,-46.406712 -198.566466,-91.587365 -262.355444,-186.533071c-63.788978,-94.945706 -79.125359,-153.427446 -80.209454,-202.318859z"/>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </Tween>
                        )}
                    </Scene>
                    <Scene 
                    triggerElement="#intro__trigger--scroll"
                    duration={600}
                    >
                        {(progress) => (
                            <Tween
                            from={{
                            css: {top: '-45vh', opacity: '1'},
                            ease: 'linear'}
                            }
                            to={{
                            css: {top: '50vh',opacity: '0'},
                            ease: 'linear'}
                            }
                            totalProgress={progress}
                            paused
                            >
                                <div className="main-text">
                                    <div className="main-text--shape">
                                        <h2>
                                            <span>Welcome to<br/> my world!</span>
                                        </h2>
                                    </div>
                                    <div className="main-text--base">
                                        <h2>
                                            <span>Welcome to<br/> my world!</span>
                                        </h2>
                                    </div>
                                </div>
                            </Tween>
                        )}
                    </Scene>
                </Controller>
            </Desktop>
            <Mobile>
                <Controller>
                    <Scene 
                    triggerElement="#trigger"
                    duration={200}
                    >
                        {(progress) => (
                            <Tween
                            from={{
                            css: {opacity: '0'},
                            ease: 'linear'}
                            }
                            to={{
                            css: {opacity: '1'},
                            ease: 'linear'}
                            }
                            totalProgress={progress}
                            paused
                            >
                                <div className="bg--scroll-change"></div>
                            </Tween>
                        )}
                    </Scene>
                    <Scene
                    triggerElement="#trigger"
                    duration={300}
                    >
                        {(progress) => (
                            <Tween
                            from={{
                            css: {top: '0', opacity: '1'},
                            ease: 'linear'}
                            }
                            to={{
                            css: {top: '60vh',opacity: '0'},
                            ease: 'linear'}
                            }
                            totalProgress={progress}
                            paused
                            >
                                <div id="bg--shape01">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 970">
                                            <g>
                                            <title>Shape 1</title>
                                            <path id="svg_1" stroke="#56b9ff" stroke-width="1.5" stroke-opacity="0" fill="#56b9ff" d="m39,148.45313c23,-124 145,-126 227,-63c82,63 205,121 323,135c118,14 235,7 333,-97c98,-104 250,-144 307,-76c57,68 -7,172 -29,228c-22,56 -40,130 -18,255c22,125 73,189 75,272c2,83 -51,126 -105,139c-54,13 -170,-9 -252,-51c-82,-42 -164,-130 -258,-211c-94,-81 -336,-135 -445,-193c-109,-58 -181,-214 -158,-338z"/>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </Tween>
                        )}
                    </Scene>
                    <Scene
                    triggerElement="#trigger"
                    duration={400}
                    >
                        {(progress) => (
                            <Tween
                            from={{
                            css: {top: '0', opacity: '1'},
                            ease: 'linear'}
                            }
                            to={{
                            css: {top: '60vh',opacity: '0'},
                            ease: 'linear'}
                            }
                            totalProgress={progress}
                            paused
                            >
                                <div id="bg--shape02">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 970">
                                            <g>
                                            <title>Shape 2</title>
                                            <path id="svg_2" stroke="#0db8f3" stroke-width="1.5" stroke-opacity="0" fill="#0db8f3" d="m117.787834,427.436961c-1.084095,-48.891413 6,-103.138206 44.841734,-132.261603c38.841734,-29.123396 104.441107,-43.243831 194.20867,2.647582c89.767563,45.891413 209.745363,36.183614 208.019064,-22.945707c-1.7263,-59.12932 -65.599373,-211.806521 36.252285,-221.51432c101.851658,-9.707799 201.977016,86.487663 323.681116,185.330706c121.7041,98.843044 170.04048,80.309973 227.008356,150.02962c56.967876,69.719646 6.115434,174.330707 -19.347088,218.866739c-25.462522,44.536032 -126.535126,144.825271 -258.071035,199.93682c-131.535909,55.111549 -288.6819,55.168805 -414.028204,8.762093c-125.346304,-46.406712 -198.566466,-91.587365 -262.355444,-186.533071c-63.788978,-94.945706 -79.125359,-153.427446 -80.209454,-202.318859z"/>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </Tween>
                        )}
                    </Scene>
                    <Scene 
                    triggerElement="#trigger"
                    duration={300}
                    >
                        {(progress) => (
                            <Tween
                            from={{
                            css: {top: '-42vh', opacity: '1'},
                            ease: 'linear'}
                            }
                            to={{
                            css: {top: '10vh',opacity: '0'},
                            ease: 'linear'}
                            }
                            totalProgress={progress}
                            paused
                            >
                                <div className="main-text">
                                    <div className="main-text--shape">
                                        <h2>
                                            <span>Welcome to<br/> my world!</span>
                                        </h2>
                                    </div>
                                    <div className="main-text--base">
                                        <h2>
                                            <span>Welcome to<br/> my world!</span>
                                        </h2>
                                    </div>
                                </div>
                            </Tween>
                        )}
                    </Scene>
                </Controller>
            </Mobile>
            <div className="section--after"></div>
        </Fragment>
    );
};

export default TweenComponent;