$(document).ready(function(){
    var count_good = 0;
    var count_regular = 0;
    var count_bad = 0

    $(".validar_form").submit( function(){      
        //var radioValue = $("input[name='estrategia']:checked").val();    
       
        // Aqui ira nuestro codigo 
        event.preventDefault();
        var isCheckedStrategy = $("input[name='estrategia']:checked").val()
        var isCheckedCartera = $("input[name='cartera']:checked").val()
        var isCheckedProjects = $("input[name='proyectos']:checked").val()
        var isCheckedFinace = $("input[name='financiamiento']:checked").val()
        var isCheckedCorres = $("input[name='correspondencia']:checked").val()
        var isCheckedApoyo = $("input[name='apoyo']:checked").val()        
        if(isCheckedStrategy === undefined ||  isCheckedCartera === undefined && isCheckedProjects === undefined && isCheckedFinace === undefined && isCheckedCorres === undefined && isCheckedApoyo === undefined)
        {
            alert("Debe seleccionar todos los campos");
        }
        else{

            console.log("goof")
            if(isCheckedStrategy=="bien"){
                count_good++;
                
            }
            else  if(isCheckedStrategy=="regular")
            {

                count_regular++;
            }
            else  if(isCheckedStrategy=="mal")
            {

                count_bad++;
            }
            //cartera
            if(isCheckedCartera=="bien"){
                count_good++;
                
            }
            else  if(isCheckedCartera=="regular")
            {

                count_regular++;
            }
            else  if(isCheckedCartera=="mal")
            {

                count_bad++;
            }
             //project
             if(isCheckedProjects=="bien"){
                count_good++;
                
            }
            else  if(isCheckedProjects=="regular")
            {

                count_regular++;
            }
            else  if(isCheckedProjects=="mal")
            {

                count_bad++;
            }

             //financiamiento
             if(isCheckedFinace=="bien"){
                count_good++;
                
            }
            else  if(isCheckedFinace=="regular")
            {

                count_regular++;
            }
            else  if(isCheckedFinace=="mal")
            {

                count_bad++;
            }
             //correspondencia
             if(isCheckedCorres=="bien"){
                count_good++;
                
            }
            else  if(isCheckedCorres=="regular")
            {

                count_regular++;
            }
            else  if(isCheckedCorres=="mal")
            {

                count_bad++;
            }
            //Apoyo
            if(isCheckedApoyo=="bien"){
                count_good++;
                
            }
            else  if(isCheckedApoyo=="regular")
            {

                count_regular++;
            }
            else  if(isCheckedApoyo=="mal")
            {

                count_bad++;
            }            

            if(count_regular<=3 &&  count_bad==0)
            {
                alert("Felicidades!!, Empresa Aspirante a Innovadora.")
            }
            else if(count_good>=3 && count_bad<=1)
            {

                alert("Empresa en Desarrollo.")
            }
            else{
                alert("Empresa sin Desarrollo.")
            }

        }
     }); 
   
});