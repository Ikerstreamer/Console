var Tab = document.body;
Tab.insertAdjacentHTML('beforeend','<textarea id ="console1"></textarea>');
getElementById('console1').addEventListener('change', () => {eval(getElementById('console1').value)}
)
