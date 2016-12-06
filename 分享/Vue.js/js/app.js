var filters = {
	all: function (todoList) {
		return todoList;
	},
	active: function (todoList) {
		return todoList.filter(function (todo) {
			return !todo.completed;
		})
	},
	completed: function (todoList) {
		return todoList.filter(function (todo) {
			console.log(todoList.completed)
			return todo.completed;
		})
	}
}

var TodoListStorage = {
	get: function () {
		if (!localStorage.getItem('list')) {
			return false;
		}

		return JSON.parse(localStorage.getItem('list'));
	},
	set: function (todoList) {
		localStorage.setItem('list', JSON.stringify(todoList));		
	}
}
var app = new Vue({
	el: '#app',
	data: {
		message: 'hello Vue.js',
		todoList: [],
		newTodo: '',
		visibility: 'all',
		statusList: ['all', 'active', 'completed']
	},

	created: function () {
		if (TodoListStorage.get()) {
			// console.log('test');
			this.todoList = TodoListStorage.get();
			console.log(this.todoList)
		}
	},

	// created: {
		// if (TodoListStorage.get()) {
			// console.log('test');
		// }
	// },

	computed: {
		filteredTodoList: function () {
			// console.log(filters[this.visibility](this.todoList))
			return filters[this.visibility](this.todoList);
		},
		todoLength: function () {
			return filters['active'](this.todoList).length;
		},
		hasCompletedTodo: function () {
			return this.todoList.length - this.todoLength === 0 ? true : false;
		}
	},

	watch: {
		todoList: {
			handler: function (val, oldVal) {
				console.log(val);
				TodoListStorage.set(val);
				console.log(TodoListStorage.get())
			},
			deep: true
			
		}
	},

	methods: {

		addTodo: function () {
			var value = this.newTodo;
			if (!value) {
				return;	
			}

			var todo = {
				title: value,
				completed: false
			}

			this.todoList.push(todo);
			this.newTodo = '';
		},

		removeTodo: function (index) {
			console.log(this.todoList);
			this.todoList.splice(index, 1);
		},

		changeStatus: function (status) {
			this.visibility = status;
			console.log(status);
			console.log(this.todoList)
		},

		removeCompled: function () {
			this.todoList.forEach(function (todo, index, arr) {
				if (todo.completed === true) {
					arr.splice(index, 1);
				}
			});
			this.visibility = 'all';
		},

		completeAll: function () {
			if (this.todoLength === 0) {
				this.todoList.forEach( function(todo, index) {
					todo.completed = false;
				});

			} else {
				this.todoList.forEach( function(todo, index) {
					todo.completed = true;
				});
			}
		}
	}
})