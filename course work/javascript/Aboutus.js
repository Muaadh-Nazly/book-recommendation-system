// Function to show the details of a perticluar student by changing the CSS display to 'flex'
function show_detail(student_num){
     // To get the DOM element which represent the student's details using the student number
    let detail_student = document.querySelector(`#student_${student_num}`);
    // Change the display property to 'flex' to show the specific student details
    detail_student.style.display = 'flex';
    
}
//  Function to remove the details of a special student by changing the CSS display property to 'none'
function remove_detail(student_num){
      // To get the DOM element which represents the student's details by using the student number
    let detail_student = document.querySelector(`#student_${student_num}`);
     // To change the display property to 'none' and to hide the specific student's details
    detail_student.style.display = 'none';
}