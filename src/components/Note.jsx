import React, { Component } from 'react';

import NoteController from '../Controllers/NoteController';

import styles from '../styles/components/Note.module.css';

class Note extends Component {
	delete() {
		const index = this.props.index;
		NoteController.deleteNote(index);
	}

	render() {
		return (
			<section className={styles.note}>
				<h3>{this.props.category}</h3>
				<header>
					<h3>{this.props.title}</h3>
					<button onClick={this.delete.bind(this)}>DELETE</button>
				</header>

				<p>{this.props.text}</p>
			</section>
		);
	}
}

export default Note;
