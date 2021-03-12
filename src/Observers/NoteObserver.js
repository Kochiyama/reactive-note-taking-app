import Observer from './Observer';

class NoteObserver extends Observer {
	constructor() {
		super();
		this.notes = [];
	}

	notify() {
		this.subscribers.forEach(func => func(this.notes));
	}

	createNote(title, text, category) {
		const note = {
			title,
			text,
			category,
		};

		this.notes.push(note);
		this.notify();
	}

	deleteNote(index) {
		this.notes.splice(index, 1);
		this.notify();
	}
}

export default new NoteObserver();
