class NoteController {
	constructor() {
		this.notes = [];
		this.subscribers = [];
	}

	subscribe(func) {
		this.subscribers.push(func);
	}

	unsubscribe(func) {
		this.subscribers = this.subscribers.filter(observer => observer !== func);
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

export default new NoteController();
