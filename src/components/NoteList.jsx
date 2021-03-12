import React, { Component } from 'react';
import Note from './Note';

import NoteController from '../Controllers/NoteController';

import styles from '../styles/components/NoteList.module.css';

export default class NoteList extends Component {
	constructor() {
		super();

		this.state = {
			notes: [],
		};
	}

	componentDidMount() {
		NoteController.subscribe(this.updateLocalNoteState.bind(this));
	}

	componentWillUnmount() {
		NoteController.unsubscribe(this.updateLocalNoteState.bind(this));
	}

	updateLocalNoteState(notes) {
		this.setState({
			...this.state,
			notes: notes,
		});
	}

	render() {
		return (
			<ul className={styles.notesList}>
				{this.state.notes.map((note, index) => {
					return (
						<li key={index}>
							<Note
								index={index}
								title={note.title}
								text={note.text}
								category={note.category}
							/>
						</li>
					);
				})}
			</ul>
		);
	}
}
