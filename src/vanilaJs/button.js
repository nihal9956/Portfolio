function changeColor(){
document.getElementById('submit_btn').addEventListener('click',()=>{

    document.getElementById('submit_btn').style.backgroundColor='green'
    document.getElementById('submit_btn').innerText="Done"
})

}

function Alert(){
    document.getElementById('submit_btn').addEventListener('click',()=>{

        document.getElementById('submit_btn').style.backgroundColor='red'
        document.getElementById('submit_btn').innerText="Fill All Deatiles"
    })
    
}

export default changeColor

export {Alert}