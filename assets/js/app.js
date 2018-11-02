

let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';
let data;

if (localStorage.getItem('todoList')){
	//でーたを取り出す
	data = JSON.parse(localStorage.getItem('todoList'));

	//取得したデータを画面に表示する
	for (let task of data.notyet){
		addTaskToDOM(task);
	}

	for (let task of data.done){
		addTaskToDOM(task);
	}

	} else {//そうでなければ
	//データの保存先を作成
	data = {
	 notyet: [],
	 done: []
	};

}

//保存したデータを画面に表示する処理//
//データが保存されていないときにデータを取ろうとするとnullになる
//データを保存するために変数は↑みたいな形にしたい
//データがあるときはgetItemで取得すると上とおなじ形になる
//上とおなじになるのはsetItemのときに変数dataを保存したい
/*data = JSON.parse(localStorage.getItem('todoList'));
console.log(data);
*/





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
	
	addTaskToDOM(task);

	//ユーザーが入力した内容を消す
	document.getElementById('task').value = '';



/*画面をリロードしても消えないようにする処理*/
//データを保存


	//データ保存
	//配列にデータを保存
	//task
	//連想配列dataのnotyetに追加したい
	//末尾に追加するときのメゾット　push
	data.notyet.push(task);

	//配列をDBに保存
	dataObjectUpdataed();
})






//関数名 addTaaskToDOM
//引数にユーザーが入力したtaskを入れる
//仮引数の名前はtask

function addTaskToDOM(task){
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
	remove.addEventListener('click',removeTask);


	//完了btn作成
	let done = document.createElement('button');
	done.classList.add('done');
	done.innerHTML = doneIcon;

	//未完了を完了にする処理
	done.addEventListener('click',doneTask);

	//ユーザーが入力した内容を未完了一覧に追加
	buttons.appendChild(remove);
	buttons.appendChild(done);
	notyet.appendChild(buttons);
	document.getElementById('not-yet').appendChild(notyet);


}

function removeTask(){
	let task = this.parentNode.parentNode;
	let value = task.textContent;
	let id = task.innerHTML;
	task.remove();
	data.notyet.splice(data.notyet.indexOf(value),1);
	dataObjectUpdataed();


/*let hoge = data.notyet.indexOf(value);
	//文字列の中の一番最初の値を呼び戻す
	//data.notyet(配列)の中で1番目にvalueが出てきたところを返す

	data.notyet.splice(hoge,1);//ユーザーがクリックしたtodoを配列から削除
*/
}
//配列をDBに保存してる
function dataObjectUpdataed(){
		localStorage.setItem('todoList',JSON.stringify(data));

}

function doneTask(){
	let task = this.parentNode.parentNode;
	let id = task.parentNode.id;
	let value = task.textContent;

	let target = document.getElementById('done')
	target.appendChild(task); //完了一覧に追加する
	target.insertBefore(task,target.childNodes[0]);

	data.task.splice(data.task.indexOf(value),1);
	// data.done.appendChild(task);
	data.done.push(value);
	dataObjectUpdataed();

}



//関数を使うとき
//①同じ処理が2回出てきたとき
//単一責任の原則
//処理だけ見てもわからないとき、処理に名前を付けたいとき
//外の動きを変えずに中のコードを変えることを 「リファクタリング」
