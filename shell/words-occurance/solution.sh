#!/bin/bash

echo 'the red hat' > file.txt
sed -i '1ithe red red carpet' file.txt

cat file.txt

echo "No. of unique words : `tr ' ' '\n' < file.txt | sort | uniq -c | wc -l`"

tr ' ' '\n' < file.txt | grep -v "^$" | sort | uniq -c | sort -nr | awk '{print $2, $1}'
