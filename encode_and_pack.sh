#!/bin/sh

input_movie="trailer.mp4"


# H264 Encoding
# https://shaka-project.github.io/shaka-packager/html/tutorials/encoding.html

# 360p
ffmpeg -i ${input_movie} -c:a copy \
  -vf "scale=-2:360" \
  -c:v libx264 -profile:v baseline -level:v 3.0 \
  -x264-params scenecut=0:open_gop=0:min-keyint=72:keyint=72 \
  -minrate 600k -maxrate 600k -bufsize 600k -b:v 600k \
  -y h264_baseline_360p_600.mp4


# 480p
ffmpeg -i ${input_movie} -c:a copy \
  -vf "scale=-2:480" \
  -c:v libx264 -profile:v main -level:v 3.1 \
  -x264-params scenecut=0:open_gop=0:min-keyint=72:keyint=72 \
  -minrate 1000k -maxrate 1000k -bufsize 1000k -b:v 1000k \
  -y h264_main_480p_1000.mp4


# 720p
ffmpeg -i ${input_movie} -c:a copy \
  -vf "scale=-2:720" \
  -c:v libx264 -profile:v main -level:v 4.0 \
  -x264-params scenecut=0:open_gop=0:min-keyint=72:keyint=72 \
  -minrate 3000k -maxrate 3000k -bufsize 3000k -b:v 3000k \
  -y h264_main_720p_3000.mp4


  # 1080p
ffmpeg -i ${input_movie} -c:a copy \
  -vf "scale=-2:1080" \
  -c:v libx264 -profile:v high -level:v 4.2 \
  -x264-params scenecut=0:open_gop=0:min-keyint=72:keyint=72 \
  -minrate 6000k -maxrate 6000k -bufsize 6000k -b:v 6000k \
  -y h264_high_1080p_6000.mp4


# DASH content packaging:
# https://shaka-project.github.io/shaka-packager/html/tutorials/dash.html

packager \
  in=h264_baseline_360p_600.mp4,stream=audio,output=audio.mp4 \
  in=h264_baseline_360p_600.mp4,stream=video,output=h264_360p.mp4 \
  in=h264_main_480p_1000.mp4,stream=video,output=h264_480p.mp4 \
  in=h264_main_720p_3000.mp4,stream=video,output=h264_720p.mp4 \
  in=h264_high_1080p_6000.mp4,stream=video,output=h264_1080p.mp4 \
  --mpd_output trailer.mpd
