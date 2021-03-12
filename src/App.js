import React, { Component } from 'react';
import Categories from './components/Categories';
import CreateNoteFormulary from './components/CreateNoteFormulary';
import NoteList from './components/NoteList';

import styles from './styles/App.module.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			notes: [],
			categories: ['padrão'],
		};
	}

	createNote(title, text, category) {
		const note = { title, text, category };
		const newNotesArray = [...this.state.notes, note];
		const newState = {
			notes: newNotesArray,
		};
		this.setState(newState);
		console.log(this.state);
	}

	deleteNote(index) {
		const notesArray = this.state.notes;
		notesArray.splice(index, 1);
		this.setState({ notes: notesArray });
	}

	createCategory(category) {
		this.setState({
			notes: this.state.notes,
			categories: [...this.state.categories, category],
		});
	}

	render() {
		return (
			<section className={styles.container}>
				<CreateNoteFormulary
					createNote={this.createNote.bind(this)}
					categories={this.state.categories}
				/>
				<div className={styles.section}>
					<Categories
						createCategory={this.createCategory.bind(this)}
						categories={this.state.categories}
					/>

					<NoteList
						deleteNote={this.deleteNote.bind(this)}
						notes={this.state.notes}
					/>
				</div>
			</section>
		);
	}
}

export default App;
