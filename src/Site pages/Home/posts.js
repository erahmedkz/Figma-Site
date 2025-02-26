import React from 'react';
import styles from '../../styles/Posts.module.css';

function Posts() {
  return (
    <div className={styles.postsSection}>
      <div className={styles.container}>
        <div className={styles.postsHeader}>
          <h2 className={styles.featuredTitle}>Featured Post</h2>
          <div className={styles.allPostsHeader}>
            <h2>All Posts</h2>
            <a href="#" className={styles.viewAll}>View All</a>
          </div>
        </div>
        <div className={styles.postsContent}>
          <div className={styles.featuredPost}>
            <img src="https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Featured post" className={styles.featuredImage} />
            <div className={styles.featuredContent}>
              <div className={styles.postMeta}>
                By <span className={styles.authorName}>John Doe</span> | May 23, 2022
              </div>
              <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
              <p className={styles.postDescription}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <button className={styles.readMore}>Read More {'>'}</button>
            </div>
          </div>
          <div className={styles.allPosts}>
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className={`${styles.postCard} ${index === 1 ? styles.highlighted : ''}`}>
                <div className={styles.postCardContent}>
                  <div className={styles.postMeta}>
                    By <span className={styles.authorName}>John Doe</span> | Aug 23, 2021
                  </div>
                  <h4 className={styles.postCardTitle}>
                    8 Figma design systems that you can download for free today.
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;