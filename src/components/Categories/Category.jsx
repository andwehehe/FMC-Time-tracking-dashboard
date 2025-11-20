
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

  const categoryColors = [
    "hsl(15, 100%, 70%)",
    "hsl(195, 74%, 62%)",
    "hsl(348, 100%, 68%)",
    "hsl(145, 58%, 55%)",
    "hsl(264, 64%, 52%)",
    "hsl(43, 84%, 65%)"
  ];

  const categoryIcons = [
    workIcon,
    playIcon,
    studyIcon,
    exerciseIcon,
    socialIcon,
    selfCareIcon
  ];

  const iconPosition = ["60%", "60%", "60%", "70%", "50%", "65%"];

  return(

      <section className={styles.cardsContainer}>

        {data.map((item, index) => {
          const { title, timeframes } = item;

          let currTime;
          let prevTime;
          let timeUnit;

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

          return(
            <article className={styles.statsCard} key={title} style={{ backgroundColor: categoryColors[index] }}>

              <img 
                className={styles.categoryIcon} 
                src={categoryIcons[index]} 
                alt="category icon"
                style={{ bottom: iconPosition[index] }} />
              
              <div className={styles.statsContainer}>
                <div className={styles.currentStats}>
                  <p className={styles.category}>{title}</p>
                  <p className={styles.currentTime}>{currTime + "hrs"}</p>
                </div>

                <div className={styles.prevStats}>
                  <img src={dottedMenu} alt="3 dots menu" />
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