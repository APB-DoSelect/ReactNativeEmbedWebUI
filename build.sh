cd /home/user/workspace/ 
. $HOME/.nvm/nvm.sh && nvm use v16 && npm install --force

#Run the embed UI on port 8000
cp /home/user/workspace/PORT8001URL.json /opt/assets/Simulator/data.json 
cd /opt/assets/Simulator/
python -m SimpleHTTPServer 8000 &> /dev/null & echo "Simulator running on port 8000"

#Run expo server on port 8001
cd /home/user/workspace/
npm run server  & echo "Json Server Started"
WEB_PORT=8001 expo start --web