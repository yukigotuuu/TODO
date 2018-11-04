

let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';

//TODOを画面に追加する処理
let add = document.getElementById('add');
add.addEventListener('click', function() {
	let taskName = document.getElementById('task').value;

	let notyet = document.createElement('li');
	let text = document.createTextNode(taskName);
	notyet.appendChild(text);
	notyet.textContent = taskName;

 	

//ボタンを表示する場所
	let buttons = document.createElement('div');
	buttons.classList.add('buttons');

//削除ボタン作成
	let	remove = document.createElement('button');
	remove.classList.add('remove');
	remove.innerHTML = removeIcon;
	//削除ボタンをクリック
	remove.addEventListener('click', function(){
		let task = this.parentNode.parentNode;
		task.remove();
	})

//完了ボタン作成
	let done = document.createElement('button');
	done.classList.add('done');
	done.innerHTML = doneIcon;
	//完了ボタンをクリック
	done.addEventListener('click', function(){
		let task = this.parentNode.parentNode;
		//完了一覧に追加
		document.getElementById('done').appendChild(task);
	})



//ユーザーが入力した内容を未完了一覧に追加
	document.getElementById('not-yet').appendChild(notyet);
	notyet.appendChild(buttons);
	buttons.appendChild(remove);
	buttons.appendChild(done);







})








//未完了を完了にする処理
//未完了を削除する処理
//画面をリロードしても消えないようにする処理
