import Link from 'next/link';
import style from './UserCard.module.css';
import Image from 'next/image';

interface Props {
    id: string;
    name: string | null;
    age: number | null;
    image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {

    return (
        <div className={style.card}>
            <Image
                src={image ?? '/mememan.webp'}
                alt={`${name}'s profile`}
                width={150}
                height={120}
                className={style.cardImage}
            />
            <div className={style.cardContent}>
                <h3>
                    <Link href={`/users/${id}`}>{name}</Link>
                </h3>
                <p>Age: {age}</p>
                <p>ID: {id}</p>
            </div>
        </div>
    )

}