import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (                                                                              
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Kui Hua</h3>
            <br />                                                                              
            <div className="text-block">
                <p> 
                    I consider myself an amateur artist. 
                    I don't like preaching or expressing much; 
                    I just create content that interests me for my own satisfaction. 
                </p>                                                                              
                <br />                                                                              
                <p>   
                    
                    Thank you for taking the time to check out my portfolio.
                    If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:kuihua2222@gmail.com">
                        kuihua2222@gmail.com
                        
                    </a>                                                                              
                </p>                                                                              
            </div>                                                                              
            <ResumeDownload />                                                                              
            <div className="text-block">
                <h3>About Me</h3>
                <br />                                                                              
                <p>                                                                              
                    这里还在编。别急
                </p>                          
                <br />                          
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>                          
                        <sub>                          
                            <b>Figure 1:</b> A real photo of me developing this
                            website :)
                        </sub>                          
                    </p>                          
                </div>                          

                <p>                          
                   这里也还在编。,{' '}
                    <a    
                        rel="noreferrer"    
                        target="_blank"    
                        href="https://arts.201422024.xyz"
                    >
                        我的网站arts
                    </a>
                    . 跳转至software{' '}
                    <Link to="/projects/software">Software Projects</Link> page.
                </p>
                <br />
                <p>
                   这也还没东西！！
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>Introduction</h3>
                        <br />
                        <p>
                            跳转{' '}
                            <Link to="/projects/music">Music Production</Link>{' '}
                            and creating{' '}
                            <Link to="/projects/art">Digital Art</Link>.
                            跳转也没改。
                        </p>
                        <br />
                        <p>
                            没写.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, April 2022
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    If you find the easter egg make sure to let me know
                    on twitter{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://twitter.com/WEIJunben"
                    >
                        @WEIJunben
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    邮件。 You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:kuihua2222@gmail.com">
                        kuihua2222@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
