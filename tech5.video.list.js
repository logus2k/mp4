class VideoList {

    constructor() {

        this.tags = document.getElementsByTagName("video");

        for (var x = 0; x < this.tags.length; x++) {
            this.tags[x].style.display = "none";
        }
    }

    add(url, poster, width, height, autoplay) {
        
        for (var x = 0; x < this.tags.length; x++) {

            if (this.tags[x].src == "") {

                this.tags[x].src = url;
                this.tags[x].width = width;
                this.tags[x].height = height;
                this.tags[x].poster = poster;
                this.tags[x].autoplay = autoplay;
                this.tags[x].style.display = "initial";

                var player = dashjs.MediaPlayer().create();
                player.initialize();
            
                player.updateSettings({
            
                    "debug": {
                        "logLevel": dashjs.Debug.LOG_LEVEL_NONE
                    },
                    "streaming": {
                        "scheduling": {
                            // Stops the player from loading segments while paused
                            "scheduleWhilePaused": false,
                        },
                        'buffer': {
                            // Enables buffer replacement when switching bitrates for faster switching
                            "fastSwitchEnabled": true
                        }
                    }
                });
            
                player.setAutoPlay(autoplay);
                player.attachSource(this.tags[x].src);
                player.attachView(this.tags[x]);

                break;
            }
        }
    }
}

function init() {

    var list = new VideoList();

    list.add("http://localhost/video/mp4/avengers/avengers.mpd",
             "http://localhost/video/mp4/avengers/avengers_1280x720.png",
             640,
             360,
             false);

    list.add("http://localhost/video/mp4/tech5/t5_digital_id_demo/t5_digital_id_demo.mpd",
             "",
             640,
             360,
             false);

    list.add("http://localhost/video/mp4/tech5/t5_mobile_id4id/t5_mobile_id4id.mpd",
             "",
             640,
             360,
             false);

    list.add("http://localhost/video/mp4/tech5/t5_digital_id/t5_digital_id.mpd",
             "",
             640,
             360,
             false);

    list.add("http://localhost/video/mp4/tech5/t5_touchless_fingerprint_and_digital_id/t5_touchless_fingerprint_and_digital_id.mpd",
             "",
             640,
             360,
             false);
}

window.addEventListener("load", init);
