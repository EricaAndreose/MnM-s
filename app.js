const audio = document.getElementById('audio');
        const playButton = document.getElementById('js-rotate');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        const titleElement = document.getElementById('title');

        let isPlaying = false;
        let currentSongIndex = 0;

        const songs = [
            './songs/bad_romance.mp3',
            './songs/mad_world.mp3',
            './songs/somebody.mp3'
            // Add more song paths here
        ];

        const songTitles = [
            'Bad Romance',
            'Mad World',
            'Somebody That I Used To Know'
            // Add corresponding titles here
        ];

        function playPause() {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            isPlaying = !isPlaying;
        }

        function loadSong(songIndex) {
            audio.src = songs[songIndex];
            titleElement.textContent = songTitles[songIndex];
            
            if (isPlaying) {
                audio.play();
            }
        }

        playButton.addEventListener('click', playPause);

        prevButton.addEventListener('click', () => {
            currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
            loadSong(currentSongIndex);
        });

        nextButton.addEventListener('click', () => {
            currentSongIndex = (currentSongIndex + 1) % songs.length;
            loadSong(currentSongIndex);
        });
