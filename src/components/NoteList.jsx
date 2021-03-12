import React, { Component } from 'react';
import Note from './Note';

import styles from '../styles/components/NoteList.module.css';

export default class NoteList extends Component {
	render() {
		return (
			<ul className={styles.notesList}>
				{this.props.notes.map((note, index) => {
					return (
						<li key={index}>
							<Note
								index={index}
								deleteNote={this.props.deleteNote}
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
