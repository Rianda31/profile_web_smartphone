import { useState, useEffect } from 'react';

interface DateTime {
  time: string;
  date: string;
  dayOfWeek: string;
}

export const useDateTime = (): DateTime => {
  const [dateTime, setDateTime] = useState<DateTime>(() => {
    const now = new Date();
    return {
      time: now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }),
      date: now.toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric' 
      }),
      dayOfWeek: now.toLocaleDateString('en-US', { 
        weekday: 'long' 
      })
    };
  });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setDateTime({
        time: now.toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: false 
        }),
        date: now.toLocaleDateString('en-US', { 
          month: 'long', 
          day: 'numeric' 
        }),
        dayOfWeek: now.toLocaleDateString('en-US', { 
          weekday: 'long' 
        })
      });
    };

    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return dateTime;
};