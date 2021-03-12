import React, { Component } from 'react';

import CategoryController from '../Controllers/CategoryController';

import styles from '../styles/components/Categories.module.css';

export default class Categories extends Component {
	constructor() {
		super();

		this.state = {
			categories: ['padrão'],
		};
	}

	componentDidMount() {
		CategoryController.subscribe(this.updateLocalCategoryState.bind(this));
	}

	componentWillUnmount() {
		CategoryController.unsubscribe(this.updateLocalCategoryState.bind(this));
	}

	updateLocalCategoryState(category) {
		this.setState({
			categories: [...this.state.categories, category],
		});
	}

	handleKeyUp(event) {
		if (event.key === 'Enter' && event.target.value) {
			CategoryController.addCategory(event.target.value);

			event.target.value = '';
		}
	}

	render() {
		return (
			<header className={styles.categories}>
				<ul>
					{this.state.categories.map((title, index) => (
						<li key={index}>{title}</li>
					))}
				</ul>

				<input type='text' onKeyUp={this.handleKeyUp.bind(this)} />
			</header>
		);
	}
}
