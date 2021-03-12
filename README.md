# Sound Board 

<img width="1398" alt="Screenshot 2021-03-12 at 11 42 40" src="https://user-images.githubusercontent.com/71224770/110935989-176ecd00-8328-11eb-85e9-dd4028198a31.png">


#### project notes

1. HTML
- 6 divs: applause, boo, gasp, tada, victory, wrong

2. CSS
- color

3. JavaScript
- click event + audio

Challenge from Brad Traversy & Florin Pop on Udemy '50 Projects in 50 Days'


#### Takeaways from the instructor

1. HTML
- audio tag + id
- a container with id=buttons outside of the audio tags

2. CSS

3. JavaScript
```
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {

        stopSongs()

        document.getElementById(sound).play();
    })

    document.getElementById('buttons').appendchild(btn);
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}

```
