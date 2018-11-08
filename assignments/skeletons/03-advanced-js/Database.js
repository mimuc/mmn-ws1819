class Database {
  static store(data) {
  	if(!this.data){
  		this.data = [];
  	}
  	this.data.push(data);
  	console.log('stored');
  	const usersImported = document.querySelector('#users-imported');
  	usersImported.innerHTML=parseInt(usersImported.innerHTML)+1;

  	this.displayUsers();
  }

  static displayUsers(){

  	document.getElementById('users-view').innerHTML = '';
  	this.data.forEach(aUser => {
  		const userView = document.createElement('div');
  		userView.className = 'a-user';

  		const name = document.createElement('h2');
  		name.innerHTML = `${aUser.name}`;
  		userView.append(name);

  		const age = document.createElement('p');
  		age.innerHTML = `age: ${aUser.age} years`;
  		userView.append(age);

  		const image = document.createElement('img');
  		image.src = aUser.image;
  		userView.append(image);

  		document.getElementById('users-view').append(userView);
  	});
  }
}

class AuthService {
	static getAuth() { 
		return {
			username: "string", password: "string"
		}
	}
}
