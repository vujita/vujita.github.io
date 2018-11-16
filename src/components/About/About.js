/**
 * Created by vnguyen on 8/9/16.
 */
import React from 'react';
import style from './about.scss';
import fatNinjaPic from '../../images/fat-ninja.svg';

const greeting = 'Hello, I am Vu';
const whereImfrom = '';
const About = () => (
  <div>
    <h1 className={style.greeting}>{greeting}</h1>
    <div className={style.whatAmI}>
      <p>
        I am a code...
        <img alt="" src={fatNinjaPic} className={style.ninjaPic} />
        for <span className={style.money}>hire</span>
      </p>
      <p>
        My weapons of choice HTML, CSS, and JavaScript
      </p>
      <p>
        I have also been known to assault Java and .NET backends
      </p>
    </div>
    <div className={style.whereIamFrom}>
      <p>
        {whereImfrom}
      </p>
    </div>
  </div>
);
About.propTypes = {};
export default About;
