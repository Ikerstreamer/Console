var Tab = document.body;
Tab.insertAdjacentHTML('beforeend','<textarea id ="console1"></textarea>');
function consolify(){
    let elem = document.getElementById('console1')
    console.log(elem.value);
}
document.getElementById('console1').addEventListener('change', consolify);
