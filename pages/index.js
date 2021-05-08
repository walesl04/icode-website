import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>iCode Technology</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title+' '+styles.highlight}>
          iCode Technology
        </h1>

        <p className={styles.description}>
          Desenvolvimento especializado{' '}
          <code className={styles.code}>Apps e Softwares</code>
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Apps &rarr;</h3>
            <p>Desenvolvimento de Apps Android e iOS</p>
          </div>

          <div  className={styles.card}>
            <h3>Softwares &rarr;</h3>
            <p>Desenvolvimento e manutenção de plataformas web e softwares de gestão.</p>
          </div>

          <div
            className={styles.card}
          >
            <h3>Consultoria</h3>
            <p>Planejamento de projetos e plano de execução.</p>
          </div>

          <div
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Contato</h3>
            <p>
              e-mail: equipeicode@gmail.com
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://icodetechnology.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by &nbsp; <h4 className={styles.highlight}>iCode</h4>
        </a>
      </footer>
    </div>
  )
}
