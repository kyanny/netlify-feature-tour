#!/bin/bash

curl "http://localhost:8888/.netlify/functions/hello?episodeUrl=https://open.spotify.com/episode/0LlLUPkyPE78mRppvLn3oM?si=Yok3ZjgCTVGdhJrNotl5tg"

echo
# https://open.spotify.com/episode/3IYtz1Y2bguoejhxzjkzIR?si=DvYJyL-nS_uRFsqXbMFhIg
curl "http://localhost:8888/.netlify/functions/hello?episodeUrl=https://open.spotify.com/episode/3IYtz1Y2bguoejhxzjkzIR?si=DvYJyL-nS_uRFsqXbMFhIg"

echo
curl "http://localhost:8888/.netlify/functions/hello?episodeUrl=https://open.spotify.com/episode/70bPCLf2LkdvW6RLlmder9?si=2d6dAdXiSOOzZpgRe4x5Wg"
