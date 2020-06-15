import React from 'react';

import DateCountdown from 'react-date-countdown-timer';

const CountDownComponent = () => {
    return (
			<DateCountdown
				dateTo='June 18, 2020 00:00:00 GMT-05:00'
				locales={[]}
				locales_plural={[]}
				mostSignificantFigure="hour"
				numberOfFigures={3}
				callback={()=>alert('Hello')} 
			/>
    )
}

export default CountDownComponent;
