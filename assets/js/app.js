

//TODOを画面に追加する処理
let add = document.getElementById('add');
add.addEventListener('click', function() {
	let taskName = document.getElementById('task').value;

	let notyet = document.createElement('li');
	let text = document.createTextNode(taskName);
	notyet.appendChild(text);
	notyet.textContent = taskName;

document.getElementById('not-yet').appendChild(notyet);


})





//未完了を完了にする処理
//未完了を削除する処理
//画面をリロードしても消えないようにする処理
