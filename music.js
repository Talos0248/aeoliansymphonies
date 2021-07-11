//This funtion plays or pauses the music tracks
//As the webpages containing audio all use the same javascript file, the functions have been created to support up to 10 tracks. The limit can be increased if necessary.

function play() {
    
    //assigns a variable for each track, up to 10
    
    try{
        var track1 = document.getElementById("track1");
        var track2 = document.getElementById("track2");
        var track3 = document.getElementById("track3");
        var track4 = document.getElementById("track4");
        var track5 = document.getElementById("track5");
        var track6 = document.getElementById("track6");
        var track7 = document.getElementById("track7");
        var track8 = document.getElementById("track8");
        var track9 = document.getElementById("track9");
        var track10 = document.getElementById("track10");
    }
    catch(e){}
    
    //If the tracks are not playing, play them
    
    if (track1.paused){
        try{
            track1.play();
            track2.play();
            track3.play();
            track4.play();
            track5.play();
            track6.play();
            track7.play();
            track8.play();
            track9.play();
            track10.play();
        }
        catch(e){}
        
    //Changes the symbbol of the play/pause button to 'Pause'
        
        document.getElementById("playpause").setAttribute("class", "buttonpause");
    }
    
    //If the tracks are playing, pause them
    
    else{
        try{
            track1.pause();
            track2.pause();
            track3.pause();
            track4.pause();
            track5.pause();
            track6.pause();
            track7.pause();
            track8.pause();
            track9.pause();
            track10.pause();
        }
        catch(e){}
            
    //Changes the symbol of the play/pause button to 'Play'
        
        document.getElementById("playpause").setAttribute("class", "buttonplay");
    }
}

//Gets the trackname and slidername and changes the volume based on the value of the slider

function volume(trackname,slidername){
    var track = document.getElementById(trackname);
    var slider = document.getElementById(slidername);
    track.volume = slider.value;
}

function randomize(){
    
    //Gets the slider IDS and track IDs
    
    try{
        var strack1 = document.getElementById("strack1");
        var strack2 = document.getElementById("strack2");
        var strack3 = document.getElementById("strack3");
        var strack4 = document.getElementById("strack4");
        var strack5 = document.getElementById("strack5");
        var strack6 = document.getElementById("strack6");
        var strack7 = document.getElementById("strack7");
        var strack8 = document.getElementById("strack8");
        var strack9 = document.getElementById("strack9");
        var strack10 = document.getElementById("strack10");
    }
    catch(e){}
    
    try{
        var track1 = document.getElementById("track1");
        var track2 = document.getElementById("track2");
        var track3 = document.getElementById("track3");
        var track4 = document.getElementById("track4");
        var track5 = document.getElementById("track5");
        var track6 = document.getElementById("track6");
        var track7 = document.getElementById("track7");
        var track8 = document.getElementById("track8");
        var track9 = document.getElementById("track9");
        var track10 = document.getElementById("track10");
    }
    catch(e){}
    
    //Creates a random value for each slider, then sets the track volume to the slider value
    
    try{
        strack1.value = Math.random();
        track1.volume = strack1.value;
        strack2.value = Math.random();
        track2.volume = strack2.value;
        strack3.value = Math.random();
        track3.volume = strack3.value;
        strack4.value = Math.random();
        track4.volume = strack4.value;
        strack5.value = Math.random();
        track5.volume = strack5.value;
        strack6.value = Math.random();
        track6.volume = strack6.value;
        strack7.value = Math.random();
        track7.volume = strack7.value;
        strack8.value = Math.random();
        track8.volume = strack8.value;
        strack9.value = Math.random();
        track9.volume = strack9.value;
        strack10.value = Math.random();
        track10.volume = strack10.value;
    }
    catch(e){}
}