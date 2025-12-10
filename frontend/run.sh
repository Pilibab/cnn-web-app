#!  THIS SCRIPT IS CREATED TO ALLOW BASH SCRIPT TO RUN BOTH FRONT AND BACKEND
#!  this is run.sh file 

# Start backend in background
cd ../backend
python server.py &
BACKEND_PID=$!

# Go back to frontend and start React
cd ../frontend
npm start

# Kill backend when frontend exits
trap "kill $BACKEND_PID" EXIT
