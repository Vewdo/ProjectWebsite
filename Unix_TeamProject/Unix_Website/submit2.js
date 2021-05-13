function getInfo(passForm) {
 
    let fso = CreateObject("Scripting.FileSystemObject"); 
    let s   = fso.CreateTextFile("file.txt", True);
 
 	var fname = document.getElementById('fname');
 	var lname = document.getElementById('lname');
    var email = document.getElementById('email');
    var address = document.getElementById('address');
    var land = document.getElementById('land');
    var range = document.getElementById('range').value;
    var service = document.getElementById('service');
 
    s.writeline("first name :" + fname);
    s.writeline("last name:" + lname);
    s.writeline("email :" + email);
    s.writeline("address :" + address);
    s.writeline("land :" + land);
    s.writeline("range :" + range);
    s.writeline("service :" + service);

 
    s.writeline("-----------------------------");
    s.Close();
 }

