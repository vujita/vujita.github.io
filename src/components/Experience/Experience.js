/**
 * Created by vuthasone on 8/18/2016.
 */
import React from 'react';
import style from './experience.scss';

// This is a lazy link to my resume, I will put something here later
const Experience = () => (
  <div className={style.resumeHolder}>
    <iframe
      src="https://docs.google.com/document/d/1wi_jS92Ql6siWsdqD8mYatC6jzX0zY__U4wcwucUs0A/pub?embedded=true"
    />
  </div>
);
export default Experience;
