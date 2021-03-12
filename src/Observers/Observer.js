class Observer {
	constructor() {
		this.observables = [];
	}

	subscribe(func) {
		this.observables.push(func);
	}

	unsubscribe(func) {
		this.observables = this.observables.filter(
			observable => observable !== func
		);
	}
}

export default Observer;
