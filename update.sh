# docker stop $(docker ps -a -q)
# docker rm $(docker ps -a -q)
# docker images
# docker rmi $(docker images -q)
git pull
docker build -t voron .
docker stop voron
docker run -it -p 5000:5000 voron 
