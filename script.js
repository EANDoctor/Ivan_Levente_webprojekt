//  Gombra kattintanak
 document.querySelector('.btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('featured-cars').classList.add('show');
  });