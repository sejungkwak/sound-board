/* 
this code is to play sounds without HTML audio element
but couldn't find the way to stop the current sound when another sound is called.
*/

document.querySelectorAll('.sound').forEach((item) => {

    var soundNames = item.id;
    var sounds = [`sounds/sound-board_sounds_${soundNames}.mp3`];

    console.log(sounds);

    item.addEventListener('click', () => {
        item.classList.add('pressed');
        setTimeout(() => {item.classList.remove('pressed');}, 300);

        var reactionName = item.id;
        var reactionSounds = new Audio(`sounds/sound-board_sounds_${reactionName}.mp3`);
        reactionSounds.play();
        
    })
})

