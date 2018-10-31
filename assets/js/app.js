let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';






/*
- Todoを画面に追加する処理
    - 追加ボタンをクリック
    - ユーザーが入力した内容を取得
    - 追加する要素を作成
    - ユーザーが入力した内容を未完了一覧に追加

- 未完了を完了にする処理
- 未完了を削除する処理
- 完了を削除する処理
- 画面をリロードしても消えないようにする処理

*/


//- 追加ボタン(+)をクリックすると、ユーザーがフォームに入力した内容が画面の未完了タスクの一覧に表示される。
document.getElementById('add').addEventListener('click',function(){
	let task = document.getElementById('task').value;
	
	//追加する要素を作成
	let notyet = document.createElement('li');
	notyet.textContent = task;

	//btnを表示する場所
	let buttons = document.createElement('div');
	buttons.classList.add('buttons');

	//削除btn作成
	let remove = document.createElement('button');
	remove.classList.add('remove');
	remove.innerHTML = removeIcon;


	//削除ボタンをクリック
	remove.addEventListener('click',function(){
		let task = this.parentNode.parentNode;
		task.remove();
	})


	//完了btn作成
	let done = document.createElement('button');
	done.classList.add('done');
	done.innerHTML = doneIcon;

	//未完了を完了にする処理
	done.addEventListener('click',function(){
		let task = this.parentNode.parentNode;
	
	//完了一覧に追加する
		document.getElementById('done').appendChild(task);



	})




	//ユーザーが入力した内容を未完了一覧に追加
	buttons.appendChild(remove);
	buttons.appendChild(done);
	notyet.appendChild(buttons);
	document.getElementById('not-yet').appendChild(notyet);

	//ユーザーが入力した内容を消す
	document.getElementById('task').value = '';



})


//完了ボタンをクリックする

//未完了一覧から削除




//未完了を削除する処理

//未完了一覧から削除