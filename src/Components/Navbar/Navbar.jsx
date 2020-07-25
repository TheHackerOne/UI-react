import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {

	useEffect(() => {
		const updateWidth = () => {
			newwidth(window.innerWidth);
		}

		window.addEventListener('resize', updateWidth);
		
		return _ => {
			window.removeEventListener('resize', updateWidth);
		}
	})

	const [toggleNav, settoggleNav] = useState(false);
	const [width, newwidth] = useState();
	
	const navItems = {
		Mac: {
			title: "Mac",
			link: "/Mac",
		},
		iPad: {
			title: "iPad",
			link: "/iPad",
		},
		iPhone: {
			title: "iPhone",
			link: "/iPhone",
		},
		Watch: {
			title: "Watch",
			link: "/Watch",
		},
		TV: {
			title: "TV",
			link: "/TV",
		},
		Music: {
			title: "Music",
			link: "/Music",
		},
		Support: {
			title: "Support",
			link: "/Support",
		}
	};

	const toggleNavbar = () => {
		settoggleNav(!toggleNav);
	}

	const navList = Object.keys(navItems).map((item) => (
					<li className={styles.navList} key={item.title}>
						<Link to={navItems[item].link} exact>
							{navItems[item].title}
						</Link>
					</li>
				))

	const navWeb = Object.keys(navItems).map(item => 
		<li>
			<Link className={styles.navItem} to={navItems[item].link} exact>
				{navItems[item].title}
			</Link>
		</li>)

	const nav = (
		<nav>
			<ul>
				<button onClick={toggleNavbar} type='btn' className={styles.menu}>
					<li>=</li>
				</button>
				{navWeb}
			</ul>
		</nav>
	);

	const dropMenu = (
		<nav className={styles.dropdown}>
			<ul>
				<button onClick={toggleNavbar} type='btn' className={styles.menu}>
					<li>=</li>
				</button>
			</ul>
			<div className={styles.searchCenter}>
				<input
					type='search'
					placeholder='Search apple store'
					className={styles.searchBar}
				></input>
			</div>
			<ul className={styles.dropList}>{navList}</ul>
		</nav>
	);

  return (
		<>
			{(toggleNav && width < 730) ? dropMenu : nav}
		</>
	);
}

export default Navbar;