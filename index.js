function attemptLogin() {
    // Simplified logic for demonstration purposes
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform authentication logic here
    // For simplicity, let's assume any non-empty username/password is valid

   
    //ticketing panel
    if (username == 'ticketing@mfc.sa' && password == '123456') 
      {
        // Redirect to the next page on successful login
        window.location.href = 'page2.html';
        //alert('login successful');
       
     }
        //admin panel
        else if (username == 'admin@mfc.sa' && password == '123456'){
            // Redirect to the next page on successful login
            window.location.href = 'page5.html';
          //  alert('login successful');
          

        } 

            // hr panel
         else if(username == 'hr@mfc.sa' && password == '123456'){
          // Redirect to the next page on successful login
           window.location.href = 'page4.html';
           //alert('login successful');

        } 
        //hr panel
        else if(username == 'hr@mfc.sa' && password == '123456'){
          // Redirect to the next page on successful login
           window.location.href = 'page4.html';
           //alert('login successful');

        } 
        //INVALID USE
        else if(username == 'nonamae@mfc.ph' && password == '123456'){
            // Redirect to the next page on successful login
             window.location.href = 'page4.html';
             //alert('login successful');
  
          } 
      //invalid credentials
    else{
        alert('Invalid credentials. Please try again.');
    }
   
}

//table and form

var list1 = [];
		var list2 = [];
		var list3 = [];
		var list4 = [];
        var list5 = [];
        var list6 = [];
        var list7 = [];
        var list8= [];
        var list9 = [];
        var list10 = [];
        var list11 = [];

		var n = 1;
		var x = 0;

		function AddRow(){

			var AddRown = document.getElementById('show');
			var NewRow = AddRown.insertRow(n);

			list1[x] = document.getElementById("ename").value;
			list2[x] = document.getElementById("pnumber1").value;
			list3[x] = document.getElementById("project").value;
			list4[x] = document.getElementById("department").value;
            list5[x] = document.getElementById("tot").value;
            list6[x] = document.getElementById("dcity").value;
            list7[x] = document.getElementById("acity").value;
            list8[x] = document.getElementById("date").value;
            list9[x] = document.getElementById("time").value;
            list10[x] = document.getElementById("pnumber2").value;
            list11[x] = document.getElementById("email").value;
            

			var cel1 = NewRow.insertCell(0);
			var cel2 = NewRow.insertCell(1);
			var cel3 = NewRow.insertCell(2);
			var cel4 = NewRow.insertCell(3);
            var cel5 = NewRow.insertCell(4);
            var cel6 = NewRow.insertCell(5);
            var cel7 = NewRow.insertCell(6);
            var cel8 = NewRow.insertCell(7);
            var cel9 = NewRow.insertCell(8);
            var cel10 = NewRow.insertCell(9);
            var cel11 = NewRow.insertCell(10);
            
			cel1.innerHTML = list1[x];
			cel2.innerHTML = list2[x];
			cel3.innerHTML = list3[x];
			cel4.innerHTML = list4[x];
            cel5.innerHTML = list5[x];
            cel6.innerHTML = list6[x];
            cel7.innerHTML = list7[x];
            cel8.innerHTML = list8[x];
            cel9.innerHTML = list9[x];
            cel10.innerHTML = list10[x];
            cel11.innerHTML = list11[x];
            

			n++;
			x++;
		}

        //latest form

        var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["product"] = document.getElementById("product").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.productCode;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.product;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.qty;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.perPrice;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("product").value = selectedRow.cells[1].innerHTML;
    document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
    document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.perPrice;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("productCode").value = '';
    document.getElementById("product").value = '';
    document.getElementById("qty").value = '';
    document.getElementById("perPrice").value = '';
    selectedRow = null;
}