class CategoryController {
	constructor() {
		this.categories = [];
		this.subscribers = [];
	}

	subscribe(func) {
		this.subscribers.push(func);
	}

	unsubscribe(func) {
		this.subscribers = this.subscribers.filter(observer => observer !== func);
	}

	notify() {
		this.subscribers.forEach(func => func(this.categories));
	}

	addCategory(category) {
		this.categories.push(category);
		this.notify();
	}
}

export default new CategoryController();
