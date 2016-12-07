

function buildComponent(vids){
        var template = $('#demo').html();
        var templateScript = Handlebars.compile(template);
        console.log(vids[0].name);
        var context = { "name" : "<%= vids[6] %>", "occupation" : "developer" };

        // html = 'My name is Ritesh Kumar. I am a developer.'
        var html = templateScript(context);

        // Insert the HTML code into the page
        $('#test').append(html);
   }