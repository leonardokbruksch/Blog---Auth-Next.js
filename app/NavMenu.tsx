import Link from 'next/link';
import styles from './NavMenu.module.css';
import Image from 'next/image';
import { SingInButton, SingOutButton } from '@/components/buttons';
import AuthCheck from '@/components/AuthCheck';

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href={'/'}>
        <Image
          src="/logo.svg"
          width={216}
          height={30}
          alt="NextSpace Logo"
        />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link className={styles.linkText} href={'/about'}>About</Link>
        </li>
        <li>
          <Link className={styles.linkText} href={'/blog'}>Blog</Link>
        </li>
        <li>
          <Link className={styles.linkText} href={'/users'}>Users</Link>
        </li>
        <li>
          <SingInButton />
        </li>
        <li>
          <AuthCheck>
            <SingOutButton />
          </AuthCheck>
        </li>
      </ul>
    </nav>
  );
}