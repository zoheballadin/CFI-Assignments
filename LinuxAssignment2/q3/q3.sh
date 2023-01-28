mkdir "$(date +"%H:%M:%S")"
echo "$(date)" >> "$(date +"%H:%M:%S")"/output.txt
echo "$(whoami)">> "$(date +"%H:%M:%S")"/output.txt
echo "$(pwd)" >> "$(date +"%H:%M:%S")"/output.txt
