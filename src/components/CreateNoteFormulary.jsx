import React, { Component } from 'react';
import CategoryController from '../Controllers/CategoryController';
import NoteController from '../Controllers/NoteController';

import styles from '../styles/components/CreateNoteFormulary.module.css';

class CreateNoteFormulary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: ['padrão'],
			category: 'padrão',
			title: '',
			text: '',
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
			...this.state,
			categories: [...this.state.categories, category],
		});
	}

	handleOptionChange(event) {
		event.stopPropagation();
		this.setState({
			...this.state,
			category: event.target.value,
		});
	}

	handleTitleChange(event) {
		event.stopPropagation();
		this.setState({
			...this.state,
			title: event.target.value,
		});
	}

	handleTextChange(event) {
		event.stopPropagation();
		this.setState({
			...this.state,
			text: event.target.value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		event.stopPropagation();
		NoteController.createNote(
			this.state.title,
			this.state.text,
			this.state.category
		);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)} className={styles.form}>
				<label>
					Categoria
					<select onChange={this.handleOptionChange.bind(this)}>
						{CategoryController.categories.map((category, index) => (
							<option value={category} key={index}>
								{category}
							</option>
						))}
					</select>
				</label>

				<label>
					Título
					<input type='text' onChange={this.handleTitleChange.bind(this)} />
				</label>

				<textarea
					rows={15}
					placeholder='Escreva sua nota...'
					onChange={this.handleTextChange.bind(this)}
				/>

				<button>Adicionar Nota</button>
			</form>
		);
	}
}

export default CreateNoteFormulary;
