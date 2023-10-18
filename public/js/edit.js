const post_id = document.getElementById('post-id').value;

const editFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
  
      const response = await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post');
      }
  };
  
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', editFormHandler);
  
  document
    .querySelector('#delete')
    .addEventListener('click', delButtonHandler);