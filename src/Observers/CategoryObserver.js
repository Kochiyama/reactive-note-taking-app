import Observer from './Observer';

class CategoryObserver extends Observer {
	constructor() {
		super();
		this.categories = ['padrão'];
	}

	notify() {
		this.subscribers.forEach(func => func(this.categories));
	}

	addCategory(category) {
		this.categories.push(category);
		this.notify();
	}
}

export default new CategoryObserver();
