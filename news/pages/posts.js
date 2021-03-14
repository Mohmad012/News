import React from 'react';
import styles from '../styles/Posts.module.css';

const Posts = ({logoPost , titlePost , infoPost , datePost , keywordsOfPosts}) => {
	return(
        <div className={styles.center}>
          <div className={styles.BoxNews}>
            <div className={styles.HeadPost}>
              <img src={logoPost} width="30" height="50" alt="" />
              <h4>{titlePost}</h4>
              <i className="fa fa-rss fa-2x fa-fw text-success"></i>
            </div>
            <div className={styles.BodyPost}>{infoPost}</div>
            <p className={styles.DatePost}>TUESDAY, 23 FEBRUARY {datePost} </p>
            <hr className="m-0 mb-2"/>
            <span className={styles.keywordPost + "keywordPost badge rounded-pill bg-white text-success border border-success mb-n5 me-1 mt-1"}>{keywordsOfPosts ? keywordsOfPosts : null}</span>
          </div>
        </div>
	);
};

export default Posts