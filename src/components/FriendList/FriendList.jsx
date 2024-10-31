import s from "./FriendList.module.css";
import clsx from "clsx";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <img src={friend.avatar} alt="Avatar" width="48" />
            <p className={s.text}>{friend.name}</p>
            <p className={clsx(friend.isOnline ? s.isOnline : s.isOffline)}>
              {friend.isOnline ? "Online" : "Offline"}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
