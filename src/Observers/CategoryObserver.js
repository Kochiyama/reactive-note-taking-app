import Observer from './Observer';

class CategoryObserver extends Observer {
	constructor() {
		super();
		this.categories = ['padrão'];
	}

	/**
	 * Executes every subscribed observable function
	 */
	notify() {
		this.subscribers.forEach(func => func(this.categories));
	}

	/**
	 * Create a new category
	 * @param {string} category the new category title
	 */
	addCategory(category) {
		this.categories.push(category);
		this.notify();
	}
}

export default new CategoryObserver();
