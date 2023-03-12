import React, { state, useState } from 'react';
import './App.css';

export default function App() {
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      author: {
        name: 'Mark Webber',
        img: 'https://raw.githubusercontent.com/JBoundless/noti-page-starter/main/assets/images/avatar-mark-webber.webp',
        href: '#',
      },
      text: 'reacted to your recent post',
      link: {
        text: 'My first tournament today!',
        href: '#',
      },
      time: '1m ago',
      isUnread: true,
    },
    {
      id: '2',
      author: {
        name: 'Angela Gray',
        img: 'https://raw.githubusercontent.com/JBoundless/noti-page-starter/main/assets/images/avatar-angela-gray.webp',
        href: '#',
      },
      text: 'followed you',
      time: '5m ago',
      isUnread: true,
    },
    {
      id: '3',
      author: {
        name: 'Jacob Thompson',
        img: 'https://raw.githubusercontent.com/JBoundless/noti-page-starter/main/assets/images/avatar-jacob-thompson.webp',
        href: '#',
      },
      text: 'has joined your group',
      link: {
        text: 'Chess Club',
        href: '#',
      },
      time: '1m ago',
      isUnread: true,
    },
    {
      id: '4',
      author: {
        name: 'Rizky Hasanuddin',
        img: 'https://raw.githubusercontent.com/JBoundless/noti-page-starter/main/assets/images/avatar-rizky-hasanuddin.webp',
        href: '#',
      },
      text: 'sent you a private message',
      privateMessage:
        'Hello, thanks for setting up the Chess Club. I have been a member for a few weeks now and I am already having lots of fun improving my game.',
      time: '5 days ago',
      isUnread: false,
    },
    {
      id: '5',
      author: {
        name: 'Kimberly Smith',
        img: 'https://raw.githubusercontent.com/JBoundless/noti-page-starter/main/assets/images/avatar-kimberly-smith.webp',
        href: '#',
      },
      text: 'commented on your picture',
      time: '1m ago',
      isUnread: false,
    },
    {
      id: '6',
      author: {
        name: 'Nathan Peterson',
        img: 'https://raw.githubusercontent.com/JBoundless/noti-page-starter/main/assets/images/avatar-nathan-peterson.webp',
        href: '#',
      },
      text: 'reacted to your recent post',
      link: {
        text: '5 end-game strategies to increase your win rate',
        href: '#',
      },
      time: '2 weeks ago',
      isUnread: false,
    },
    {
      id: '7',
      author: {
        name: 'Anna Kim',
        img: '#',
        href: '#',
      },
      text: 'left the group',
      link: {
        text: 'Chess Club',
        href: 'https://raw.githubusercontent.com/JBoundless/noti-page-starter/main/assets/images/avatar-anna-kim.webp',
      },
      time: '2 weeks ago',
      isUnread: false,
    },
  ]);

  function handleNotificationClick(id) {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isUnread: !isUnread } : n))
    );
  }

  function markAllUnread() {
    setNotifications((prev) => prev.map((n) => ({ ...n, isUnread: false })));
  }

  return (
    <div className="App">
      <div>
        <h1>Notifications</h1>
        <span className="badge">
          {notifications.filter((n) => n.isUnread).length}
        </span>
        <button id="mark" onClick={markAllUnread}>
          Mark all as read
        </button>
      </div>
      <div className="container">
        {notifications &&
          notifications.map((n) => (
            <div key={n.id} onClick={() => handleNotificationClick(n.id)}>
              <img src={n.author.img} alt={n.author.name} />
              <div>
                <a href={n.author.href}>{n.author.name}</a>
                <p>{n.text}</p>
                {n.link && <a href={n.link.href}>{n.link.text}</a>}
                <span class={n.isUnread && 'isUnread'}></span>
              </div>
              <p className="time">{n.time}</p>
              {n.privateMessage && <p className="time">{n.privateMessage}</p>}
              {n.image && (
                <a href={n.image.href}>
                  <img src={n.image.src} />
                </a>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
