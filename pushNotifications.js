// pushNotifications.js
import PushNotification from "react-native-push-notification";

export const configureNotifications = () => {
  PushNotification.configure({
    onNotification: function (notification) {
      console.log("Notification:", notification);
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
  });
};

export const scheduleNotification = (title, message, date) => {
  PushNotification.localNotificationSchedule({
    title,
    message,
    date,
  });
};
