import ObserverController from './ObserverController';

class CategoryController extends ObserverController {
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

export default new CategoryController();
