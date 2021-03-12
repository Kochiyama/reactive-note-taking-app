import React, { Component } from 'react';
import Categories from './components/Categories';
import CreateNoteFormulary from './components/CreateNoteFormulary';
import NoteList from './components/NoteList';

import styles from './styles/App.module.css';

class App extends Component {
	render() {
		return (
			<section className={styles.container}>
				<CreateNoteFormulary />
				<div className={styles.section}>
					<Categories />

					<NoteList />
				</div>
			</section>
		);
	}
}

export default App;
