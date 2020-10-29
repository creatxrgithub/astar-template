class LaterTodo {
	constructor (t, callback) {
		this.durationStep = 1;
		this.duration = t;
		/*
		if(args.length===1) {
			if(typeof args[args.length-1] === 'function') {
				this.callback = args.pop();
			}
		}
		*/
		if(typeof callback != 'function') {
//			throw `${callback} is not a function`;
		}
		this.callback = callback;
	}

	todo(...args) {
		//*
		setTimeout(() => {
				this.callback(...args);
			}, this.duration*this.durationStep++);
		//*/
		/*//如果不用 es6 的箭頭函數，需保存指鍼
		let self = this;
		setTimeout(function () {
			self.callback(...args);
		}, self.duration*self.durationStep++);
		//*/
	}

	todoCallback(callback, ...args) {
		if(typeof callback != 'function') {
			throw `${callback} is not a function`;
		}
		setTimeout(() => {
				callback(...args);
			}, this.duration*this.durationStep++);
	}
}

module.exports = LaterTodo;
