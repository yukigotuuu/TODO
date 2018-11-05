

let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';
let data;

//もしデータが保存されていれば
if (localStorage.getItem('todoList')) {
	data = JSON.parse(localStorage.getItem('todoList'));
	renderTodoList();
} else {//もしデータが保存されていなければ
	data = {// データの保存先を作成
		notyet: [],
		done: []
	};
}


//TODOを画面に追加する処理
let add = document.getElementById('add');
add.addEventListener('click', function() {
		let taskName = document.getElementById('task').value;
		addTaskToDOM(taskName);
		document.getElementById('task').value = '';
		data.notyet.push(taskName);
		dataObjectUpdated();
});


//--------関数---------//
function addTaskToDOM (taskName, isDone) {
	let list;
	if (isDone) {
		list = document.getElementById('done');
	} else {
		list = document.getElementById('not-yet');
	}

	let notyet = document.createElement('li');
	let text = document.createTextNode(taskName);
	notyet.appendChild(text);

	let buttons = document.createElement('div');
	buttons.classList.add('buttons');

//削除ボタン作成
	let	remove = document.createElement('button');
	remove.classList.add('remove');
	remove.innerHTML = removeIcon;

	//削除ボタンをクリック
	remove.addEventListener('click', removeTask);

//完了ボタン作成
	let done = document.createElement('button');
	done.classList.add('done');
	done.innerHTML = doneIcon;

	//完了ボタンをクリック
	done.addEventListener('click', doneTask);

//ユーザーが入力した内容を未完了一覧に追加
	buttons.appendChild(remove);
	buttons.appendChild(done);
	notyet.appendChild(buttons);
	list.appendChild(notyet);
}

	//削除ボタンを押したとき
function removeTask() {
	let task = this.parentNode.parentNode;
	let id = task.parentNode.id;
	let value = task.textContent;

	task.remove(); //画面から削除

	//ストレージから削除
	if (id === 'not-yet') {
		data.notyet.splice(data.notyet.indexOf(value),1);
	} else {
		data.done.splice(data.done.indexOf(value),1);
	}
	dataObjectUpdated();
}

	//完了ボタンを押したとき
function doneTask(){
	let task = this.parentNode.parentNode;
	let id = task.parentNode.id;
	if (id === 'done'){
		return;
	}
	let value = task.textContent;

  //完了一覧に追加
	let target = document.getElementById('done');
	target.appendChild(task);

  //ストレージも更新
	data.notyet.splice(data.notyet.indexOf(value),1);
	data.done.push(value);
	dataObjectUpdated();
}

function dataObjectUpdated(){
		localStorage.setItem('todoList', JSON.stringify(data));
}

function renderTodoList(){ //未完了タスクを一覧で表示
	for (let taskName of data.notyet) {
		addTaskToDOM(taskName,false);
	}

	for (let taskName of data.done) {
		addTaskToDOM(taskName,true);
	}
}

