class Product{
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}
 
class UI {
    addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
            <strong>Product</strong> : ${product.name}
            <strong>Product Price</strong>: ${product.price}
            <strong>Product Year</strong>: ${product.year}
            <a href="#" class="btn btn-danger" name="delete">Delete</a>
            </div>
        </div>
        `;

        productList.appendChild(element);
        //this.resetForm();
    }

    deleteProduct(element){
        if(element.name === 'delete'){

            console.log();
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Eliminado', 'danger');
        }
    }

    resetForm(){

        document.getElementById('product-form').reset();

    }
    
    showMessage(message, cssClass){
        const div = document.createElement('div');
        div.className =  `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        //Showing in DOM 
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000 )

    }
}


//DOM Events
document.getElementById('product-form')
.addEventListener('submit', function(e){
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

   /* console.log(name, price, year);
    console.log(new Product(name, price, year));*/

    const product = new Product(name, price, year);

    const ui = new UI();
    if(name === '' || price === '' || year === ''){
        ui.showMessage('Completa los campos', 'danger');
        return;
        //Se podria hacer como un if else, pero al poner un return se termina con la función.
    }
    ui.addProduct(product);
    ui.showMessage('Correcto', 'success' );
    ui.resetForm();


    e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function(e){

    //console.log(e.target);
    const iu = new UI();
    iu.deleteProduct(e.target);
    //iu.showMessage('Eliminado', 'danger'); //Al hacerlo de esta forma es cuando tocas el elemento padre,
    //no el boton o la función 

});



//Prueba de GIT