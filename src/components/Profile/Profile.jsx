import s from './Profile.module.css'

const Profile = ({ name, tag, location, image, stats: { followers, views, likes } }) => {
    return (
        <div className={s.wrapper}>
            <div>
                <img src={image} alt="" className={s.avatar} />
                <p className={s.name}>{name}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>

            <ul className={s.list}>
                <li><span>Followers </span><span>{followers}</span></li>
                <li><span>Views </span><span>{views }</span></li>
                <li><span>Likes </span><span>{ likes}</span></li>
            </ul>
        </div>
    )
}

export default Profile;