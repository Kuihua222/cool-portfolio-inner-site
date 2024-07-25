import React from 'react';

import girlRun from '../../../assets/pictures/projects/art/girl-run.gif';
import gsts from '../../../assets/pictures/projects/art/gsts.png';

export interface ArtProjectsProps {}

const ArtProjects: React.FC<ArtProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Art & Design</h1>
            <h3>■■■■■■■■■■</h3>
            <br />
            <div className="text-block">
                <p>
                    ■■■■■■■■■■■■■■■■■■■■■■■■■■■, Art,
                    ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■.
                </p>
                <br />
                <p>
                    ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■. 
                    ■■■■■■■■■■■■■■■■■■■■■■■■■■■.
                </p>
            </div>
            <div className="text-block">
                <h2>■■■■■■■■■■■■■■■■</h2>
                <br />
                <p>
                    ■■■■■■■■■■■■■■■■■■,■■■■■■■■■■■■■■■■■■■■■■■■■■■
                    ■■■■■■■■■■■■■■■■■■,■■■■■■■■■■■■■■■■■■■. 
                    ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■, 
                    ■■■■■■■■■■■■■■■■■■■■■■■■■.
                </p>
                <br />
                
                {/* 第一张图片 */}
                <div className="captioned-image">
                    <img src={girlRun} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> ■■■■■■■■■■■■■■■■■■■■■■■■■
                        </sub>
                    </p>
                </div>

                {/* 第二张图片 */}
                <div className="captioned-image">
                    <img src={girlRun} alt="" />
                    <p>
                        <sub>
                            <b>Figure 2:</b> ■■■■■■■■■■■■■■■■■■■■■■■■■.
                        </sub>
                    </p>
                </div>

                {/* 第三张图片 */}
                <div className="captioned-image">
                    <img src={girlRun} alt="" />
                    <p>
                        <sub>
                            <b>Figure 3:</b> ■■■■■■■■■■■■■■■■■■■■■■■■■.
                        </sub>
                    </p>
                </div>

                {/* 第四张图片 */}
                <div className="captioned-image">
                    <img src={girlRun} alt="" />
                    <p>
                        <sub>
                            <b>Figure 4:</b> ■■■■■■■■■■■■■■■■■■■■■■■■■.
                        </sub>
                    </p>
                </div>

                {/* 继续添加更多图片 */}
                
                {/* 例如：第五张图片 */}
                <div className="captioned-image">
                    <img src={girlRun} alt="" />
                    <p>
                        <sub>
                            <b>Figure 5:</b> ■■■■■■■■■■■■■■■■■■■■■■■■■.
                        </sub>
                    </p>
                </div>
                <p>
                    ■■■■■■■■■■■■■■■■■■,■■■■■■■■■■■■■■■■■■■■■■■■■■■
                    ■■■■■■■■■■■■■■■■■■,■■■■■■■■■■■■■■■■■■■. 
                    ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■, 
                    ■■■■■■■■■■■■■■■■■■■■■■■■■.
                </p>
                <br />
                <h3>■■■■■■■■■■</h3>
                <br />
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://■■■■■■■■■■"
                        >
                            <p>
                                <b>■■■■■■■■■■</b> - ■■■■■■■■■■■■■■■■■■■■
                                ■■■■■
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://■■■■■■■■■■■■■■■"
                        >
                            <p>
                                <b>■■■■■</b> - ■■■■■
                                Time-lapse
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://■■■■■■■■■■■■■■■■■■■■"
                        >
                            <p>
                                <b>■■■■■</b> - ■■■■■■■■■■■■■■■■■■■■■■■■■
                                ■■■■■■■■■■
                            </p>
                        </a>
                    </li>
                </ul>
                <br />
                <div className="captioned-image">
                    <img src={gsts} alt="" />
                    <p>
                        <sub>
                            <b>Figure 2:</b> ■■■■■■■■■■■■■■■■■■■■■■■■■
                            ■■■■■■■■■■■■■■■■■■■■■■■■■
                        </sub>
                    </p>
                </div>
                <br />
                <p>
                    ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■. ■■■■■■■■■■■
                    ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■. ■■■■■■■■■■■■■■■■■■■■■■■
                    ■■■■■■■■■■■■■■■■■!
                </p>
                {/* <h3> Screen record time-lapses and make gifs</h3> */}
            </div>
        </div>
    );
};

export default ArtProjects;
