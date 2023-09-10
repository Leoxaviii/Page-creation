const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        function updateClock() {
            const currentDate = new Date();
            const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
            const utcTime = currentDate.getTime(); // Get time in milliseconds

            document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `${dayOfWeek}`;
            document.querySelector('[data-testid="currentUTCTime"]').textContent = `${utcTime}`;
  }
        setInterval(updateClock, 1000);
        updateClock();

