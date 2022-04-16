import Link from "next/link";
import Image from "next/image";

import styles from "./card.module.css";

const Card = ({name, imgUrl, href}) => {
    return (
        <div>
            <Link href={href}>
                <a className={styles.cardLink}>
                    <div className={styles.container}>
                        <div className={styles.cardHeaderWrapper}>
                            <h2 className={styles.cardHeader}>{name}</h2>
                        </div>
                        <div className={styles.cardImageWrapper}>
                            <Image src={imgUrl} width={260} height={160} alt='Coffe_image' className={styles.cardImage}  />
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
}

export default Card;