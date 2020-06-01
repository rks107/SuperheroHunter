$('#favorite-superman-button').click(function(){
    $('.favorite').css("display","flex");

    $('#superman-container').css("display","none");
});
$('#superhero-name').on("keyup", function(event){
    if(event.keyCode == 13 && $('#superhero-name').val() != "") {
        displaySuperman();
    }
});

$('#submit-button').click(displaySuperman);

function displaySuperman(){

    let superHeroName = $('#superhero-name').val();
    let flag = false;

    $('#superman #title').remove();
    $('#superman #content').remove();
    for(let i =1;i<=200;i++)
    {
        let tempurl = "https://www.superheroapi.com/api.php/125397225836028/"+ i ;
        $.get(tempurl,function(data){
            console.log(data.name);
            if(superHeroName === data.name)
            {
                flag = true;
            }
        });
    }
    
 
    setTimeout(function(){

        console.log(flag);
    if(flag === false)
    {  
        alert("No superman found with this name");
        return;
    } 
    
    
     
    
    $('#home-page').css('display','none');
    $('#superman-page').css("display","block");
    
    let url = "https://www.superheroapi.com/api.php/125397225836028/search/"+ superHeroName;
    $.get(url,function(data){
        let publisher = data.results[0].biography.publisher;
        let fullName = data.results[0].name;
        let intelligence = data.results[0].powerstats.intelligence;
        let power = data.results[0].powerstats.power;
        let speed = data.results[0].powerstats.speed;
        let strength = data.results[0].powerstats.strength
        let imageUrl = data.results[0].image.url;
        let gender = data.results[0].appearance.gender;
        let race = data.results[0].appearance.race;
        let h1 = data.results[0].appearance.height[0];
        let h2 = data.results[0].appearance.height[1];
        let w1 = data.results[0].appearance.weight[0];
        let w2 = data.results[0].appearance.weight[1];

         $('#superman').append('<div id="title"><h1>'+fullName+'</h1></div><div id="content"><div id="superman-image"> <img src="'+imageUrl+'"></div><div id="superman-info"><p>Gender: '+gender+'</p><p>Race: '+race+'</p><p>Height: '+h1+','+h2+'</p><p>Weight: '+w1+','+w2+'</p><p>Publisher: '+publisher+'</p><p>Intelligence: '+intelligence+'</p><p>Intelligence: '+power+'</p><p>Speed: '+speed+'</p><p>Strength: '+strength+'</p></div></div>');

         });

        },3000);
};

// Superman page close button
$('#close-page').click(function(){
    $('#home-page').css("display","block");
    $('#superman-page').css("display","none");
})

// Superman for home page
for(let i =1; i<=100;i++)
{
    let url = "https://www.superheroapi.com/api.php/125397225836028/"+ i ;
    
    $.get(url,function(data){
        var id = data.id;
        var name = data.name;
        let image = data.image.url;

        var container = $('<div id="'+id+'" class="superman-items"><img src=" '+ image +'"></div>');
        
        var h = $('<h2>'+name+'</h2>').click(function(){

            $('#superman #title').remove();
            $('#superman #content').remove();

            $('#home-page').css('display','none');
            $('#superman-page').css("display","block");
            
            let url = "https://www.superheroapi.com/api.php/125397225836028/search/"+ name;
            $.get(url,function(data){
                let publisher = data.results[0].biography.publisher;
                let fullName = data.results[0].name;
                let intelligence = data.results[0].powerstats.intelligence;
                let power = data.results[0].powerstats.power;
                let speed = data.results[0].powerstats.speed;
                let strength = data.results[0].powerstats.strength
                let imageUrl = data.results[0].image.url;
                let gender = data.results[0].appearance.gender;
                let race = data.results[0].appearance.race;
                let h1 = data.results[0].appearance.height[0];
                let h2 = data.results[0].appearance.height[1];
                let w1 = data.results[0].appearance.weight[0];
                let w2 = data.results[0].appearance.weight[1];
        
                 $('#superman').append('<div id="title"><h1>'+fullName+'</h1></div><div id="content"><div id="superman-image"> <img src="'+imageUrl+'"></div><div id="superman-info"><p>Gender: '+gender+'</p><p>Race: '+race+'</p><p>Height: '+h1+','+h2+'</p><p>Weight: '+w1+','+w2+'</p><p>Publisher: '+publisher+'</p><p>Intelligence: '+intelligence+'</p><p>Intelligence: '+power+'</p><p>Speed: '+speed+'</p><p>Strength: '+strength+'</p></div></div>');
        
                 });
        });

        var fav = $('<i class="fas fa-thumbs-up"></i>').click(function(){
            var ev = $(this).parent();
            ev.fadeOut(function(){
                $('.favorite').append(ev);
                ev.fadeIn();
            });
            $(this).remove();
        });

        var del = $('<i class="fas fa-trash"></i>').click(function(){
            var ev = $(this).parent();
            ev.fadeOut(function(){
                ev.remove();
            });
        });

        container.append(h, del, fav);
        $('#superman-container').append(container);
    });
}