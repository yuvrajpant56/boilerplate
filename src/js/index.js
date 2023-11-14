document.addEventListener('DOMContentLoaded', function () {
    const adminBox = document.getElementById('admin-box');
    const researcherBox = document.getElementById('researcher-box');
    const committeeBox = document.getElementById('committee-box');
  
    adminBox.addEventListener('click', function () {
      // Redirect to the admin interface
      window.location.href = 'admin.html';
    });
  
    researcherBox.addEventListener('click', function () {
      // Redirect to the researcher interface
      window.location.href = 'researcher.html';
    });
  
    committeeBox.addEventListener('click', function () {
      // Redirect to the committee member interface
      window.location.href = 'committee.html';
    });
  });
  
  