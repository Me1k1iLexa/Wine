const soyuz = new FontFace('Soyuz Grotesk Bold','url(./fonts/soyuz.ttf) format("truetype")');

soyuz.load().then(function() {
      document.fonts.add(soyuz);
      console.log('Soyuz ready');
}).catch(function() {
      console.log('Soyuz cant load');
});

const manrope = new FontFace('Manrope','url(./fonts/manrope.ttf) format("truetype")');

manrope.load().then(function(){
    document.fonts.add(manrope);
    console.log('Manrope ready');
}).catch(function(){
    console.log('Manrope cant load');
});