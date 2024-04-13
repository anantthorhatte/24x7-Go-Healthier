function appointment(){
    alert("Make Sure to Book An Appointment")
}
function dark()
    {
        
        
       const darkimage = document.getElementById('dark-1');
       darkimage.classList.add("active");

       const lightimage = document.getElementById('light-1');
       lightimage.classList.remove("active");

        const darktheme = document.getElementById('body');
        darktheme.className = 'dark-theme';
        
    }

    function light()
    {
       

        const darkimage = document.getElementById('dark-1');
       darkimage.classList.remove("active");

       const lightimage = document.getElementById('light-1');
       lightimage.classList.add("active");

       const lighttheme = document.getElementById('body');
        lighttheme.className = 'light-theme';
    }