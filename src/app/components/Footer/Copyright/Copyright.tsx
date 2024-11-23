import Image from "next/image"
import styles from "./Copyright.module.scss";

const Copyright: React.FC = () => {
  return (
    <div className={styles["footer-copyright"]}>
      <div className={styles["footer-copyright--policy-group"]}>
        <div className={styles["footer-copyright--policy-group__copyright"]}>
          <p>
            Copyright © 2024 ASICS America Corporation. TODOS LOS DERECHOS
            RESERVADOS. Las fotografías aquí mostradas, el logotipo y la marca
            son propiedad de ASICS America Corporation. Queda prohibida la
            reproducción, total o parcial, sin autorización expresa del
            administrador del sitio. El diseño de rayas en el lateral de las
            Zapatillas ASICS M.R. es una marca registrada de ASICS Corporation.
          </p>
        </div>
        <div className={styles["footer-copyright--policy-group__powered-by"]}>
          <span className={styles["footer-copyright--policy-group__powered-by__title"]}>
            Powered by
          </span>
          <Image
            alt="Vtex Logo"
            src="/vtex_1.png"
            title="Vtex Logo"
            width={70}
            height={38}
            className={styles["footer-copyright--policy-group__powered-by__image"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Copyright;
