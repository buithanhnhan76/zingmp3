import 'normalize.css';
import Head from 'next/head';
// import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import React from 'react';
import Header from '../src/components/header/index';
import SideBar from '../src/components/sidebar';
import Gallery from '../src/components/gallery';
import NewRelease from '../src/components/new-release';
import PlayList from '../src/components/playlist';
import FavoriteArtist from '../src/components/favorite-artist';
import Chart from '../src/components/chart';
import Card from '../src/components/card';
import Carousel from '../src/components/carousel';
import NewReleaseSlider from '../src/components/new-release-slider';
import PlaylistSlider from '../src/components/playlist-slider';
import RadioCarousel from '../src/components/radio-carousel';
import Event from '../src/components/event';
import Partner from '../src/components/partner';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Zing Mp3</title>
				<meta name="description" content="Zing Mp3" />
				<link
					rel="icon"
					href="https://static-zmp3.zmdcdn.me/skins/zmp3-v5.2/images/icon_zing_mp3_60.png"
				/>
			</Head>
			<main className={styles['home-main']}>
				<SideBar></SideBar>
				<div>
					<Header></Header>
					<Gallery></Gallery>
					<NewRelease></NewRelease>
					<PlayList></PlayList>
					<FavoriteArtist></FavoriteArtist>
					<PlayList></PlayList>
					<Chart></Chart>
					<Card></Card>
					<Carousel></Carousel>
					<PlayList></PlayList>
					<NewReleaseSlider></NewReleaseSlider>
					<PlaylistSlider></PlaylistSlider>
					<PlayList></PlayList>
					<RadioCarousel></RadioCarousel>
					<Event></Event>
					<Partner></Partner>
				</div>
			</main>
			{/* <main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>

				<p className={styles.description}>
					Get started by editing <code className={styles.code}>pages/index.js</code>
				</p>

				<div className={styles.grid}>
					<a href="https://nextjs.org/docs" className={styles.card}>
						<h2>Documentation &rarr;</h2>
						<p>Find in-depth information about Next.js features and API.</p>
					</a>

					<a href="https://nextjs.org/learn" className={styles.card}>
						<h2>Learn &rarr;</h2>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</a>

					<a href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
						<h2>Examples &rarr;</h2>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</a>

					<a
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className={styles.card}
					>
						<h2>Deploy &rarr;</h2>
						<p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
					</a>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer> */}
		</div>
	);
}
