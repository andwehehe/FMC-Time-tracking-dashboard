
import { useState, useEffect } from 'react';
import styles from './Category.module.css';
import data from '/src/assets/data/data.json';
import workIcon from '/src/assets/images/icon-work.svg';
import playIcon from '/src/assets/images/icon-play.svg';
import studyIcon from '/src/assets/images/icon-study.svg';
import exerciseIcon from '/src/assets/images/icon-exercise.svg';
import socialIcon from '/src/assets/images/icon-social.svg';
import selfCareIcon from '/src/assets/images/icon-self-care.svg';
import dottedMenu from '/src/assets/images/icon-ellipsis.svg';

function Category({ selectedTimeframe }) {

const categories = {
  work: {
    color: "hsl(15, 100%, 70%)",
    icon: workIcon,
    iconPosition: "60%",
    iconPosDesktop: "70%"
  },
  play: {
    color: "hsl(195, 74%, 62%)",
    icon: playIcon,
    iconPosition: "60%",
    iconPosDesktop: "70%"
  },
  study: {
    color: "hsl(348, 100%, 68%)",
    icon: studyIcon,
    iconPosition: "60%",
    iconPosDesktop: "70%"
  },
  exercise: {
    color: "hsl(145, 58%, 55%)",
    icon: exerciseIcon,
    iconPosition: "70%",
    iconPosDesktop: "78%"
  },
  social: {
    color: "hsl(264, 64%, 52%)",
    icon: socialIcon,
    iconPosition: "50%",
    iconPosDesktop: "63%"
  },
  selfcare: {
    color: "hsl(43, 84%, 65%)",
    icon: selfCareIcon,
    iconPosition: "65%",
    iconPosDesktop: "73%"
  }
};

const [isDesktop, setIsDesktop] = useState(false);

useEffect(() => {
  const desktopScreen = window.matchMedia("(min-width: 832px)");

  const updateSize = (e) => {
    setIsDesktop(e.matches); 
  }

  // eslint-disable-next-line react-hooks/set-state-in-effect
  setIsDesktop(desktopScreen.matches);

  desktopScreen.addEventListener('change', updateSize);

  return () => desktopScreen.removeEventListener('change', updateSize);
}, [])

  return(

      <section className={styles.cardsContainer}>

        {data.map((item) => {
          const { title, timeframes } = item;
          const key = title.toLowerCase().replace(/\s/g, "");
          const customStyles = categories[key];

          let currTime, prevTime, timeUnit;

          switch(selectedTimeframe) {
            case "daily":
              currTime = timeframes.daily.current;
              prevTime = timeframes.daily.previous;
              timeUnit = "Yesterday - ";
              break;
            case "weekly":
              currTime = timeframes.weekly.current;
              prevTime = timeframes.weekly.previous;
              timeUnit = "Last Week - ";
              break;
            case "monthly":
              currTime = timeframes.monthly.current;
              prevTime = timeframes.monthly.previous;
              timeUnit = "Last Month - ";
              break;
          }

          const iconPos = isDesktop ? customStyles.iconPosDesktop : customStyles.iconPosition;

          return(

            <article 
              className={styles.statsCard} 
              key={key} 
              style={{ backgroundColor: customStyles.color }}>

              <img 
                className={styles.categoryIcon} 
                src={customStyles.icon} 
                alt="category icon"
                style={{ bottom: iconPos }} />
              
              <div className={styles.statsContainer}>
                <div className={styles.prevStats}>
                  <p className={styles.category}>{title}</p>
                  <img src={dottedMenu} alt="3 dots menu" />
                </div>

                <div className={styles.currentStats}>
                  <p className={styles.currentTime}>{currTime + "hrs"}</p>
                  <p className={styles.prevTime}>{timeUnit + prevTime + "hrs"}</p>
                </div>
              </div>
            
            </article>
          );
        })}

      </section>
    
  );
}

export default Category