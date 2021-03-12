import Observer from './Observer';

class NoteObserver extends Observer {
	constructor() {
		super();
		this.notes = [];
	}

	/**
	 * Executes every subscribed observable function
	 */
	notify() {
		this.subscribers.forEach(func => func(this.notes));
	}

	/**
	 * Create a new note
	 * @param {string} title note title
	 * @param {string} text note content
	 * @param {string} category note category
	 */
	createNote(title, text, category) {
		const note = {
			title,
			text,
			category,
		};

		this.notes.push(note);
		this.notify();
	}

	/**
	 * Delete a note
	 * @param {number} index the note index
	 */
	deleteNote(index) {
		this.notes.splice(index, 1);
		this.notify();
	}
}

export default new NoteObserver();
