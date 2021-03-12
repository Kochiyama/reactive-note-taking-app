import React, { Component } from 'react';

import styles from '../styles/components/Categories.module.css';

export default class Categories extends Component {
	handleKeyUp(event) {
		if (event.key === 'Enter' && event.target.value) {
			this.props.createCategory(event.target.value);

			event.target.value = '';
		}
	}

	render() {
		return (
			<header className={styles.categories}>
				<ul>
					{this.props.categories.map((title, index) => (
						<li key={index}>{title}</li>
					))}
				</ul>

				<input type='text' onKeyUp={this.handleKeyUp.bind(this)} />
			</header>
		);
	}
}
