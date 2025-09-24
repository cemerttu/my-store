import React from 'react';
import { useApp } from '../context/AppContext';

const NotificationSystem = () => {
  const { notifications, removeNotification } = useApp();

  if (notifications.length === 0) return null;

  return (
    <div className="notification-container">
      {notifications.map(notification => (
        <div
          key={notification.id}
          className={`notification alert alert-${notification.type} alert-dismissible fade show`}
          role="alert"
        >
          <i className={`fas ${
            notification.type === 'success' ? 'fa-check-circle' :
            notification.type === 'error' ? 'fa-exclamation-circle' :
            'fa-info-circle'
          } me-2`}></i>
          {notification.message}
          <button
            type="button"
            className="btn-close"
            onClick={() => removeNotification(notification.id)}
          ></button>
        </div>
      ))}
    </div>
  );
};

export default NotificationSystem;