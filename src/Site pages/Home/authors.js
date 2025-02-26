import React from 'react';
import Person1 from '../../photo/person1.png';
import Person2 from '../../photo/person2.png';
import Person3 from '../../photo/person3.png';
import Person4 from '../../photo/person4.png';
import FacebookIcon from '../../photo/facebook.png';
import TwitterIcon from '../../photo/twitter.png';
import InstagramIcon from '../../photo/instagram.png';
import LinkedInIcon from '../../photo/linkendin.png';

const Authors = () => {
  const authorData = [
    {
      name: 'Floyd Miles',
      title: 'Content Writer @Company',
      image: Person1,
    },
    {
      name: 'Dianne Russell',
      title: 'Content Writer @Company',
      image: Person2,
      isDianne: true, 
    },
    {
      name: 'Jenny Wilson',
      title: 'Content Writer @Company',
      image: Person3,
    },
    {
      name: 'Leslie Alexander',
      title: 'Content Writer @Company',
      image: Person4,
    },
  ];

  return (
    <div className="authorContainer">
      <h2 className="authorHeading">List of Authors</h2>
      <div className="authorList">
        {authorData.map((author, index) => (
          <div
            key={index}
            className={`authorCard ${author.isDianne ? 'dianneAuthorCard' : ''}`}
          >
            <img
              src={author.image}
              alt={author.name}
              className="authorImage"
            />
            <h3 className="authorName">{author.name}</h3>
            <p className="authorTitle">{author.title}</p>
            <div className="socialIcons">
              <img
                src={FacebookIcon}
                alt="Facebook"
                className="socialIcon"
              />
              <img src={TwitterIcon} alt="Twitter" className="socialIcon" />
              <img
                src={InstagramIcon}
                alt="Instagram"
                className="socialIcon"
              />
              <img src={LinkedInIcon} alt="LinkedIn" className="socialIcon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Authors;