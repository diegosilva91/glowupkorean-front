import Image from "next/image";
import styles from "./page.module.css";
import sueroImage from "@/public/jumiso-vitamin-serum.png"; 
export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.logo}>Glowupkorean</h1>
        <nav className={styles.nav}>
          <a href="#best-seller">Best seller</a>
          <a href="#skin-care">Skin care</a>
          <a href="#body-hair-care">Body & hair care</a>
          <a href="#makeup">Makeup</a>
          <a href="#sets-kits">Sets & Kits</a>
          <div className={styles.cart}>🛒</div>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h2>Skin Care Coreano</h2>
          <p>
            Somos una tienda online especializada en la venta de productos
            coreanos originales. Tu satisfacción es nuestra prioridad número
            uno. Si por alguna razón no estás completamente satisfecho con tu
            compra, no dudes en ponerte en contacto con nuestro equipo de
            atención al cliente.
          </p>
          <button className={styles.button}>Comprar ahora!</button>
        </section>

        <div className={styles.productShowcase}>
          <Image
            src={sueroImage}
            alt="Suero Iluminador"
            width={150}
            height={200}
          />
          <p className={styles.productName}>Suero Iluminador</p>
          <p className={styles.productPrice}>€17,00</p>
        </div>

        <div className={styles.suggestions}>
          <div className={styles.suggestion}>
            <Image
              src="/bloqueador.jpg"
              alt="Bloqueador"
              width={80}
              height={100}
            />
            <p>Bloqueador</p>
          </div>
          <div className={styles.suggestion}>
            <Image
              src="/contorno-ojos.jpg"
              alt="Contorno de Ojos"
              width={80}
              height={100}
            />
            <p>Contorno de Ojos</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Síguenos en redes sociales:</p>
        <div className={styles.socials}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            📷 Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            📘 Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            🐦 Twitter
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            🎵 TikTok
          </a>
        </div>
      </footer>
    </div>
  );
}
