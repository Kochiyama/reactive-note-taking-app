class Observer {
	constructor() {
		this.observables = [];
	}

	/**
	 * subscribe an observable to a observer
	 * @param {function} func function that is called when a change is detected
	 */
	subscribe(func) {
		this.observables.push(func);
	}

	/**
	 * unsubscribe an observable from observer
	 * @param {function} func function that was called when a change was detected
	 */
	unsubscribe(func) {
		this.observables = this.observables.filter(
			observable => observable !== func
		);
	}
}

export default Observer;
