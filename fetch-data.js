// Initializing Asyn Function
async function fetchUserData() {
  // Define API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
  // Select Data Container
  const dataContainer = document.getElementById('api-data');
  
  // Fetch Data: try-catch
  try {
    const response = await fetch (apiUrl);
    const users = await response.json();
    // Clear Loading Message
    dataContainer.innerHTML = '';
    // dataContainer.textContent = 'Loading user data...';
    // Create Append List
    const userList = document.createElement('ul');

    users.forEach(user => {
      // Create list Items 
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
    
      // Append <li> to userList
      userList.appendChild(listItem);
    })
    dataContainer.appendChild(userList);
  } catch (error) {
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
  }  
}
  
document.addEventListener('DOMContentLoaded', () => {
  fetchUserData();
})
