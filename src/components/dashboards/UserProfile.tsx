import Image from "next/image";
import style from "./UserProfile.module.css";

export default function UserProfile() {
    return (
        <div className={style.wrapper}>
            <Image src="/icons/user-profile-photo.png" alt="User Profile Photo" width={48} height={48} preload className={style.pp} />
            <div className={style.info}>
                <p className={`text-16-500-131 ${style.name}`}>Hanna Calzoni</p>
                <p className={`text-14-400-130 ${style.email}`}>hannacalzoni@gmail.com</p>
            </div>
        </div>
    );
}