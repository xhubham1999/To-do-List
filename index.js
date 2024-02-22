document.addEventListener('DOMContentLoaded', function () {
	const taskInput = document.getElementById('taskInput');
	const addTaskBtn = document.getElementById('addTaskBtn');
	const taskList = document.getElementById('taskList');
  
	// Add task button click event
	addTaskBtn.addEventListener('click', function () {
	  const taskText = taskInput.value.trim();
  
	  if (taskText !== '') {
		addTask(taskText);
		taskInput.value = '';
	  } else {
		alert('Please enter a task!');
	  }
	});
  
	// // Add pre-existing tasks
	// // const preExistingTasks = [
	// //   'Breakfast',
	// //   '10 page book reading',
	// //   'Lunch',
	// //   'Coding practice',
	// //   'Solve JS questions',
	// //   'Writing 10 English sentences'
	// // ];
  
	// preExistingTasks.forEach(task => addTask(task));
  
	// Add task function
	function addTask(taskText) {
	  const listItem = document.createElement('li');
  
	  const checkbox = document.createElement('input');
	  checkbox.type = 'checkbox';
  
	  const taskSpan = document.createElement('span');
	  taskSpan.textContent = taskText;
  
	  const removeBtn = document.createElement('button');
	  removeBtn.textContent = 'Remove';
	  removeBtn.classList.add('removeBtn');
	  removeBtn.addEventListener('click', function () {
		listItem.remove();
	  });
  
	  listItem.appendChild(checkbox);
	  listItem.appendChild(taskSpan);
	  listItem.appendChild(removeBtn);
	  taskList.appendChild(listItem);
	}
  });
  