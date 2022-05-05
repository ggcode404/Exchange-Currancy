





const currancy1 = document.getElementById('currancy1')
const currancy2 = document.getElementById('currancy2')
const resultDom = document.getElementById('rate');
const swapDom = document.getElementById('swap');
const below1Dom = document.getElementById('number1');
const below2Dom = document.getElementById('number2');


const value1 = currancy1.value;
const value2 = currancy2.value;





const calculate = async () => {
    try  {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${value1}`)
        const data = await response.json();
   

        
        

   resultDom.textContent = `1 ${currancy1.value} - ${data.rates[currancy2.value]} ${currancy2.value}`
   
    let change = below1Dom.value * data.rates[currancy2.value];
    
    below2Dom.textContent = change.toFixed(2)
    } catch (error) {
        
    }
    

    
    
    

} 





const swapChange = () => {
    let change = currancy1.value;
    currancy1.value = currancy2.value;
    currancy2.value = change;
    calculate();
    
}


below1Dom.addEventListener('click', () => {
    calculate();
} );




swapDom.addEventListener('click', swapChange);

currancy1.addEventListener('change', e => {
    
    calculate();
})

currancy2.addEventListener('change', e => {
    
    calculate();
})



