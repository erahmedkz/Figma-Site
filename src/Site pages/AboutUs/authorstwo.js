import React from 'react';
import Person1 from '../../photo/person1.png';
import Person2 from '../../photo/person2.png';
import Person3 from '../../photo/person3.png';
import Person4 from '../../photo/person4.png';
import Person5 from '../../photo/person5.png';
import Person6 from '../../photo/person6.png';
import Person7 from '../../photo/person7.png';
import Person8 from '../../photo/person8.png';
import FacebookIcon from '../../photo/facebook.png';
import TwitterIcon from '../../photo/twitter.png';
import InstagramIcon from '../../photo/instagram.png';
import LinkedInIcon from '../../photo/linkendin.png';

const Authors2 = () => {
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
    {
      name: 'Guy Hawkins',
      title: 'Content Writer @Company',
      image: Person5,
    },
    {
      name: 'Eleanor Pena',
      title: 'Content Writer @Company',
      image: Person6,
    },
    {
      name: 'Robert Fox',
      title: 'Content Writer @Company',
      image: Person7,
    },
    {
      name: 'Jacob Jones',
      title: 'Content Writer @Company',
      image: Person8,
    },
  ];

  return (
    <div className="authors2Container">
      <h2 className="authors2Heading">List of Authors</h2>
      <div className="authors2List">
        {authorData.map((author, index) => (
          <div
            key={index}
            className={`authors2Card ${author.isDianne ? 'dianneAuthors2Card' : ''}`}
          >
            <img
              src={author.image}
              alt={author.name}
              className="authors2Image"
            />
            <h3 className="authors2Name">{author.name}</h3>
            <p className="authors2Title">{author.title}</p>
            <div className="authors2SocialIcons">
              <img
                src={FacebookIcon}
                alt="Facebook"
                className="authors2SocialIcon"
              />
              <img src={TwitterIcon} alt="Twitter" className="authors2SocialIcon" />
              <img
                src={InstagramIcon}
                alt="Instagram"
                className="authors2SocialIcon"
              />
              <img src={LinkedInIcon} alt="LinkedIn" className="authors2SocialIcon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Authors2;