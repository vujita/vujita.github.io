/**
 * Created by vuthasone on 8/18/2016.
 */
import React from 'react';
import style from './contact.scss';

const Contact = ()=>(
    <div className={style.contactContainer}>
        <div className={style.email}>
            <a href="mailto:shardphoneix@gmail.com">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary">
                </i>
                <i className="fa fa-envelope-o fa-stack-1x fa-inverse">
                </i>
              </span>
                <h4>shardphoneix@gmail.com </h4>
            </a>
        </div>
        <div className={style.phoneNumber}>
            <a href="tel:1-972-836-6318">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-phone fa-stack-1x fa-inverse"></i>
              </span>
                <h4>(972) 836 6318</h4>
            </a>
        </div>
    </div>
);
export default Contact