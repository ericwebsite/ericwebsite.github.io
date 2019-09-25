
var voice = new Wad({source : 'mic' });
var tuner = new Wad.Poly();
tuner.add(voice);
voice.play();

tuner.updatePitch() // The tuner is now calculating the pitch and note name of its input 60 times per second. These values are stored in tuner.pitch and tuner.noteName.

var logPitch = function(){
    console.log(tuner.pitch, tuner.noteName)
    requestAnimationFrame(logPitch)
};
logPitch();
// If you sing into your microphone, your pitch will be logged to the console in real time.

tuner.stopUpdatingPitch(); // Stop calculating the pitch if you don't need to know it anymore.