class ObserverController {
	constructor() {
		this.subscribers = [];
	}

	test() {
		console.log('Called');
	}

	subscribe(func) {
		this.subscribers.push(func);
	}

	unsubscribe(func) {
		this.subscribers = this.subscribers.filter(observer => observer !== func);
	}
}

export default ObserverController;
