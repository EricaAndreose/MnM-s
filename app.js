const audio = document.getElementById('audio');
        const playButton = document.getElementById('js-rotate');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        const titleElement = document.getElementById('title');

        let isPlaying = false;
        let currentSongIndex = 0;

        const songs = [
            './songs/1500 - Gaga.mp3',
            './songs/1800 - Sonatine.mp3',
            './songs/1930 - Mariù.mp3',
            './songs/1970 - Pooh.mp3',
            './songs/2000 - Stilton.mp3',
            './songs/2030 - Dune.mp3'
            // Add more song paths here
        ];

        const songTitles = [
            '1500 - Gaga',
            '1800 - Sonatine',
            '1930 - Mariù',
            '1970 - Pooh',
            '2000 - Stilton',
            '2030 - Dune'
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
