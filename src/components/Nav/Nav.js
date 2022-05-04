import styles from './Nav.module.scss'
import Link from 'next/link'

export default function Nav() {
    return (
        <nav className={styles.nav} aria-label='Menu de navigation principal'>
            <div className="row grid-cols-6">
                <div className="col-span-1">
                    <Link href={'/'} passHref aria-label="Lien vers la page d'accueil">
                        <a className={styles.navLogo}>A.</a>
                    </Link>
                </div>
                <ul className={styles.navLinks}>
                    <li className={`${styles.navLinksItem} ${'anim'}`} aria-label='Lien vers la page des associations "touche - clic"'>
                        <Link href={'/key-click'} passHref>
                            <a>Touche - Clic</a>
                        </Link>
                    </li>
                    <li className={styles.navLinksItem + ' anim'} aria-label='Lien vers la page des boucles de tabulation'>
                        <Link href={'/tab-traps'} passHref>
                            <a>Boucles de tabulation</a>
                        </Link>
                    </li>
                    <li className={styles.navLinksItem + ' anim'} aria-label="Lien vers la page des actualisations d'états">
                        <Link href={'/click-status'} passHref>
                            <a>Actualisation d'états</a>
                        </Link>
                    </li>
                </ul>
                <div className="col-span-1">
                    <Link href={'https://github.com/ntndlcrt/easy-accessibility'} passHref>
                        <a aria-label='Lien vers le repot Git du projet' className={`${styles.navGit} anim ml-auto`} target='_blank'>
                            <span>Git</span>
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}