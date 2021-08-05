export const ChartRooms= ({styles, chartList}) => {

    return (
      <ul className={styles.charts}>
        {chartList.map((chart) => {
            return  <li className={styles.msg} key={chart}>
                        <p className={styles.author}>{chart.author}</p> 
                        <div className={styles.text}>{chart.text} </div>
                    </li>
        })}
      </ul>
    );
  }