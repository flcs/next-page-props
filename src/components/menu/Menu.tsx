import React from 'react';
import Link from 'next/link';
import styles from './Menu.module.scss';

interface Props {
    activeItem?: 'home' | 'page1' | 'page2';
}

function Menu(props: Props) {
    return (
        <nav className={styles.menu}>
            <Link href="/">
                <div
                    className={
                        props.activeItem === 'home' ? `${styles.active}` : ''
                    }
                >
                    Home
                </div>
            </Link>
            <Link href="/page1">
                <div
                    className={
                        props.activeItem === 'page1' ? `${styles.active}` : ''
                    }
                >
                    Page 1
                </div>
            </Link>
            <Link href="/page2">
                <div
                    className={
                        props.activeItem === 'page2' ? `${styles.active}` : ''
                    }
                >
                    Page 2
                </div>
            </Link>
        </nav>
    );
}

export { Menu };
