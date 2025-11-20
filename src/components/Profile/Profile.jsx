
import profilePic from '/src/assets/images/image-jeremy.png';
import styles from './Profile.module.css'

function Profile({ selectedTimeframe, setSelectedTimeframe }) {

  const handleChange = (e) => {
    setSelectedTimeframe(e.target.value);
  }

  return(
    <article className={styles.profileCard}>

      <div className={styles.userInfo}>
        <img src={profilePic} alt="Profile pic" className={styles.profilePic} />
        <p className={styles.username}>
          Report for <br /> <span>Jeremy Robson</span>
        </p>
      </div>

      <nav className={styles.navbar}>
        <ul className={styles.navList}>

          <li className={styles.navDaily}>
            <label className={styles.labelDaily}>
              Daily
              <input 
                type="radio" 
                name="time-filter" 
                value="daily"
                checked={selectedTimeframe === "daily"}
                onChange={handleChange}/>
            </label>
          </li>

          <li className={styles.navWeekly}>
            <label className={styles.labelWeekly}>
              Weekly
              <input 
                type="radio" 
                name="time-filter" 
                value="weekly"
                checked={selectedTimeframe === "weekly"}
                onChange={handleChange}/>
            </label>
          </li>

          <li className={styles.navMonthly}>
            <label className={styles.labelMonthly}>
              Monthly
              <input 
                type="radio" 
                name="time-filter"
                value="monthly" 
                checked={selectedTimeframe === "monhtly"}
                onChange={handleChange}/>
            </label>
          </li>

          
        </ul>
      </nav>
    </article>
  );
}

export default Profile