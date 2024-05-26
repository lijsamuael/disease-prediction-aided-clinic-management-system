import React, { useState } from "react";
import { AiOutlineBell, AiFillCloseCircle } from "react-icons/ai";

function Notifications() {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationsProp = [
    {
      id: 1,
      message: "New appointment scheduled for tomorrow",
      timestamp: "3 hours ago",
    },
    {
      id: 2,
      message: "Reminder: Flu shot clinic next week",
      timestamp: "Yesterday at 10:30 AM",
    },
    {
      id: 3,
      message: "Hospital-wide network outage on Friday",
      timestamp: "2 days ago",
    },
  ];
  const [notifications, setNotifications] = useState( notificationsProp );
  // const [count, setCount] = useState( notificationsProp.length || 0);

  const removeNotification = (id) => {
    const updatedNotifications = notifications.filter((e) => e.id !== id);
    setNotifications(updatedNotifications);
    // console.log(notifications)
  }

  return (
    <div className="relative">
      <button
        className="flex flex-col items-center  p-2 rounded-full text-white-500 hover:text-white-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => setShowNotifications(!showNotifications)}
      ><AiOutlineBell className="h-8 w-8" aria-hidden="true" />
        {/* <p>notifications&nbsp;&nbsp;</p>  */}
        
        
        {notifications.length > 0 && (
          <span className="  inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{notifications.length}</span>
          // <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">{notifications.length}</span>
        )}
      </button>

      {showNotifications && (
        <div className="origin-top-right absolute right-[-147px] md:right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {notifications.map((notification) => (<p className={`flex items-center justify-between py-2 transform-gpu transition-opacity duration-700
          }`}
          style={{ maxWidth: "400px" }}>
              <div key={notification.id} className="px-4 py-2 transition duration-700 ease-in-out">
                <p className="text-sm font-medium text-gray-900">{notification.message}</p>
                <p className="text-xs text-gray-500">{notification.timestamp}</p> 
                <hr/> 
              </div>
              <button className='text-red-500 hover:text-red-700 h-1/2 ' onClick={() => removeNotification(notification.id)}><AiFillCloseCircle /></button>
            </p>))
            
            }
          </div>
        </div>
       )}
    </div>
  );
}

export default Notifications;